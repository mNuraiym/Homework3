 let a = prompt("Введите число ");
 if (a > 0) {
   let ggg = function () {
      console.log("!");
   };
   ggg()
 } else {
   let ggg = function oneF() {
      console.log("!!");
   };
   ggg()
}
/////////////////////////////////////////////////////////////////
// let arr = [];
// for (let i = 0; i < 10; i++) {
//   arr.push("x");
// }
// console.log(arr);
// let arr = [];
// for (let i = 0; i < 10; i++) {
//   arr[i] = "x";
// }
// console.log(arr);
/////////////////////////////////////////////////////////////////
function call() {
  let i = 1;
  return function () {
    return i++;
  };
}
let func = call();
console.log(func());
console.log(func());
console.log(func());
console.log(func());

