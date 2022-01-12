"use strict"
const ps=require('prompt-sync')
const prompt=ps();
console.log("enter the no. to perform arithmatic operations");
let a = prompt("enter no.-1 : ");
let b = prompt("enter no.-2 : ");
let c = prompt("enter no.-3 : ");
let ans1=( a + b *c)
console.log("The compute of ( a + b *c) is : " +ans1)
      
let ans2=( a * b +c)
console.log("The compute of ( a * b +c) is : "+ans2)
    
let ans3=( a +b /c)
console.log("The compute of ( a +b /c) is : " +ans3)

let ans4=( a%b+(a*c))
console.log("The compute of ( a%b+c) : "+ans4)


if (ans1 == ans2 && ans1 == ans3 && ans1 == ans4) 
{
    console.log("All the three numbers are equal")
}
else
    if (ans1 > ans2 && ans1 > ans3 && ans1 > ans4)
    {
        console.log("( a + b *c) is biggest : "+ans1)
    }
    if (ans1 < ans2 && ans1 < ans3 && ans1 < ans4)
    {
        console.log("( a + b *c) is smallest : "+ans1)
    }
    else if  (ans2 > ans1 && ans2 > ans3 && ans2 > ans4)
    {
        console.log("( a * b +c) is biggest : "+ans2)
    }
    if (ans2 < ans1 && ans2 < ans3 && ans2 < ans4)
    {
        console.log("( a * b +c) is smallest : "+ans2)
    }
    else if  (ans3 > ans1 && ans3 > ans2 && ans3 > ans4)
    {
        console.log("( a +b /c) is biggest : "+ans3)
    }
    if (ans3 < ans1 && ans3 < ans2 && ans3 < ans4)
    {
        console.log("( a +b /c) is smallest : "+ans3)
    }
    else if  (ans4 > ans1 && ans4 > ans2 && ans4 > ans3)
    {
        console.log("( a%b+(a*c)) is biggest : "+ans4)
    }
    if (ans4 < ans1 && ans4 < ans2 && ans4 < ans3)
    {
        console.log("( a%b+(a*c)) is smallest : "+ans4)
    }