import LoginForm from "../components/LoginForm";
function Login() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="hidden md:block h-full w-[40%]">
        <img
          src="assets/loginBg.png"
          className="h-full w-full object-cover"
        ></img>
      </div>
      <div className="h-full w-[60%] flex items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
