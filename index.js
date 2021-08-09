
// let title = "pdp Academy";
// let d = 0;
// let p = 0;
// for(a = 0; a  < title.length;a++){
//     if(title.charAt(a)== "d"){
//         d++;
//         // console.log("d ni indexsi:"+(a+1));  
//     }else if(title.charAt(a)=="p"){
//         p++;
//         // console.log("p ni indexsi:"+(a+1));
//     }
//     }
// console.log("text uzunligi:"+title.length);
// console.log("p:",p);
// console.log("d:",d);
//====================================================...
// var numbers = [3,4,5,67,8,1,2,356,7844,3,2,12,43]
// var title = ["Orange", "Apple", "Banana", ... numbers]
// obj = {name:"Sardor", surname:"MX"}
// obj = {... obj, surname:"Muxutdinov"}
// const {name, surname, num} = obj;
// console.log(surname, num);
//====================================================...



//=========================class
// function Test(name,surname){
//  console.log(name,surname);
// }
// Test("Jaxongir", "Muxutdinov")
//==================

// class well{
//     constructor(name,surname){
//         // console.log(name, surname);
//         this.name = name
//         this.surname = surname
//     }
//     getName(){
//         console.log(this.name, this.surname);
//     }
// }
// const user = new well("Pdp", "Academy")
// user.getName()
//=========================

// class student{
//     constructor(name,surname,department){
//         this.name = name
//         this.surname = surname
//         this.department = department
//     }
//     getName(){
//         console.log(this.name, this.surname, this.department);
//     }
// }

// class Department extends student{
//     constructor(name,surname,department){
//         super(name,surname)
//         this.name = name
//         this.surname = surname
//         this.department = department
//     }
// }


// const user = new Department("Jaxongir", "Muxutdinov", "epam")

// user.getName()

//======================================
// const Facebook=(username, password, callback)=>{
//     setTimeout(()=>{
//     return callback({username,password})
//     }, 5000)
// }
// const user = Facebook("admin", 123456, (user)=>{
//     console.log(user);
// })
//======================================


