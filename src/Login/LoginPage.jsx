import Header from "../CommonComponents/LoginHeader/LoginHeader"
import Login from "../Login/Login"

export default function LoginPage(){
    return(
        <>
        <div class='m-20 border-solid border-2 border-600 p-20'>
        <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
                />
            <Login/>
        </div>
        </>
    )
}