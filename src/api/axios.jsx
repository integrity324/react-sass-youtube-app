import axios from "axios";

const instance = axios.create({
  baseURL: "https://youtybe.googleapis.com/youtube/v3",
  params: {
    key: import.meta.env.VITE_API_KEY
  }
})

export default instance