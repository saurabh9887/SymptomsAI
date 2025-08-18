import { Base_url } from "../../Components/Base_URL";
import axios from "axios";

export const analyseSymptoms = async (params) => {
  const url = `${Base_url}/symptoms/analyse`;
  const res = await axios.post(url, params);

  return res;
};
