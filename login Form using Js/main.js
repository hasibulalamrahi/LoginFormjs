function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}


// Hiding and Unhiding of the User Login Section , Admin Login Section and Sign Up Section

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    const adminLogin = document.querySelector("#adminLogin");
    const notlinkAdminLogIN = document.querySelector("#notlinkAdminLogIN");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });
    document.querySelector("#linkAdminLogIN").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        adminLogin.classList.remove("form--hidden");
    });
    document.querySelector("#notlinkAdminLogIN").addEventListener("click", e => {
        e.preventDefault();
        adminLogin.classList.add("form--hidden");
        loginForm.classList.remove("form--hidden");
    });

// End of the Hide Section 
   
    // This section checks whether the Username section has a length of 10 characters or not if not then sends error message (Username validation section)
    loginForm.addEventListener("submit", e => {
        e.preventDefault();
        
        // Perform your AJAX/Fetch login

         setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {   //checks whether the username is valid or not
                setInputError(inputElement, "Username must be at least 10 characters in length");   //Error message 
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});


const users = [];  //array in the global scope 


//Creation of the class to take input of the username and password as an object 
class Login{
    constructor (userName,password){
        this.userName = userName;
        this.password = password;
    }

};

//Checks the validation of the password  upon Login 
document.querySelector('#login').addEventListener('submit',(e)=> {
    // Prevent actual submit
    e.preventDefault();
    const userName = document.querySelector('#username').value;
    const password = document.querySelector('#Password1').value;
    const loginform = new Login(userName,password);

    let existencecheck = 0;    //counter which shows the existancce of the username 

    for(let i = 0; i < users.length; i++)
    {
        if(users[i]['username'] == userName)
        {
            existencecheck = 1;
            if(users[i]['password'] == password)
            {
                alert("login successful");                //gives alert after sucessful login
                window.location.replace("demo.html");    //diverts the page to the booklist user interface upon successful login
            }
            else
            {
                alert("wrong password");           //gives alert upon login failure
            }
        }
    }
    if(existencecheck == 0)
    {
        alert("user doesnt exist");
    }

    console.log(loginform)
        

    
});


class CreateAccount{
    constructor (username,emailAdress,password,confirmPassword){
        this.username = username;
        this.emailAdress = emailAdress;
        this.password = password;
        this.confirmPassword = confirmPassword;

    }
    
}

class useradd{
    constructor(username,emailAdress,password,confirmPassword){
        this.username = username;
        this.emailAdress = emailAdress;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }
    
    
};

// Signup Info validation and checking section
document.querySelector ('#createAccount').addEventListener('submit',(e) =>{
    e.preventDefault();
    const username = document.querySelector('#signupUsername').value;
    const emailAdress = document.querySelector('#EmailAdress').value;
    const password = document.querySelector('#Password').value;
    const confirmPassword = document.querySelector('#confirmPassword').value;
    const frm = document.querySelector('#btnsubmit');
    const now = new CreateAccount(username,emailAdress,password,confirmPassword);
    let obj = {
        
        "username": username,
        "password": password
    }
    users.unshift(obj);  //shifting user data into an array
    console.log(users)  //showing the data into the console

    if ( password != confirmPassword){
        alert("Please retype the same password");
    }

    if((username.length >=10) && ((emailAdress.length)>= 5) ){
    document.getElementById("createAccount").reset();
    }
});

//Admin Login  info validation and checking


document.querySelector ('#adminLogin').addEventListener('submit',(e) =>{
    e.preventDefault();
    const AdminId = document.querySelector('#adminId').value;
    const AdminUserName = document.querySelector('#adminUserName').value;
    var  passval = document.querySelector('#Pass').value;

    if((AdminId == "1234") && (AdminUserName == "Hasib") && (passval == "12") ){
        console.log("Y");
      document.getElementById("adminLogin").reset();
      window.location.replace("demo2.html");


    }

    else {
        alert("Wrong User ID or Password Combination");
    }
    

    
});



