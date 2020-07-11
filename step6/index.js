// TODO: 現在時刻を表示する

// TODO: 現在時刻の年と月を数値型で取得

// exercise: 現在時刻からあと何日立てば、1月1日(正月)か

const time =new Date();

const Year = time.getFullYear();
const Month = time.getMonth()+1;

console.log(time);
console.log(Year);
console.log(Month);

// function myFunc(){
  myD   = new Date();                              // 現在時刻 取得
  myYear = myD.getFullYear(); // 今年の '年'
  myNextYear = new Date( myYear+1 , 0 , 1 );     // 来年の１月１日の経過秒を取得
  myMsec = myNextYear.getTime() - myD.getTime(); // 来年1月1日 と現在の差(ミリ秒)
  myNextDay  = Math.floor ( myMsec / (1000*60*60*24) ); // '日' を計算
  // myMsec     -= ( myNextDay * (1000*60*60*24) );       // 経過秒から '日' を引く
  // myNextHour = Math.floor ( myMsec / (1000*60*60) );    //  '時' を計算
  // myMsec     -= ( myNextHour * (1000*60*60) );         // 経過秒から '時' を引く
  // myNextMin  = Math.floor ( myMsec / (1000*60) );       //  '分'  を計算
  // myMsec     -= ( myNextMin * (1000*60) );             // 経過秒から '分' を引く
  // myNextSec  = Math.floor ( myMsec / 1000 );            //  '秒' を計算
  // myDisp = "";                                     // 文字クリア
  // if ( myNextDay  != 0 ) myDisp += myNextDay + "日と ";   // 0日なら表示しない
  // if ( myNextHour != 0 ) myDisp += myNextHour + "時間 ";  // 0時間なら表示しない
  // if ( myNextMin  != 0 ) myDisp += myNextMin + "分 ";     // 0分なら表示しない
  // myDisp += myNextSec + "秒";                          // 秒セット
//  document.getElementById("countdown").innerHTML = myDisp;
// };

// let nextYear = setInterval( "myFunc()", 1000 );
console.log(myNextDay);