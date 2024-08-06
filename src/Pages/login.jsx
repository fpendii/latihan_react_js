import AuthLayouts from "../components/Layout/AuthLayouts"
import FormLogin from "../components/Fragments/FromLogin"
const LoginPage = () => {   
    return (
        <AuthLayouts title="Login" type="login">
            <FormLogin></FormLogin>
           
        </AuthLayouts>
    )
}

export default LoginPage