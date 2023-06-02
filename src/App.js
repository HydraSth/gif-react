import "./App.css"
import React from "react"
import { Route } from "wouter"
import SearchResults from "./components/SearchResults"
import GifDetails from "./components/Details"
import Menu from "./pages/Menu"
import {RecentGifs} from "./components/RecentGifs"

import ColorApp from "./components/ColorApp"

function App() {
	return (
		<section className="bodyCenter">
			<Menu />
			<div className="container">
				<Route path="/(|gif-react/)gif/:keyword" component={SearchResults} />
			</div>
			<Route path="/(|gif-react/)" component={RecentGifs} />
			<Route path="/gif/:keyword/:id" component={GifDetails} />
		</section>
	)
}

export default App
