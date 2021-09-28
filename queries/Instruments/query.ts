import axios from "axios";
import { API_URL } from "../../helpers/Constants";

export const fetchInstrumentList = async () => {
  const { data } = await axios.get(API_URL);
  return data;
};

export const fetchItemById = async (id: string) => {
  const { data } = await axios.get(`${API_URL}/${id}`);
  return data;
};
