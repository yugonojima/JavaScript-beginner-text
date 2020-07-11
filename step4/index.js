const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// TODO: 奇数は奇数と偶数は偶数と足し合わせ、答えをコンソールに出力

let even = 0;
let odd = 0;

for (let i =0;i < 10; i++) {
  if (numList[i] %2 === 0) {
     even += numList[i];
  } else {
    odd += numList[i];
  };
};


console.log(even, odd);
