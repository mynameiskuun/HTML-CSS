/* console.log(prompt("please enter a number")); */

let Int_a = Math.ceil(Math.random() * 9);
let Int_b = Math.ceil(Math.random() * 9);
let Int_c = Math.ceil(Math.random() * 9);

let Num1 = Int_a.toString();
let Num2 = Int_b.toString();
let Num3 = Int_c.toString();

if (Num1 !== Num2 && Num2 !== Num3 && Num1 !== Num3) {
  console.log(Num1 + Num2 + Num3);
  /* 정수형으로 변환된 int a + int b + int c 출력 */
} else {
  console.log(Num1);
}
