
    var start=document.getElementById('start');
    var stop=document.getElementById('stop');
    var reset=document.getElementById('reset');
    var min=document.getElementById('min');
    var sec=document.getElementById('sec');
    var minbreak=document.getElementById('min-break');
    var secbreak=document.getElementById('sec-break');


    var startTimer;
    start.addEventListener('click', function(){
      if(startTimer===undefined){
        startTimer=setInterval(timer, 1000)
      }
      else{
        alert("Timer is running already");
      }
    })

    reset.addEventListener('click', function(){
      min.innerText=25;
      sec.innerText="00";

      minbreak.innerText= 5;
      secbreak.innerText="00";

      document.getElementById('counter').innerText=0;
      stopInterval()
      startTimer=undefined;
    })

    stop.addEventListener('click', function(){
    stopInterval()
    startTimer = undefined;
    })

    function timer()
    {
    if (sec.innerText!=0) {
      sec.innerText--;
    }else if (min.innerText!=0 && sec.innerText==0) {
      sec.innerText=59;
      min.innerText--;
    }
    }

    if (min.innerText==0 && sec.innerText==0) {
    if (secbreak.innerText!=0) {
      secbreak.innerText--;
    }else if (minbreak.innerText!=0 && secbreak.innerText==0) {
      secbreak.innerText=59;
      minbreak.innerText--
    }
    }

    if (min.innerText==0 && sec.innerText==0 && minbreak.innerText==0 && secbreak.innerText==0) {
    min.innerText=25;
    sec.innerText="00";

    minbreak.innerText=5;
    secbreak.innerText="00";
    document.getElementById('counter').innerText++;
    }

    function stopInterval()
    {
    clearInterval(startTimer);
    }
