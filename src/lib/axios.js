import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://flowtalk-server-d1pd.onrender.com/api",
  withCredentials: true,
});