let ms=0;
let sec=0;
let min =0;
let setTimer;
function increment()
{ms=ms+1;
    if(ms==100){
        sec = sec+1
        ms=0;
    }
    document.getElementById('sec').innerHTML = sec;
    document.getElementById('ms').innerHTML = ms;
    if(sec==60)
    {
        min = min+1
        sec=0
        document.getElementById('min').innerHTML = min;
        document.getElementById('sec').innerHTML = sec;
    }
}
function StartTimer()
{
    var audio = new Audio('Makani.mp3');
audio.play();
   setTimer = setInterval(increment,10)
}
function StopTimer()
{
    var audio = new Audio('');
audio.play();
    clearInterval(setTimer)
}
