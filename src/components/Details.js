import "./Gif.css"
import React, { useState, useEffect } from "react"
import getGifs from "../services/getgifs"
import { NewtonsCradle } from "@uiball/loaders"

export default function GifDetails({ params }) {
	const { id, keyword } = params
	const [seleccionado, setSeleccionado] = useState()

	useEffect(() => {
		getGifs({ keyword })
		.then((response) => {
			const obje = response.filter((gif) => {
				return gif.id === id
			})
		setSeleccionado(obje[0])
		})
	}, [id, keyword])

    const [showModal, setShowModal] = useState(false);

    function handleCopy() {
      navigator.clipboard.writeText(window.location.href);
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
      }, 3000);
    }

	return (
		<>
			{seleccionado ? (
				<section className="gif">
					<h4>
						<b>{seleccionado.title.toUpperCase()}</b>
					</h4>
					<video muted autoPlay loop src={seleccionado.mp4} />
					<h6>id:{seleccionado.id}</h6>
					<button onClick={handleCopy}>Compartir</button>
                    {showModal && (
                        <div className="modal">
                           <p>¡Link copiado al portapapeles!</p>
                        </div>
                    )}
				</section>
			) : (
                <section className="loader">
                    <NewtonsCradle size={40} speed={1.4} color="black" />
                </section>
			)}
		</>
	)
}
