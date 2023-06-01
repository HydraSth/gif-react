import React, {useEffect, useState} from "react";
import getGifs from '../services/getgifs';
import GifRender from './Gif';

export default function ListOfGifs({
  params
}){
    const keyword=params.keyword;
    const [gifs, setGifs] = useState([]);
    useEffect(() => {
      getGifs({keyword})
      .then(response=> setGifs(response));
    },[keyword])
    
    return (
      <>
        {
          gifs.map((gif)=>{
            return <GifRender keyword={keyword} key={gif.id+gif.title} allGifs={gifs} title={gif.title} id={gif.id} url={gif.mp4}/>
          })
        }
      </>
    )
}