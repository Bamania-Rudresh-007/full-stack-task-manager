import axios from "axios";

const API = axios.create({baseURL: "https://full-stack-task-manager-hzhr.onrender.com/api"});

API.interceptors.request.use((req) => {
    const token = JSON.parse(localStorage.getItem("token"));

    if(token){
        req.headers.Authorization = `Bearer ${token}`;
    }

    return req
})

export default API;