import axios from "axios";
import md5 from 'md5';

const publickey = 'e943bb58e99f55ec12689a75da074eeb';
const privatekey = '0b52ba291ad9d6a5f02ed9d5a9cd0d363adf73a9';

const ts = Number(new Date());
const hash = md5(ts + privatekey + publickey);

const api = axios.create({
    baseURL: "https://gateway.marvel.com/v1/public/",
    params: {
        ts,
        apikey: publickey,
        hash,
    },
});

export default api;