var TotalSeconds;
var IsRunning = false;
// var TimeOut;
var TimeCounter = 0;
var TimeOut;
var TimeStr = "Click Start Timer";
TotalSeconds = [25 * 60, 5* 60];

function Tick() {
  if (TotalSeconds[TimeCounter] <= 0){
    if (TimeCounter >= TotalSeconds.length - 1){
      alert("Time's up!");
      return;
    }
    alert("Time's up!");
    TimeCounter ++;
  }
  TotalSeconds[TimeCounter] -= 1;
  UpdateTimer();
  TimeOut = window.setTimeout(Tick, 1000);
}

function startTimer() {
  TimeOut= window.setTimeout(Tick, 1000);
}

function pauseTimer() {
  window.clearTimeout(TimeOut);
}

function UpdateTimer() {
  var Seconds = TotalSeconds[TimeCounter];
  var Days = Math.floor(Seconds / 86400);
  Seconds -= Days * 86400;
  var Hours = Math.floor(Seconds / 3600);
  Seconds -= Hours * (3600);
  var Minutes = Math.floor(Seconds / 60);
  Seconds -= Minutes * (60);
  TimeStr = ((Days > 0) ? Days + " days " : "") + LeadingZero(Hours) + ":" + LeadingZero(Minutes) + ":" + LeadingZero(Seconds);

}

function LeadingZero(Time){
  return (Time < 10) ? "0" + Time : + Time;
}
