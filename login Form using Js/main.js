//In this segment we will be validating the Login infos afer Creating Account 

//User Login Info and validation checking
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
    alert("SignUp Successful , Please Signin now to continue")
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
      window.location.replace("admin_login.html");


    }

    else {
        alert("Wrong User ID or Password Combination");
    }
    

    
});

const users = [];  //array in the global scope 

//Creation of the class to take input of the username and password as an object 
class Login{
    constructor (userName,password){
        this.userName = userName;
        this.password = password;
    }

};

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
                window.location.replace("Login_sucess.html");    //diverts the page to the booklist user interface upon successful login
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




// Signup Info validation and checking section



