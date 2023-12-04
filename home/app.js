const loggedinuser = JSON.parse(localStorage.getItem("loggedinuser"))


if (!loggedinuser) window.location.href = "../login/login.html"

const user = document.getElementById("username")

user.innerHTML = JSON.parse(localStorage.getItem("loggedinuser")).fname

function loginHandler(){

    localStorage.removeItem("loggedinuser")

    window.location.href = "../login/login.html"
}