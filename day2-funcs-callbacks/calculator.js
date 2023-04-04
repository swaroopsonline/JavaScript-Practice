function add(num1,num2){

    return num1 + num2
}

function sub(num1,num2){

    return num1 - num2

}

// function mul(num1,num2){

//     return num1 * num2

// }

// let sum = add(3,5)
// let diff = sub(2,4)
// let multiply = mul(6,8)


// console.log("sum is "+sum);
// console.log("diff is "+diff);
// console.log("multiplication is "+multiply)


function calculate(num1, num2, mathOperation){ //example of callback function

    return mathOperation(num1,num2)
}



let sum = calculate(3,5,add)

console.log("sum of callback is "+sum)

let diff = calculate(8,3,sub)

console.log("Difference is "+diff)

