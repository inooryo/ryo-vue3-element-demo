import { axios } from "./axios";

export const getStatic = ( fileName :string ) => {
  const url :string = './' + fileName;
  return axios.get(url);
}