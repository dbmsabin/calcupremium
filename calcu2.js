var screen=document.querySelector('#screen');
var btn=document.querySelectorAll('.btn');

/*============ For getting the value of btn, Here we use for loop ============*/
for(item of btn)
{
    item.addEventListener('click',(e)=>{
        btntext=e.target.innerText;

        if(btntext =='×')
        {
            btntext= '*';
        }

        if(btntext=='÷')
        {
            btntext='/';
        }
        screen.value+=btntext;
    });
}

function sin()
{
    screen.value=Math.sin((Math.PI/180)*screen.value);
}

function cos()
{
    screen.value=Math.cos((Math.PI/180)*screen.value);
    screen.value = Math.abs(screen.value) < 1e-10 ? 0 : cosValue.toFixed(10);
}

function tan()
{   if(screen.value== 90){
    screen.value="Undefined";
}
    screen.value=Math.tan((Math.PI/180)*screen.value);
}

function pow()
{
    screen.value=Math.pow(screen.value,2);
}

function sqrt()
{
    screen.value=Math.sqrt(screen.value,2);
}

function log()
{
    screen.value=Math.log(screen.value);
}
function perc(){
    screen.value=screen.value/100;
}

function pi()
{
    screen.value= 3.14159265359;
}

function e()
{
    screen.value=2.71828182846;
}

function fact()
{
    var i, num, f;
    f=1
    num=screen.value;
    for(i=1; i<=num; i++)
    {
        f=f*i;
    }

    i=i-1;

    screen.value=f;
}

function backspc()
{
    screen.value=screen.value.substr(0,screen.value.length-1);
}