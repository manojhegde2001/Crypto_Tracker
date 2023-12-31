import { useQuery } from "react-query";
import { CoreApi } from "../utils/core-api";
import { API_ENDPOINTS } from "../utils/endpoints";



const HomepageService = new CoreApi(API_ENDPOINTS.CRYPTO_DATA);

export const fetchCryptoData =async (currentPage:number)=>{
    const {data} = await HomepageService.findAllGet(API_ENDPOINTS.CRYPTO_DATA + "page=" + currentPage + "&amp;sparkline=false&amp;price_change_percentage=24h%2C7d");
  
    return data;
  }
  
  export const useCryptoDataQuery = (currentPage : number) =>{
    return useQuery<any,Error>([API_ENDPOINTS.CRYPTO_DATA,currentPage],()=> fetchCryptoData(currentPage))
  } 
