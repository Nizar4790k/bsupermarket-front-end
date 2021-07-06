import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import "./Register.css";


const Register = () => {

    const [password,setPassword] = useState("");
    const [fullName,setFullName]= useState("");
    const [email, setEmail] = useState("");

    const history = useHistory();

    const sendForm =  () => {

    
        
        if(!email|| !password || !fullName){
            alert("The fields can't be empty");
            return;
        }

        const validateEmail = (email)=>{

            const regex = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+");
            return regex.test(email)

        }

        if(!validateEmail(email)){
            alert("Email not valid!");
            return;
        }
        
     
       


        fetch(process.env.REACT_APP_PROXY+'/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password,
                fullName:fullName
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


    const onFullNameChange=(e)=>{
        setFullName(e.target.value);
    }

    const onPasswordChange=(e)=>{
        setPassword(e.target.value);
    }

    const onEmailChange = (e)=>{
        setEmail(e.target.value);
    }

    


    return (


        <div className="wrapper">

            <div className="form-signin" >
                <h1 className="form-signin-heading">Bienvenidos al Supermercado Hermanos!</h1>
                <h4 >Por favor registrese</h4>
                
                <input type="text" id="fullname" className="form-control" name="fullname" placeholder="Full name"  autoFocus=""  onChange={onFullNameChange}/>
                <br></br>

                <input type="text" id="email" className="form-control" name="email" placeholder="Email" onChange={onEmailChange} autoFocus=""  />
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