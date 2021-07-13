import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3' 
});
// instance works as a preurl and add url in it when use as instance.get('a') 
export default instance;