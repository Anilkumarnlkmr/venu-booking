import Header from "../CommonComponents/LoginHeader/LoginHeader";
import Signup from "../SiginUp/SignUp";

export default function SignupPage(){
    return(
        <>
        <div class='m-20 border-solid border-2 border-600 p-20 w-[36rem] max-w-fit mx-auto'>
        <Header
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/login"
            />
            <Signup/>
        </div>
        </>
    )
}