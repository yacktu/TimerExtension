$(document).ready(function(){
  var Timer;
  // var TotalSeconds;
  // var IsRunning = false;
  // var TimeOut;
  // var TimeCounter = 0;
  // TotalSeconds = [3, 5 * 60];
  Timer = document.getElementById("timer");

  window.setInterval(function refreshTimer(){
    Timer.innerHTML = chrome.extension.getBackgroundPage().TimeStr;
  },1000);

  $("#startTimer").click(function createTimer(event){
    chrome.extension.getBackgroundPage().TotalSeconds = [25 * 60, 5* 60];
    chrome.extension.getBackgroundPage().TimeCounter = 0;
    chrome.extension.getBackgroundPage().IsRunning = true;
    // console.log("clicked");
    // console.log(IsRunning);
    chrome.extension.getBackgroundPage().startTimer();
  });

  $("#pauseTimer").click(function pauseTimer(event){
    console.log (chrome.extension.getBackgroundPage().IsRunning);
    if (chrome.extension.getBackgroundPage().IsRunning === false){
      chrome.extension.getBackgroundPage().startTimer();
      chrome.extension.getBackgroundPage().IsRunning = true;
    }else{
      // console.log(TimeOut)
      chrome.extension.getBackgroundPage().pauseTimer();
      chrome.extension.getBackgroundPage().IsRunning = false;
    }
  });
  //
  // function Tick() {
  //   if (TotalSeconds[TimeCounter] <= 0){
  //     if (TimeCounter >= TotalSeconds.length - 1){
  //       alert("Time's up!");
  //       return;
  //     }
  //     alert("Time's up!");
  //     TimeCounter ++;
  //   }
  //   TotalSeconds[TimeCounter] -= 1;
  //   UpdateTimer();
  //   TimeOut = window.setTimeout(Tick, 1000);
  // }
  //
  // function UpdateTimer() {
  //   var Seconds = TotalSeconds[TimeCounter];
  //   var Days = Math.floor(Seconds / 86400);
  //   Seconds -= Days * 86400;
  //   var Hours = Math.floor(Seconds / 3600);
  //   Seconds -= Hours * (3600);
  //   var Minutes = Math.floor(Seconds / 60);
  //   Seconds -= Minutes * (60);
  //   var TimeStr = ((Days > 0) ? Days + " days " : "") + LeadingZero(Hours) + ":" + LeadingZero(Minutes) + ":" + LeadingZero(Seconds);
  //   Timer.innerHTML = TimeStr;
  // }
  //
  // function LeadingZero(Time){
  //   return (Time < 10) ? "0" + Time : + Time;
  // }
  //
});
