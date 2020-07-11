// 0から100までの数値列がnumListには入っています
const numList = [];
for (let i = 0; i <= 100; i++) {
  numList.push(i);
}

// TODO: 3の倍数で割り切れる数値、5の倍数で割り切れる数値、15の倍数で割り切れる数値
// に分けてください

// ヒント
// 配列に新しい要素を追加したいときは　push　を使います(上の処理を参考)
// JavaScriptは上から順に処理される特徴を持つ

// 条件:15で割り切れる物は3の倍数にも5の倍数にも含まれてはいけない

let fifteen = [];
let fifth = [];
let third = [];


// for (i of numList) {
//   if (i %15 === 0) {
//     fifteen.push(i);
//   } else if (i %5 === 0) {
//     fifth.push(i);
//   } else if (i %3 === 0){
//     third.push(i);
//   };
// };
for (i of numList) {
  if (i %3 === 0) {
    third.push(i);
  } else if (i %5 === 0) {
    fifth.push(i);
  } else if (i %15 === 0){
    fifteen.push(i);
  };
};




console.log(fifteen);
console.log(fifth);
console.log(third);
