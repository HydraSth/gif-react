import "./App.css"
import React from "react"
import { Route, Router } from "wouter"
import SearchResults from "./components/SearchResults"
import GifDetails from "./components/Details"
import { createHashHistory } from 'history';
import Menu from "./pages/Menu"
import {RecentGifs} from "./components/RecentGifs"

import ColorApp from "./components/ColorApp"

function App() {
	const hashHistory = createHashHistory();
	return (
		<Router history={hashHistory}>
			<section className="bodyCenter">
				<Menu />
				<div className="container">
					<Route path="/gif/:keyword" component={SearchResults} />
				</div>
				<Route path="/gif-react/" component={RecentGifs} />
				<Route path="/gif/:keyword/:id" component={GifDetails} />
			</section>
		</Router>
	)
}

export default App
