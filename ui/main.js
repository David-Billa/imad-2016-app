console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML='NEW VALUE';
var img = document.getElementById('madi');
var marginLeft=0;
function moveRight()
{
    marginleft=marginleft+10;
    img.style.marginLeft=marginLeft+'px';
}
madi.onclick = function()
{
 var interval = setInterval(moveRight,100);   
    };
