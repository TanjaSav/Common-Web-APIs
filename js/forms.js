
//SIGN UP

const signUp = e => {
    let fname = document.getElementById('username').value,
        email = document.getElementById('email').value,
        pwd = document.getElementById('password').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.fname.toLowerCase() == fname.toLowerCase()
        );

    if(!exist){
        formData.push({ fname, email, pwd });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('username').focus();
        alert("Account Created.\n\nPlease Login.");
        location.href = "./login.html";
    }
    else{
        document.getElementById("duplicate-msg").innerHTML = "You have already signed up! Please <a href='./login.html'>Login</a>.";
    }
    e.preventDefault();
}

//LOGIN
const signIn = e => {
    let fname = document.getElementById('username').value, 
        pwd = document.getElementById('password').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.fname.toLowerCase() == fname.toLowerCase() && data.pwd.toLowerCase() == pwd.toLowerCase()
            );

    if(!exist){
        // alert("Incorrect login credentials");
        document.getElementById("incorrectLogin-msg").innerHTML = "Incorrect login! Please <a href='./signup.html'>Sign up</a>.";
    }
    else{
        location.href = "./noteApp.html";
    }
    e.preventDefault();
}