import React from "react";
import { Link } from "wouter";
import "./Gif.css"

export default function GifRender({title,id,url}){
    return(
    <>
        <Link className="gif" to={`/gif/${id}`}>
            <h4><b>{title.toUpperCase()}</b></h4>
            <video muted autoPlay loop alt={title} src={url} />
            <h6>id:{id}</h6>
        </Link>
    </>
    )
}    
