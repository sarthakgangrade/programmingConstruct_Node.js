"use strict"
const ps=require('prompt-sync')
const prompt=ps();
console.log("prime factors")
let n = parseInt(prompt("enter number: "));
for (let i=1; i*i<=n; i++)
{
    if (n % i == 0)
        {
            console.log(i);
        }
}