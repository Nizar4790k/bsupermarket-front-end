import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import "./Register.css";


const Register = () => {

    const [password,setPassword] = useState("");
    const [username,setUserName]= useState("");

    const history = useHistory();

    const sendForm =  () => {

        
        if(!username || !password ){
            alert("The fields can't be empty");
            return;
        }
        
        

        fetch('http://localhost:3001/register', {
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
                    case "USER_EXIST":
                        alert("The user exist");
                        break;
                    case "USER_INSERTED":
                        alert("User created suscessfully")
                        history.push("/Login");
                        break;
                    case "EMPTY_FIELDS":
                        alert("The field(s) can't be empty");
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
                <h1 className="form-signin-heading">Bienvenidos al Supermercado Hermanos!</h1>
                <h4 >Por favor registrese</h4>
                <input type="text" id="username" className="form-control" name="username" placeholder="Username" onChange={onUserChange} autoFocus=""  />
                <br></br>

                <input type="password" id="password" className="form-control" name="password" placeholder="Password" onChange={onPasswordChange} required />

                <br></br>
                <button className="btn btn-lg btn-success btn-block" onClick={()=>{sendForm()}}>Register</button>

                <br></br>
                <br></br>
                <button type="button" className="btn btn-link" onClick={() => { history.push("/Login") }}>Log in</button>

            </div>


        </div>





    );

}



export default Register;