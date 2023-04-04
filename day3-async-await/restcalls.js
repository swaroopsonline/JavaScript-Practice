import axios from "axios";

// let res = await axios.get('https://httpstat.us/200');

// console.log(res.data)

// ----------------------------------------------------------

// async function httpGetCall(url){

//     return await axios.get(url)

// }

// let httpResponse = await httpGetCall("https://www.boredapi.com/api/activity")

// console.log(httpResponse.data)
// //console.log(httpResponse.data.activity)
// console.log(httpResponse.status)

// -----------------------------------------------------------

async function httpGetCall(url){
    try{

        return await axios.get(url)
    }
    catch(err){
        console.log("Error is "+err)

    }

    
}

let response = await httpGetCall('http://httpstat.us/400')

console.log("response is "+response)

