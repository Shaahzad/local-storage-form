var email = document.getElementById("email")
var pass = document.getElementById("pass")
const loggedinuser = JSON.parse(localStorage.getItem("loggedinuser"))
function loginHandler(){

 const getloginData = JSON.parse(localStorage.getItem("user"))

if(!email.value || !pass.value){
    return   Swal.fire({
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

const found = getloginData.find((lala)=>{
       if(lala.email === email.value){
        return lala
       } 
})
if(!found) return Swal.fire("no user found");

if(found.pass !== pass.value){
    return Swal.fire({
        icon: "error",
        title: "Password not match",
      });

}

    localStorage.setItem("loggedinuser", JSON.stringify(found))
    Swal.fire({
        icon: "success",
        title: ` login successfully`,
        showConfirmButton: false,
        timer: 2500
      });
    setTimeout(() => {
        window.location.href = "../home/home.html"
    }, 2000);
}