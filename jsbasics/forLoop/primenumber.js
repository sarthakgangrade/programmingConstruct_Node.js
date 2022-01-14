"use strict"
const ps=require('prompt-sync')
const prompt=ps();
console.log("find prime number or not")
let n = parseInt(prompt("enter number: "));
let i=0
let count=0
for (i = 1; i <= n; i++)

{
    if (n % i == 0)                                     
    count = count + 1;
}
if (count == 2)                                            
{
    console.log(n + " is a prime number");

}
else
{
    console.log(n + " is not a prime number");
}