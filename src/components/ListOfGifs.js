import React from "react"
import GifRender from "./Gif"

export default function ListOfGifs({ gifs }) {
	return (
		<>
			{gifs.map((gif) => {
				return (
					<GifRender
						keyword={gif.keyword}
						key={gif.id + gif.title}
						allGifs={gifs}
						title={gif.title}
						id={gif.id}
						url={gif.mp4}
					/>
				)
			})}
		</>
	)
}
