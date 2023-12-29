import axios from "axios";

export default axios.create({
   baseURL: process.env.BASEAPI || "http://localhost:1010/api/v1",
   timeout: 10000,
});
