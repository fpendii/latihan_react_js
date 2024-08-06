import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormLogin = () => {
    return (
        <form action="">
          <InputForm label="Email" placeholder="example@mail.com" type="email" name="email" />
          <InputForm label="Password" type="password" name="password" placeholder="********" />
          <Button classname="bg-blue-600 w-full">Login</Button>
        </form>
    )
}   

export default FormLogin