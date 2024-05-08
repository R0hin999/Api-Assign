import { useEffect, useState } from "react";
import { LoginCall } from "../../ApiCalls";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setdisable] = useState(false);
  const cookies = new Cookies();
  const navigate = useNavigate();
  useEffect(() => {
    const user = cookies.get("data");
    if (user) {
      navigate("/");
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setdisable(true);
    if (email != "" && password != "") {
      LoginCall(email, password).then((message) => {
        if (message.statusCode === 200) {
          cookies.set("data", message?.data, { sameSite: "strict", path: "/" });
          toast.success(message?.message);
          setdisable(false);
          setTimeout(() => {
            window.location.href = "/";
          }, 600);
        } else {
          toast.error(message?.message);
          setdisable(false);
        }
      });
    } else {
      toast("Please fill the form");
      setdisable(false);
    }
  }
  return (
    <>
      <Toaster />
      <form
        onSubmit={handleSubmit}
        className="h-80 w-96 rounded-2xl shadow-xl p-5 bg-white"
      >
        <h1 className="text-center text-2xl mt-2 font-semibold">Login</h1>
        <hr className="mt-2 "></hr>

        <div className="mt-8">
          <input
            type="email"
            value={email}
            className="outline outline-2 outline-black/25 rounded-md h-10 w-full indent-2 focus:ring-2 focus:ring-black"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e?.target?.value);
            }}
          />

          <input
            type="password"
            value={password}
            placeholder="Password"
            className="outline outline-2 outline-black/25 rounded-md h-10 w-full indent-2 focus:ring-2 focus:ring-black mt-6"
            onChange={(e) => {
              setPassword(e?.target?.value);
            }}
          />
        </div>
        <div className="mt-8">
          <button
            className={
              disable
                ? "w-full h-12 bg-black/70 text-white font-semibold rounded-md hover:bg-black/80 focus:ring-2 focus:ring-offset-1 focus:ring-black cursor-not-allowed"
                : "w-full h-12 bg-black text-white font-semibold rounded-md hover:bg-black/80 focus:ring-2 focus:ring-offset-1 focus:ring-black"
            }
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
