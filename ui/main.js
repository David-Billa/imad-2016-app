console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML='NEW VALUE';
var img = document.getElementById('madi');

var marginLeft=0;
function moveRight()
{
    marginLeft=marginLeft+100;
    img.style.marginbottom='10px';
    img.style.marginLeft=marginLeft+'px';
}
img.onclick = function()
{
 setInterval(moveRight,100);   
    };
