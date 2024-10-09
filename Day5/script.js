// let $=12;
// let _=12;
// function display(){
//     let x =confirm("Are you sure ");
//     alert("User Selects"+x);
// }
// display();
// console.log(typeof _);
// let x="12"/"6";
// let str="";
// let num=Boolean(str);
// console.log(num);
function validate(){
    let login=document.getElementById("login").value;
    let pass=document.getElementById("pass").value;
    let p1=document.getElementById("result");
    if(login=="admin"&&pass=="admin"){
       p1.innerText="Login Successful";
    }else{
        p1.innerText="Invalid Login";
    }
}