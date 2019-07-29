import axios from "axios";
import {API_KEY, BASE_URL} from "../../.env"
import Shimmer from "./Shimmer";

// Build the axios client
let CoinMarketClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        "X-CMC_PRO_API_KEY": API_KEY
    }
})

const errorHandler = (error) => {
    return Promise.reject({ ...error })
}

const successHandler = (response) => {
    // console.log(response);
    return {...response}
}

const setupInterceptors = () => {
  // console.log("Setting interceptors")
  CoinMarketClient.interceptors.response.use(
    response => successHandler(response),
    error => errorHandler(error)
    )
  }
  
  export const CoinClient = () => {
    setupInterceptors();
    return CoinMarketClient;
  }
  
  
  export const serialize = (obj, prefix) => {
    var str = [],
    p;
    for (p in obj) {
      if (obj.hasOwnProperty(p)) {
        var k = prefix ? prefix + "[" + p + "]" : p,
        v = obj[p];
        str.push((v !== null && typeof v === "object") ?
        serialize(v, k) :
        encodeURIComponent(k) + "=" + encodeURIComponent(v));
      }
    }
    return str.join("&");
  }
  
  export const formatNumber = (value) => {
    return new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 3
    }).format(value)
  }

  export  {Shimmer}