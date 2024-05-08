const loginAPI = import.meta.env.VITE_LOGIN_API;
const jobAPI = import.meta.env.VITE_JOB_API;
import Cookies from "universal-cookie";
const cookies = new Cookies();
import axios from "axios";
export async function LoginCall(email, password) {
  try {
    const res = await axios.post(
      loginAPI,
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    return res?.data;
  } catch (err) {
    return err?.response?.data;
  }
}
export async function GetJobs() {
  const Token = cookies.get("data").token;
  try {
    const res = await axios.get(jobAPI, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    });
    return res?.data;
  } catch (error) {
    console.log(error);
  }
}
export async function GetPage(pageNumber) {
  const link = `${jobAPI}?page=${pageNumber}`;
  const Token = cookies.get("data").token;
  try {
    const res = await axios.get(link, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    });
    return res?.data;
  } catch (error) {
    console.log(error);
  }
}
