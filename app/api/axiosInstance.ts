import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const axiosInstance = axios.create({
  baseURL: API_URL,
});

//TODO: here we could add an interceptor to handle api errors, auth headers, etc

export default axiosInstance;
