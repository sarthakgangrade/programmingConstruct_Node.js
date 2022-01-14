"use strict"
const ps=require('prompt-sync')
const prompt=ps();
console.log("find prime number or not")
let n = parseInt(prompt("enter lower limit number: "));
let n1 = parseInt(prompt("enter upper limit number: "));

for (let i = n; i <= n1; i++) {
    let flag = 0;

    
    for (let j = 2; j < i; j++) 
    {
        if (i % j == 0) 
        {
            flag = 1;
            break;
        }
    }

    
    if (i > 1 && flag == 0) 
    {
        console.log(i);
    }
}