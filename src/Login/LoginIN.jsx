import { useState, useRef } from 'react';
import Header from '../CommonComponents/LoginHeader/LoginHeader';
import FormExtra from '../CommonComponents/FormExtras/FormExtras';

const fixedInputClass = "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"

export default function LoginIn() {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    // const handleChange = (e, type) => {
    //     if (type === 'email') {
    //         setEmail(e.target.value)
    //     } else { 
    //         setPassword(e.target.value) 
    //     }

    // }

    const handleSubmit = () => {
        console.log(email,password)
    }

    return (
            <div class='m-20 border-solid border-2 border-600 p-20 w-[36rem] max-w-fit mx-auto'>
                <Header
                    heading="Login to your account"
                    paragraph="Don't have an account yet? "
                    linkName="Signup"
                    linkUrl="/signup"
                />
                {/* <Login/> */}
                <div className="-space-y-px ">
                    <div className="my-5">
                        <label className="sr-only">
                            {'Email'}
                        </label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            // id={id}
                            name={'Email'}
                            type='email'
                            required={true}
                            className={fixedInputClass}
                            placeholder={'Enter Your Email'}
                        />
                        <label className="sr-only">
                            {'Password'}
                        </label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            // id={id}
                            name={'Password'}
                            type='password'
                            required={true}
                            className={fixedInputClass}
                            placeholder={'Enter Password'}
                        />
                    </div>
                </div>
                <FormExtra email={email?email:''}/>
                <button
                    type='button'
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
                    onClick={handleSubmit}
                >

                    {'Login'}
                </button>
            </div>
    )
}