import { useEffect, useState } from "react"
import getGifs from "../services/getgifs"
export default function useGifs({ keyword } = { keyword: null }) {
	const [gifs, setGifs] = useState([])
	
	useEffect(function(){
		const keywordToUse= keyword || localStorage.getItem("lastKeyword");
		getGifs({ keyword:keywordToUse })
			.then((response) => {
				setGifs(response)
				localStorage.setItem("lastKeyword", keyword)
		})
	}, [keyword])

	return gifs
}
