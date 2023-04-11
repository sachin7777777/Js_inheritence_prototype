let arr=[1,2,3,4,5];
let obj={
    name:"sharma"
}
let obj2={
    name:"sharma2",
    _proto_:obj
}
console.log(obj2);

//2.
let obj1={
    name:"sharma3",
     set:function(){
         console.log("let SET")
        }
 }
 let obj3={
     lname:"sharma4",
     walks:"true",
 }
    let obj4={
        food:"food",
        walks:"true",
    
     }
    
     obj2._proto_=obj1
     obj3._proto_=obj2
     obj2.set()// let SET
    obj3.set()// the output is More

//3.
let array=[1,4,5,2,9];
 let sum=0;
 for(let i=0;i<array.length;i++){
    sum+=array[i];
 }
 let child={
    _proto_:array
 }
 console.log(sum);

 //4.
 let AA=[100,200,300,400,500]
    let res = AA.reduce((acc,curr)=>{
        acc+=curr
        return acc
    },0)
    console.log(res);
