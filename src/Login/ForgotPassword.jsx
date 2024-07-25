import { useState, useRef, useEffect } from 'react';
import Header from '../CommonComponents/LoginHeader/LoginHeader';
import FormExtra from '../CommonComponents/FormExtras/FormExtras';
import { useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios';

const fixedInputClass = "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"

export default function ForgotPassword(props) {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const navigat=useNavigate();
    const location = useLocation();
    console.log(location.state,'anil',props)

    const [newPassword,setNewPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [otpVerif,setOtpVerif] = useState();
    const [token,setToken] = useState('')

    useEffect(()=>{
        axios.post(`http://localhost:8080/api/user/${location?.state?.email}/resetpassword`).then((res)=>setToken(res.data.state_token))
    },[])

    const handleSubmit = () => {
        if(newPassword === confirmPassword) {
            const payload = {
                state_token: token,
                password: confirmPassword,
                otp: otpVerif
            }
            axios.post(`http://localhost:8080/api/user/${location?.state?.email}/updatePassword`,payload).then((res)=>
            {if(res.status===200){
                navigat('/')
            }})
        }
        console.log(newPassword,confirmPassword,props)
    }

    return (
            <div class='m-20 border-solid border-2 border-600 p-20 w-[36rem] max-w-fit mx-auto'>
                <Header
                    heading="Enter New Password and Confirm Password"
                    paragraph="Don't have an account yet? "
                    linkName="Signup"
                    linkUrl="/signup"
                />
                {/* <Login/> */}
                <div className="-space-y-px ">
                    <div className="my-5">
                    {/* <div className="-space-y-px "> */}
                    <div className="my-5">
                    <label className="sr-only">
                            {'Enter OTP'}
                        </label>
                        <input
                            // onChange={(e) => handleChange(e, 'email')}
                            value={otpVerif}
                           onChange={(e)=>setOtpVerif(e.target.value)}
                            // id={id}
                            maxlength="6" pattern="\d{6}"
                            name={'OTP'}
                            type='text'
                            required={true}
                            className={fixedInputClass}
                            placeholder={'Enter OTP'}
                        />
                    </div>
                    <div className="my-5">

                    <label className="sr-only">
                            {'Password'}
                        </label>
                        <input
                            onChange={(e) => setNewPassword(e.target.value)}
                            value={newPassword}
                            // id={id}
                            name={'paswword'}
                            type='password'
                            required={true}
                            className={fixedInputClass}
                            placeholder={'Enter New Password'}
                        />
                        </div>
                        <div className="my-5">

                        <label className="sr-only">
                            {'Confirm Password'}
                        </label>
                        <input
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            value={confirmPassword}
                            // id={id}
                            name={'ConfirmPassword'}
                            type='password'
                            required={true}
                            className={fixedInputClass}
                            placeholder={'Enter Confirm Password'}
                        />
                        </div>
                    {/* </div> */}
                        
                    </div>
                </div>
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