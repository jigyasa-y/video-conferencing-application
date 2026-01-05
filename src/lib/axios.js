import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://video-conferencing-application-server-1.onrender.com/api",
  withCredentials: true,
});

