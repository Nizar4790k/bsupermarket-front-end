import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";


const Login = ({onLoadUserName}) => {

    const[username,setUserName]=useState("");
    const[password,setPassword] = useState("");
     

const history = useHistory();

   const authenticate = () =>{

    

     if(!username || !password ){
        alert("The credentials are wrong");
            return;
        }
      
    fetch('http://localhost:3001/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
        .then(response =>response.json())
        .then(result=>{
            
            switch(result){
                case "ACCESS_DENIED":
                    alert("The credentials are wrong");
                    break;
                case "ACCESS_GRANTED":
                    history.push("/ChatBox");
                    onLoadUserName(username);
                    break;
                 default:
                     alert("ERROR IN THE SERVER");
                     break;   
            }
        });
    
    }

    const onUserChange=(e)=>{
        setUserName(e.target.value)
    }

    const onPasswordChange=(e)=>{
        setPassword(e.target.value)
    }

    return (
        <div className="wrapper">

            <div className="form-signin" >
                <h1 className="form-signin-heading">Welcome to ChatBox!</h1>
                <h4 >Please login</h4>
                <input type="text" id="username" className="form-control" name="username" onChange={onUserChange} placeholder="Username"  autoFocus=""  />
                <br></br>
                
                <input type="password" id="password" className="form-control" onChange={onPasswordChange} name="password"  placeholder="Password"  />
                
                <br></br>
                <button className="btn btn-lg btn-primary btn-block" onClick={()=>{authenticate()}}>Login</button>
                
                <br></br>
                <br></br>
                
                <button type="button" className="btn btn-link" onClick={()=>{history.push("/Register")}}>Register</button>
            </div>
            

        </div>


    );



};



export default Login;