import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormResgiter = () => {
    return (
        <form action="">
          <InputForm label="Full Name" placeholder="Insert Your Name Here" type="text" name="fullname" />
          <InputForm label="Email" placeholder="example@mail.com" type="email" name="email" />
          <InputForm label="Password" type="password" name="password" placeholder="********" />
          <InputForm label="Confirm Password" type="password" name="confirmpassword" placeholder="********" />
          <Button classname="bg-blue-600 w-full">Register</Button>
        </form>
    )
}   

export default FormResgiter