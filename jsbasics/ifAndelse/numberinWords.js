"use strict"
const ps=require('prompt-sync')
const prompt=ps();
console.log("Single digit Number to convert in words")
let n = prompt("enter the single digit number: ");
if(n==0)
{
    console.log("Zero")
}
else if(n==1)
{
    console.log("one")
}
else if(n==2)
{
    console.log("two")
}
else if(n==3)
{
    console.log("three")
}
else if(n==4)
{
    console.log("four")
}
else if(n==5)
{
    console.log("five")
}
else if(n==6)
{
    console.log("six")
}
else if(n==7)
{
    console.log("seven")
}
else if(n==8)
{
    console.log("eight")
}
else
{
    console.log("nine")
}