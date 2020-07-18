// 17は偶数か奇数か
const n = 17;
function EvenOrOdd(n) {
  // TODO: 偶数奇数判定関数を作成する
  if (n %2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }

}

console.log(EvenOrOdd(n));

// 17は素数か素数でないか
// function is_prime(n) {
//   // TODO: 素数判定関数を作成する
//   for (let i = 2; i < n; i++) {
//     if (n %i === 0) {
//       return false
//     } else {
//       return true
//     }
//   }
// }





// コラム
// arrow関数という書き方がjsではよく使われる
// 上記のEvenOrOdd関数の例をarrow関数に書き換えると
// const EvenOrOdd = (n) => {}
// という形で書くことができる
// 今後よくみる形になるのでここで覚えておく

const is_prime = (n) => {
  for (let i = 2; i < n; i++) {
    if (n %i === 0) {
      return false
    } else {
      return true
    }
  };
} 



console.log(is_prime(n)?'素数':'素数じゃない');