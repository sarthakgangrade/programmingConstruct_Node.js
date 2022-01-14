"use strict"
const ps=require('prompt-sync')
const prompt=ps();
console.log("select the unit conversion enter your choice")
console.log("1.feet to inch      2.inch to feet   3.feet to meter    4.meter to feet")
let a = parseInt(prompt("enter your choice: "));
let n = parseInt(prompt("enter number for conversion: "));
let oneFootInInches = 12;
let oneInchInFoot = 1/oneFootInInches
let onefootInmeter = 3.28
let onemeterInfoot = 1/onefootInmeter
switch(a)
{
    case 1:
        let result= n*oneFootInInches
        console.log(result);
        break;
        case 2:
            let result1= n*oneInchInFoot
            console.log(result1);
            break;
            case 3:
                let result2= n*onefootInmeter
                console.log(result2);
                break;
                case 4:
                    let result3= n*onemeterInfoot
                    console.log(result3);
                    break;
                    default:
                        console.log("invalid result");
                        break;
}