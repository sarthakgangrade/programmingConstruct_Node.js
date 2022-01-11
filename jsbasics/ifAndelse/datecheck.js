"use strict"
const ps=require('prompt-sync')
const prompt=ps();
console.log("enter the date & day between march20 & june20");
let date = prompt("enter the date: ");
let month = prompt("enter month as string : ");
if(month == "march" && date >= 20 && date < 31) 
{
    console.log("True");
}
else if(month == "april" && date < 30) 
{
    console.log("True");
}
else if(month == "may" && date < 31) 
{
    console.log("True");
}
else if(month == "june" && date <= 20) 
{
    console.log("True");
}
else 
{
    console.log("False");
}
