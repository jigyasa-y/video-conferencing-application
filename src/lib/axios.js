import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://video-conferencing-application-server.onrender.com/api",
  withCredentials: true,
});
