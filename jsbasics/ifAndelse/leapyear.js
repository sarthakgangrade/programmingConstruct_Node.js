"use strict"
const ps=require('prompt-sync')
const prompt=ps();
console.log("year to check")
let year = prompt("enter the year: ");

if ((year%4)==0 && (year%400)==0 && (year%100)!=0)
{
    console.log(year+" is leap year");

}
else
{
    console.log(year+" is not leap year");
}