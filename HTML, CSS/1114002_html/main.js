let taskInput = document.querySelector("#task-input");
let addButton = document.querySelector("#add-button");
let tabs = document.querySelectorAll("#task-tabs div");
var taskList = [];
let mode = "all";
let filterList = [];

addButton.addEventListener("click", addTask);

for (let j = 1; j, tabs.length; j++) {
  tabs[j].addEventListener("click", function (event) {
    filter(event);
  });
}

function addTask() {
  let task = {
    id: randomIDGenerate(),
    taskContent: taskInput.value,
    isComplete: false,
  };

  taskList.push(task);

  render();
}

function render() {
  let list = [];
  if (mode == "all") {
    list = taskList;
  } else if (mode == "ongoing" || mode == "done") {
    list = filterList;
  }
  let resultHTML = "";
  for (i = 0; i < list.length; i++) {
    if (list[i].isComplete == true) {
      resultHTML += `
      <div class="task">
        <div class="task-done">${list[i].taskContent}</div>
        <div>
          <button onclick="toggleComplete('${list[i].id}')">Check</button>
          <button onclick="deleteTask('${list[i].id}')">Delete</button>
        </div>
      </div>
      `;
    } else {
      resultHTML += `
      <div class="task">
        <div>${list[i].taskContent}</div>
        <div>
          <button onclick="toggleComplete('${list[i].id}')">Check</button>
          <button onclick="deleteTask('${list[i].id}')">Delete</button>
        </div>
      </div>
      `;
    }
  }
  document.querySelector("#task-board").innerHTML = resultHTML;
}

function randomIDGenerate() {
  return Math.random().toString(36).substr(2, 9);
}

function toggleComplete(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      // isComplete의 값은 true/false 이므로 !isComplete는 스위치가 된다
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  render();
  console.log(taskList);
}

function filter(event) {
  // console.log 클릭이 되는지 확인
  filterList = [];
  mode = event.target.id;
  if (mode == "all") {
    render();
  } else if (mode == "ongoing") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete == false) {
        filterList.push(taskList[i]);
      }
    }
  } else if (mode == "done") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete == true) {
        filterList.push(taskList[i]);
      }
    }
  }
  render();
}

function deleteTask(id) {
  if (mode == "all") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].id == id) {
        taskList.splice(i, 1);
        break;
      }
    }
  } else if (mode == "ongoing" || mode == "done") {
    for (let i = 0; i < filterList.length; i++) {
      if (filterList[i].id == id) {
        filterList.splice(i, 1);
        break;
      }
    }
  }
  render();
}

// function deleteTask(id) {
//   for (let i = 0; i < taskList.length; i++) {
//     if (taskList[i].id == id) {
//       taskList.splice(i, 1);
//       break;
//     }
//   }
//   render();
// }
