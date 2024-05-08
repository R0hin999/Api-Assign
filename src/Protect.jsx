import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

function Protect(props) {
  const cookies = new Cookies();
  const navigate = useNavigate();

  useEffect(() => {
    const user = cookies.get("data");
    if (!user) {
      navigate("login");
    }
  }, []);
  return (
    <div>
      <props.Component />
    </div>
  );
}

export default Protect;
