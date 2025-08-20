import { Base_url } from "../../Components/Base_URL";
import axios from "axios";

export const analyseSymptoms = async (params) => {
  const url = `${Base_url}/symptoms/analyse`;
  const res = await axios.post(url, params);

  return res;
};

export const getHistoryAPI = async (id) => {
  const url = `${Base_url}/symptoms/analyse-history?userId=${id}`;
  const res = await axios.get(url);

  return res;
};
