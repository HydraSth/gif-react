import React from "react";
import ListOfGifs from './ListOfGifs';
import useGifs from "../hooks/useGifs";
export default function SearchResults({params}){
    const Gifs = useGifs({keyword:params.keyword});
    return(
        <ListOfGifs gifs={Gifs}/>
    )
}