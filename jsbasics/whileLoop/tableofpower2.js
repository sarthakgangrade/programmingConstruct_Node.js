"use strict"
const ps=require('prompt-sync')
const prompt=ps();
console.log("power of 2 to get the table")
let n = parseInt(prompt("enter number: "));
let i=1

while(i<n)
{
    let result=(2**i++)
    if(result<256)
    {
        console.log(result)
    }
    
}