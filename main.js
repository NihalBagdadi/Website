let i=0;
function increment()
{
    i=i+1
    document.getElementById('h1').innerHTML = i;
}
setInterval(increment,10)