
let employees = [{"name":"John","Exp":3},{"name":"Ramu","Exp":0},{"name":"Sam","Exp":1}]

let experienced = employees.map((element)=>(element.Exp>0))

// let experienced = employees.map(getFreshers)

// function getFreshers(element){

//     if(element.Exp > 0){
        
//         console.log("The name of the experienced employee is "+element.name)
//         return element.name
        

//     } 
//     console.log("The name of the fresher is "+element.name)
// }

console.log(experienced)

