//封装基准路径
import axios from 'axios'
export const baseURL = "http://157.122.54.189:9060";
axios.defaults.baseURL = baseURL;
export default axios