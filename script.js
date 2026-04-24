
window.onload = function() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
    }
};


function toggleTheme() {
    document.body.classList.toggle("dark");
}


function showpass()  {
    var x = document.getElementById("myinput");
    if (x.type === "password"){
        x.type = "text";
    }else{
        x.type = "password";
    }
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
}