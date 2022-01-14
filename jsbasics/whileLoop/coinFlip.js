let tailcount=0
let headcount=0
let flip=Math.floor(Math.random()*2);
while (tailcount<=11 || headcount<=11)
{
    
    if(flip==0)
    {
        headcount=+1
    }
    else
    {
        tailcount=+1
    }
}
if(headcount>tailcount)
{
    console.log("head wins")
}
if(tailcount>headcount)
{
    console.log("tails wins")
}