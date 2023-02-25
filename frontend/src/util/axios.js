import axios from "axios";

const transport = axios.create({
    // baseURL: "https://api.foodizor.com/",
    baseURL: "http://localhost:8000",
});

export default transport;
