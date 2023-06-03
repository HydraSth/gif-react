import "./App.css";
import React from "react";
import { Route, Switch, Link } from "wouter";
import SearchResults from "./components/SearchResults";
import GifDetails from "./components/Details";
import Menu from "./pages/Menu";
import { RecentGifs } from "./components/RecentGifs";

import ColorApp from "./components/ColorApp";

function App() {
  return (
    <section className="bodyCenter">
      <Menu />
      <div className="container">
        <Switch>
          <Route path="/gif/:keyword" component={SearchResults} />
          <Route path="/gif/:keyword/:id" component={GifDetails} />
          <Route path="/gif-react/" component={RecentGifs} />
        </Switch>
      </div>
    </section>
  );
}

export default App;
