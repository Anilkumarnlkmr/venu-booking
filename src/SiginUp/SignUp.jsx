import { useState,useEffect } from 'react';
import { signupFields } from "../Constants/formFields"
import FormAction from "../CommonComponents/FormAction/FormAction";
import Input from "../CommonComponents/InputComponenet/Input";
import axios from 'axios';
import { useNavigate,Navigate } from 'react-router-dom';

const fields=signupFields;
let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');

export default function Signup(){
  const [signupState,setSignupState]=useState(fieldsState);
  const navigate = useNavigate();
  const handleChange=(e)=>setSignupState({...signupState,[e.target.id]:e.target.value});

  // useEffect(()=>{
  //   axios.post('http://localhost:8080/api/auth/register', {
  //     "email":"anil@gmail.com",
  //     "password":"1212121",
  //     "username":"anil"
  // })
  // },[])

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(signupState)
    createAccount(signupState)
  }

  //handle Signup API Integration here
  const createAccount=(e)=>{
    console.log('anil',e);
    axios.post(`http://localhost:8080/api/user/register`,signupState).then(async (res)=>{
      if(res.status===200){
     await navigate('/verifyUser', {state:
        {
        token:res.data.state_token,
        email:signupState.email,
      }
    })
      // <Navigate to={{
      //   pathname:'/verifyUser',
      //   status:{
      //       token:'res.data.token',
      //       email:'signupState.email',
      //     }
      // }} />
    }console.log('anil',res)})
  }

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="">
        {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                
                )
            }
          <FormAction handleSubmit={handleSubmit} text="Signup" />
        </div>
      </form>
    )
}