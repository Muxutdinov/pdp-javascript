var obj = {
    name:'Jaxongir',
    status:'Student',
    age:20
  }
  // obj.name='Dilshod'
  // console.log(obj.name);
  // Object.freeze(obj)
  // delete obj.name;
  // obj.surname = 'Muxutdinov'
  // Object.seal(obj)
  // console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));
// console.log(obj);
//=========================================
var students = [
       {
        name:'Jaxongir',
        status:'Student',
        age:20
    },
         {
        name:'Azizbek',
        status:'Magister',
        age:24
    },
          {
        name:'Sardor',
        status:'Menter',
        age:28
    }
]
// console.log(students);
//==========================

// students.surname="Muxutdinov"
// console.log(students.surname="Muxutdinov");
// })
//======================Homework==age=sort  name=sort=alfabit   id=sort
var list = [
    {
      name:"Jaxongir",
      age:12,
      solary:20
    },
      {
        name:"Akmal",
        age:9,
        solary:23
      },
      {
        name:"Akobir",
        age:7,
        solary:26
      },
      {
        name:"Sardor",
        age:4,
      solary:29

      },
      {
        name:"Azizbek",
        age:23,
      solary:28
      },
      {
        name:"Kamron",
        age:8,
      solary:20
      },
      {
        name:"Rovshan",
        age:25,
        solary:56
      }
]
//===================age+
// num=list.filter((value)=>value.age>10)
// var sum = 0;
// num.forEach(value=>{
//   sum += value.age
// })
// console.log(sum)
//=======================salory+
// num = list.filter((value)=>value.age>10)
// let sum = 0;
// num.forEach(value=>{
//   sum += value.solary
// })
// console.log(sum);
//===================
// function well(age){
//  console.log(list.filter((value)=>value.age===age))
// }
// well(24)
// well(20)
//==========================
// function callSort(type){
//   if(type==="addId"){
//     //addId
//     list.forEach((value,index)=>{
//       value.id = index
//     })
//     console.log(list);
//   }
//   if(type==="sortName"){
//     //sortName
//    console.log(list.sort((a,b)=>a.name.toLowerCase().localeCompare(b.name.toLowerCase())))
//   }
//   if(type==="sortAge"){
//    console.log(list.sort((a,b)=>a.age-b.age));
//   }
// }
// callSort("addId")
// callSort("sortName")
// callSort("sortAge")
//=============================
// function get(id){
//  const arr = list.filter((value)=>value.id === id)
//  console.log(arr);
// }
// get(12345)

// function get(){
// var num = list.filter((value)=>value.age > 23)
// console.log(num);
//  }
//  get()

// list.sort((a,b)=>a.id-b.id)
// list.sort((a,b)=>a.age-b.age)
// console.log(list);


// const ar = [1,3,6,87,089,45,3,21,439,8,7,6]
// console.log(ar.filter((value)=>value === 45));
// obj = {
//     name:"Jaxongir",
//     age:20,
//     solary:27
//   }
// obj.map((value,index)=>{
  // return value+index
// })

// console.log(Object.entries(obj));





    // console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

//======================vazifa
// var obj = {
//   name:"Jaxongir",
//   age:20,
//   solary:27
// }
// var num = Object.keys(obj).map((value,index)=>[index,value,obj[value]])
// console.log(num);
