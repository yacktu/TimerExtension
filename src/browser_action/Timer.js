$(document).ready(function(){
  var Timer;
  var TotalSeconds;
  var IsRunning = false;
  var TimeOut;
  var TimeCounter = 0;
  Timer = document.getElementById("timer");
  TotalSeconds = [3, 5 * 60];

  $("#startTimer").click(function createTimer(event){
    IsRunning = true;
    console.log("clicked");
    console.log(IsRunning);
    UpdateTimer();
    TimeOut = window.setTimeout(Tick, 1000);
    });

  $("#pauseTimer").click(function pauseTimer(event){
    console.log("pause clicked");
    console.log(IsRunning);
    if (IsRunning === false){
      TimeOut = window.setTimeout(Tick, 1000);
      IsRunning = true;
    }else{
      console.log(TimeOut)
      window.clearTimeout(TimeOut);
      IsRunning = false;
    }
    });

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

    function UpdateTimer() {
      var Seconds = TotalSeconds[TimeCounter];
      var Days = Math.floor(Seconds / 86400);
      Seconds -= Days * 86400;
      var Hours = Math.floor(Seconds / 3600);
      Seconds -= Hours * (3600);
      var Minutes = Math.floor(Seconds / 60);
      Seconds -= Minutes * (60);
      var TimeStr = ((Days > 0) ? Days + " days " : "") + LeadingZero(Hours) + ":" + LeadingZero(Minutes) + ":" + LeadingZero(Seconds);
      Timer.innerHTML = TimeStr;
      }

      function LeadingZero(Time){
      return (Time < 10) ? "0" + Time : + Time;
    }

});
