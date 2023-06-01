// { useState }
// const [keyword,setKeyword]=useState('gato');
/* <button onClick={()=>setKeyword('perro')}>Cambiar a perro</button> */
import './App.css';
import React from 'react';
import { Route } from 'wouter';
import ListOfGifs from './components/ListOfGifs';
import GifDetails from './components/Details';
import Menu from "./components/Menu"

function App() {
  return (
    <section className='bodyCenter'>
      <Menu/>
        <div className='container'>
          <Route 
            path='/gif/:keyword'
            component={ListOfGifs}
          /> 
        </div>
        <Route 
            path='/gif/:keyword/:id'
            component={GifDetails}
      /> 
    </section>
  ) 
}

export default App;
