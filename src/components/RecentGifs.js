import React from "react"
import ListOfGifs from "./ListOfGifs"
import useGifs from "../hooks/useGifs"
import "./RecentGifs.css"

export function RecentGifs() {
	const gifs = useGifs()
	return (
        <>
            <h3>Ultima busqueda</h3>
            <section className="Recent">
                <ListOfGifs gifs={gifs} />
            </section>
        </>
	)
}
