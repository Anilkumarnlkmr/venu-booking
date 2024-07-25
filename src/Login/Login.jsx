import { useState } from 'react';
import { loginFields } from "../Constants/formFields";
import Input from "../CommonComponents/InputComponenet/Input";
import FormExtra from '../CommonComponents/FormExtras/FormExtras';
import FormAction from "../CommonComponents/FormAction/FormAction";
const fixedInputClass="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"

const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function Login(){
    const [loginState,setLoginState]=useState(fieldsState);

    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSubmit=(e)=>{ 
        alert(1)
        e.preventDefault();
        authenticateUser();
    }

    //Handle Login API Integration here
    const authenticateUser = () =>{
        alert(1)
    }

    return(
        <form className="mt-8 space-y-6 " onSubmit={()=>{console.log('anil')}}>
        <div className="-space-y-px ">
            <input 
                className={fixedInputClass}
              type={'email'}
              value={loginState['email']}
              key={'email'}
              name='email'
              onChange={handleChange}
            
            />

            {/* {
                fields.map(field=>
                        <Input
                            // key={field.id}
                            // handleChange={handleChange}
                            // value={loginState[field.id]}
                            // labelText={field.labelText}
                            // labelFor={field.labelFor}
                            // id={field.id}
                            // name={field.name}
                            // type={field.type}
                            // isRequired={field.isRequired}
                            // placeholder={field.placeholder}
                            type={'email'}
                            value={loginState[email]}
                            key={'email'}
                    />
                
                )
            } */}
        </div>

        <FormExtra/>
        <button
                type={'submit'}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
                onSubmit={()=>{console.log('anil')}}
            >

                {'Login'}
            </button>

      </form>
    )
}