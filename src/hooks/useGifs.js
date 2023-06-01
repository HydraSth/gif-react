import { useEffect, useState } from "react";
import getGifs from '../services/getgifs';
export default function useGifs({keyword} = {keyword:"alabama"}) {
    const [gifs, setGifs] = useState([]);
    
    const keywordToUse= keyword || localStorage.getItem('lastKeyword');
    
    useEffect(() => {
      getGifs({keyword:keywordToUse})
      .then(response=>{ 
        setGifs(response)
        localStorage.setItem('lastKeyword', keyword);
      });
    },[keyword,keywordToUse])
    
    return gifs;
}
  // keywordToUse
  // const keywordToUse= keyword || localStorage.getItem('lastKeyword');
  // localStorage.setItem('lastKeyword', keyword);