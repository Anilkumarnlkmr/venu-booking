import { useState,useRef } from "react";
import Header from '../CommonComponents/LoginHeader/LoginHeader';
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const fixedInputClass = "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"


export default function Verifying(props) {
    const navigate= useNavigate();
    const [otpVerif,setOtpVerif] = useState();
    const location = useLocation();
    
    const handleSubmit = () => {
        // const payload=JSON.stringify()
        axios.post(`http://localhost:8080/api/user/verify`,{
            otp:otpVerif,
            email:location.state.email,
            state_token:location.state.token
        }).then((res)=>{
            if(res.status===200){
                navigate(`/`)
            }
        })
    }
    return (
            <div class='m-20 border-solid border-2 border-600 p-20  w-[36rem] max-w-fit mx-auto'>
                <Header
                    heading="Verify your account"
                    paragraph="Don't have an account yet? "
                    linkName="Signup"
                    linkUrl="/signup"
                />
                {/* <Login/> */}
                <div className="-space-y-px ">
                    <div className="my-5">
                    <label className="sr-only">
                            {'Enter OTP'}
                        </label>
                        <input
                            // onChange={(e) => handleChange(e, 'email')}
                            // value={email}
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
                    </div>
                    <button
                    onClick={handleSubmit}
                type={'button'}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
            >

                {'Login'}
            </button>

                </div>
               
            )
}