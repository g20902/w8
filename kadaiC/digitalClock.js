function updateClock(){
  //時刻に関するデータを取得(id:clock)
  var now = new Date();
  var hour = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();
  //日時に関するデータを取得(id:clockDate)
  var year = now.getFullYear();
  var month = now.getMonth()+1;
  var date = now.getDate();

  //1ケタの場合は0を足して2ケタにする
  if(hour<10) hour = "0"+hour;
  if(min<10) min = "0"+min;
  if(sec<10) sec = "0"+sec;

  if(month<10) month = "0"+month;
  if(date<10) date = "0"+date;

  document.getElementById('clock').innerHTML = hour+":"+min+":"+sec;
  document.getElementById('clockDate').innerHTML = year+"."+month+"."+date;
}

function start(){
  //1秒ごとにupdateClock関数を呼び出す
  setInterval("updateClock();",1000);
  updateClock();
}
