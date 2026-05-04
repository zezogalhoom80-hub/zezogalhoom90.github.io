
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



function handleLogin() {
    const userField = document.getElementById('username');
    const passField = document.getElementById('myinput');

    const userValue = userField.value.trim();
    const passValue = passField.value.trim();

    const savedEmail = localStorage.getItem('userEmail');
const savedPass = localStorage.getItem('userPass');

if (userValue === savedEmail && passValue === savedPass) {
    window.location.href = "cars.html";
} else {
   
}


    console.log("Checking login for:", userValue);

if (userValue === "car" && passValue === "12345") {
    window.location.href = "cars.html"; 
} else {
     
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('loginbtn');
    if (btn) {
        btn.onclick = handleLogin;
    }
});





document.addEventListener('DOMContentLoaded', () => {
    const signupBtn = document.getElementById('signupBtn');

    if (signupBtn) {
        signupBtn.onclick = function() {
            const firstName = document.getElementById('firstName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();
            const email = document.getElementById('signupEmail').value.trim();
            const pass = document.getElementById('myinput').value.trim();
            if (firstName && lastName && email && pass) {
                
                localStorage.setItem('userEmail', email);
                localStorage.setItem('userPass', pass);
                localStorage.setItem('userName', firstName + " " + lastName);

                alert("Account Created Successfully, " + firstName + "!");
                
                window.location.href = "Login.html";
            } else {
                alert("Please fill in all fields!");
            }
        };
    }
});
