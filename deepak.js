window.onload=function(){
    var tens=00;
    var seconds=00;
    var appendTens=document.getElementById('tens');
    var appendSecond=document.getElementById('second');
    var buttonStart=document.getElementById('button-start');
    var buttonStop=document.getElementById('button-stop');
    var buttonReset=document.getElementById('button-reset');
    var Interval;
    buttonStart.onclick=function(){
    Interval= setInterval(startTimer,10);
    }
    buttonStop.onclick=function(){
clearInterval(Interval);
    }
    buttonReset.onclick=function(){
        tens="00";
        seconds="00";
        clearInterval(Interval);
        appendTens.innerHTML=tens;
        appendSecond.innerHTML=seconds;
    }
    function startTimer(){
        tens++;
        if(tens<9){
            appendTens.innerHTML="0"+tens;
        }
        if(tens>9){
            appendTens.innerHTML=tens;
        }
        if(tens>60){
            seconds++;
            appendSecond.innerHTML="0"+seconds;
            tens=0;
            appendTens.innerHTML="0"+0;
        }
        if(seconds>9){
            appendSecond.innerHTML=seconds;
        }
    }

}