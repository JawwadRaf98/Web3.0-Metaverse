// // Chapter no 13 practice exercises

// // Create a function named greet() that takes one argument, fullName .
// // That argument should be an array. Output the items of the array into
// // the console interpolated into a greeting message string.

// const greetingName = (x) =>{
//     console.log(`Hello "${x}" welcome to our website.`)
// }

// const greet = (fn, cb = "") => {
//     fn.map((item, index)=>{
//         if(cb !== "") {
//         return cb(item)
//         }
//         else{
//             return console.log(`Hello "${item}" welcome to our website.`)
//         }
//     })
// }
// greet(['Irtiza','Hammad', 'Saad', 'Jawwad','Samrat'])
// greet(['Irtiza','Hammad', 'Saad', 'Jawwad','Samrat'], (x)=> console.log(`Hello "${x}" welcome to our website.`))


// let promise = (state)=>{

//     return(
//  new Promise((resolve,reject)=>{
//     if (state){
//         return resolve("success")
//     }else{
//         return reject("reject")
//     }
// })
//     )
// }

// promise(true)
// .then((value)=>{
//     console.log(value)
//     return promise(false)
// })
// .then((value)=>{
//     console.log(value)
//     return promise(false)
// })
// .catch((value)=>{
//     console.log(value)
//     console.log("Loop ended")
// })


const makeJuice = new Promise((res, rej)=>{
        if(mood>5){
            console.log("Ok")
            res(
               setTimeout(()=>{
                console.log("Your juice is  ready")
               }, 1000)
           )
        }else{
            rej(
                console.log("sorry mood is not ready")
            )
        }
    })

makeJuice.then(()=>{
    console.log("resolve")
}).catch(()=>{
    console.log("rejecct")
})