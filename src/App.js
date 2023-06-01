import "./App.css"
import React from "react"
import { Route } from "wouter"
import SearchResults from "./components/SearchResults"
import GifDetails from "./components/Details"
import Menu from "./components/Menu"
import {RecentGifs} from "./components/RecentGifs"

function App() {
	return (
		<section className="bodyCenter">
			<Menu />
      <Route path="/" component={RecentGifs} />
			<div className="container">
				<Route path="/gif/:keyword" component={SearchResults} />
			</div>
			<Route path="/gif/:keyword/:id" component={GifDetails} />
		</section>
	)
}

export default App
