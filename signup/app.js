var fname = document.getElementById("fname")
var lname = document.getElementById("lname")
var email = document.getElementById("email")
var pass = document.getElementById("pass")
var Repass = document.getElementById("Repass")

const loggedinuser = JSON.parse(localStorage.getItem("loggedinuser"))
if(loggedinuser) window.location.href = "../home/home.html"


const dosignup = ()=>{
const userData = JSON.parse(localStorage.getItem("user"))|| []


if(!fname.value || !lname.value || !email.value || !pass.value || !Repass.value){
    return Swal.fire({
        title: "Please fill all the fields",
        icon: "question"
      });
}
if(pass.value.length < 8 ){
    return Swal.fire({
        icon: "error",
        title: "Password length should be 8 character",
      });

}
if(pass.value !== Repass.value){
  return Swal.fire({
        icon: "error",
        title: "Password and Repassword not match",
      });

}

const userfound = userData.find((user)=>{
if(user.fname === fname.value){
    return user
}
})
if(userfound) return Swal.fire("username already taken!");

const emailfound = userData.find((user)=>{
    if (user.email === email.value){
        return user
    }
})
 if(emailfound) return Swal.fire("email is already exists!");


    const user = {
        fname:fname.value,
        lname:lname.value,
        email:email.value,
        pass:pass.value,
        Repass:Repass.value
    }

userData.push(user)
localStorage.setItem("user", JSON.stringify(userData))
Swal.fire({
    icon: "success",
    title: `${fname.value} signup successfully`,
    showConfirmButton: false,
    timer: 2500
  });
setTimeout(() => {
    window.location.href = "../login/login.html"
}, 2000);

}




