import React from "react";
import {useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
function Navbar() {
  const navigate = useNavigate();
  const cookies = new Cookies();
  function handleSignOut() {
    if (window.confirm("Are you sure?")) {
      cookies.remove("data");
      navigate("login");
    }
  }
  return (
    <div className="h-20 w-full  px-8 py-4 flex items-center justify-between shadow-lg">
      <h1
        onClick={() => navigate('/')}
        className="text-2xl font-bold text-white bg-black px-2 py-1 cursor-pointer flex flex-row justify-between  items-center rounded-lg "
      >
        Jobify
      </h1>

      <button
        onClick={handleSignOut}
        className="px-2 py-1 md:px-4  rounded-md outline font-semibold md:text-lg"
      >
        Sign Out
      </button>
    </div>
  );
}

export default Navbar;
