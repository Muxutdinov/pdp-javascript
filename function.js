// function Passport(){
//     console.log('passport number :', 'AB123456')
//     console.log('name','Jaxongir')
//     console.log('surname','Muxutdinov')
//     console.log('date:', 'malumot')
//     console.log('================')
// }
// Passport()
// Passport()
//===========================

// function Passport(pw,name,surname,date){
//     console.log('passport number :', pw)
//     console.log('name',name)
//     console.log('surname',surname)
//     console.log('date:', date)
//     console.log('================')
// }
// Passport(76476,`Jaxongir`,"Muxutdinov",7674)
// Passport(988965,`Ziyoviddin`,"Sayfiev",45678)
//==========================================

// function G96(){
// Passport(76476,`Jaxongir`,"Muxutdinov",7674)
// Passport(988965,`Ziyoviddin`,"Sayfiev",098765)
// Passport(988965,`Ziyoviddin`,"Sayfiev",098765)
// Passport(988965,`Ziyoviddin`,"Sayfiev",098765)
// Passport(988965,`Ziyoviddin`,"Sayfiev",098765)
// Passport(988965,`Ziyoviddin`,"Sayfiev",098765)
// Passport(988965,`Ziyoviddin`,"Sayfiev",098765)
// }
// g96()
//================================================
// function Passport(pw,name,surname,date=`malumot yoq`){
//     console.log('passport number :', pw)
//     console.log('name',name)
//     console.log('surname',surname)
//     console.log('date:', date)
//     console.log('================')
// }
// Passport(76476,`Jaxongir`,"Muxutdinov")
//===============================================================

// var num = 10 

// function get(){
//     return 10
// }
// console.log(get())
//=========================
// function pow(a,b){
//     return a**b
// }

// console.log(pow(3,2))

//========================
// function pow(a,b){
//     if(a>b){
//         return 'a katta'
//     }else{
//         return 'b katta'
//     }
//     return a**b
// }
// console.log(Math.pow(3,2))
// console.log(pow(3,2))
//==============================================practice





//=======================Math
// round
// function round(a){
//     var qoldiq = a - Number.parseInt(a)
//     if(qoldiq >= 0.5){
//           console.log(Number.parseInt(a)+1)
//     }else{
//           console.log(Number.parseInt(a))
//     }
// }
// round(23.5)
//===============

//===================
//pow
// function pow(a,b){
//     console.log(a**b)
// }
// pow(3,8)
//========================
//sqrt
// function sqrt(a){
//    console.log(a**(1/3))
// }
// sqrt(27)

//==========================
//abs
// function abs(a){
//     if(a<0){
//         console.log(a * -1)
//     }
//     else{
//         console.log(a)
//     }
// }
// abs(-12)
// 
//============================
//ceil
// function ceil(a){
//     if(Number.isInteger(a)){
//         console.log(a)
//     }
//     else{
//         console.log(Number.parseInt(a)+1)
//     }
// }
// ceil(23.54)
//=====================

//========================
//floor
// function floor(a){
//          console.log(Number.parseInt(a))
//         }
// floor(7.8)
//================================


//====================
//max
// function max(a){
//     str = a.toString()
//     max = str[0]
//     for(let  i = 0;i<str.length;i++){
//         // console.log(str[i])
//         if(+max < +str[i+1]){
//             max = +str[i+1]
//         }

//         }
//         console.log(max)
//     }
// max(1234587543)
//=============================

//======================
//min
// function min(a){
//     str = a.toString()
//     max = str[0]
//     for(let  i = 0;i<str.length;i++){
//         // console.log(str[i])
//         if(+max > +str[i+1]){
//             max = +str[i+1]
//         }

//         }
//         console.log(+min)
//     }
// min(1234587543)
// let a = 12.6

// function round(){
//     let qoldiq = a - Number.parseInt(a);
//     if(qoldiq>=0.5){
//         console.log(Number.parseInt(a)+1);
//     }
//     else{
//         console.log(Number.parseInt(a));
//     }
// }
// round(a)
