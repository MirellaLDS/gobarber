import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.github.com',
});
console.log("Mirella");

export default api;
