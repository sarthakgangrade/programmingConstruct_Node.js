"use strict"
const ps=require('prompt-sync')
const prompt=ps();
console.log("enter the no. to convert into week day");
let n = prompt("enter no. : ");
if(n==1)
{
    console.log("monday")
}
else if(n==2)
{
    console.log("tuesday")
}
else if(n==3)
{
    console.log("wednesday")
}
else if(n==4)
{
    console.log("thursday")
}
else if(n==5)
{
    console.log("friday")
}
else if(n==6)
{
    console.log("saturday")
}
else if(n==7)
{
    console.log("sunday")
}
else
{
    console.log("invalid input")
}

