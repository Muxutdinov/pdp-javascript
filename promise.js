// const Facebook = (info)=>{
//     setTimeout(()=>{
//         return `Welcome ${info} to Facebook`;
//     },2000)
// }

// const user = Facebook(`Jaxongir`)
// console.log(user);


//===========================================callback
// const Facebook = (info, callback)=>{
//     setTimeout(()=>{
//         return callback(`Welcome ${info} to  Facebook`);
//     },2000)
// }

// console.log("Started...");
// Facebook(`Jaxongir`,(data)=>{
//     console.log(data);
// })
//===========================================callback


//===========================================promise
// login = `mj`
// pw = 123
// const facebook = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         if( login === `mj` && pw === 123){
//             resolve(`welcome to Facebook`)
//         }
//         else{
//             reject(`login yoki pw xato`)
//         }
//     }, 2000)
// })
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));

//===========================================promise


//==================================================3
// login = `mj`
// pw = 123
// const facebook = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         if( login === `mjo` && pw === 123){
//             resolve(`welcome to Facebook`)
//         }
//         else{
//             reject(`login yoki pw xato`)
//         }
//     }, 2000)
// })

// const logIn = async ()=>{
//     console.log("started...");
//     try{
//         user = await facebook
//         console.log(user);
//     } catch (err){
//         console.log(err);
//     }
//     console.log("finished");
// };

// logIn();

//=========================================3
//==================practice
// login = "ttpu"
// pw = 123

// const facebook = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
// if(login==="ttpuu"&&pw===123){
//     console.log(resolve("Welcome to Facebook"));
// }
// else{
//     console.log(reject("cannot"));
// }
//     }, 2000)
// })
// const logIn = async()=>{
//     console.log("started...");
//     try{
//         user = await facebook
//         console.log(user);
//     }
//     catch(xato){
//         console.log(xato);
//     }
//     console.log("finished");
// }
// logIn()


// login = "ttpu"
// pw = 123
// const facebook = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
// if(login==="ttpu"&&pw===123){
//     console.log(resolve("Welcome to Facebook"));
// }
// else{
//     console.log(reject("You cannot Facebook"));
// }
//     }, 2000)
// })
// const LogIn = async()=>{
//     console.log("Started...");
//     try{
//         user = await facebook
//         console.log(user);
//     }
//     catch(xato){
// console.log(xato);
//     }
//     console.log("Finished");
// }
// LogIn()


login = "ttpu"
pw = 123
const facebook = new Promise((resolve, reject)=>{
setTimeout(()=>{
 if(login==="ttpu"&&pw===223){
     console.log(resolve("Welcome"));
 }
 else{
     console.log(reject("not yet"));
 }
}, 1000)
})