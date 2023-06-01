import React from "react";
import ListOfGifs from "./ListOfGifs";
import useGifs from "../hooks/useGifs";

export function RecentGifs() {
    const gifs=useGifs();
    return(
        <ListOfGifs gifs={gifs}/>
    )
}