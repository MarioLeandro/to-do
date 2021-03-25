import axios from 'axios';

const api = axios.create({
    baseURL: 'https://2d4b2c7b3192.ngrok.io/'
});

export default api;
