"use strict"
const ps=require('prompt-sync')
const prompt=ps();
console.log("harmonic number")
let n = parseInt(prompt("enter number: "));
let i=0
let HarmonicSum=0
for(i=1;i<n;i++)
{
    console.log("1/" + i + "=" + (1 / i))
    HarmonicSum += (1 / i);
}
console.log("The Sum of harmonic number is : " + HarmonicSum)
