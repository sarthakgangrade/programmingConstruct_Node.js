"use strict"
const ps=require('prompt-sync')
const prompt=ps();
console.log("power of 2 to get the table")
let n = parseInt(prompt("enter number: "));
let i=0
for(i=1;i<n;i++)
{
    let result=(2**i)
    console.log(result)
}