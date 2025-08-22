import axios from "axios";
import { Base_url } from "../../Components/Base_URL";

export const LoginAPI = async (params) => {
  const url = `${Base_url}/auth/login`;
  const res = await axios.post(url, params);

  return res;
};

export const RegisterAPI = async (params) => {
  const url = `${Base_url}/auth/register`;
  const res = await axios.post(url, params);

  return res;
};
