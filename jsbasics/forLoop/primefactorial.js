"use strict"
const ps=require('prompt-sync')
const prompt=ps();
console.log("enter the number to calculate factorial")
let n = parseInt(prompt("enter number: "));
let fact=1
for(let i=1;i<=n;i++)
{
    fact=fact*i

}
console.log("prime Factoril of "+n+"is"+fact)