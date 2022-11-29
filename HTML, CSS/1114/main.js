// 1. 유저가 값을 입력한다.
// 2. + 버튼을 클릭하면, 할 일이 추가 되어 진다.
// 3. delete 버튼을 누르면 할 일이 삭제되어진다.
// 4. check 버튼을 누르면 할 일이 끝나면서 취소선이 그어진다.(linethrough)
// 5. 진행중, 끝남 탭을 누르면 할 일이 끝나면서 underbar가 이동한다.
// 6. 끝남 탭은, 끝난 아이템만 진행중 태그는, 진행중인 아이템만 보여준다.
// 7. 전체 탭을 누르면, 다시 전체 아이템으로 돌아옴.

const uniqueId = Math.random().toString(36).substr(2, 9);
console.log(uniqueId);
