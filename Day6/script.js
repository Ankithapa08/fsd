// let a=()=>{
//     console.log("Arrow function")
// };
// let b=()=>console.log("Arrow function 2");
// b();
// a();
// let c=(x,y)=>
// {
//     return x+y;
// }
// let res= c('Rahul','Ravi');
// let res1=c(12,32);
// console.log(res,res1)
// function display(){
//     let p1=document.querySelectorAll("p");
//     p1[0].innerHTML="I am in paragraph";
//     p1[0].style.backgroundColor="red";
//     p1[1].innerHTML="I am in  2nd paragraph";
//     p1[1].style.backgroundColor="green";
// }
// let changeheader=()=>{
//     let header =document.querySelector('h1');
// header.textContent='New Heading';
// let a1=document.querySelector("a");
// a1.setAttribute=("href","https://aktu.ac.in");
// a1.innerHTML="aktu website";
// };
let addcontent=()=>{
    let newDiv=document.createElement("div");
   newDiv.textContent="This is a new div";

    let body=document.querySelector("body");
    body.appendChild(newDiv);
};
let 