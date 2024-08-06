import AuthLayouts from "../components/Layout/AuthLayouts"
import FormResgiter from "../components/Fragments/FormRegister"
const RegisterPage = () => {
    return (
        <AuthLayouts title="Register" type="register">
            <FormResgiter></FormResgiter>
        </AuthLayouts>
    )
}

export default RegisterPage