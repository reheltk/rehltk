import axios from "axios";

const transport = axios.create({
    // baseURL: "https://api.reheltk.net",
    baseURL: "http://localhost:8000",
});

export default transport;
