let Array = [Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10)];
let sum = 0;
for(i=0; i< Array.length;i++)
{
    console.log(Array[i]+',');
    sum = sum + Array[i];
}
let avg = sum / Array.length;
console.log('Sum of the numbers is: ' +sum);
console.log('Average of the numbers is:'+avg);
