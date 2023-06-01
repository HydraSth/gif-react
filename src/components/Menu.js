import React,{useState} from "react";
import { Link, useLocation } from "wouter";
export default function Menu() {
    const[keyword,setKeyword]=useState("");
    const [path,pushLocation] = useLocation();

    const handleSubmit=(e)=>{
       e.preventDefault();
       pushLocation(`/gif/${keyword}`);
    }
    const handleChange=(e)=>{
        setKeyword(e.target.value);
    }

    return(
    <section className='menu'>
        <a href='/'>Gif App</a>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search" value={keyword} onChange={handleChange}/>
        </form>
        <Link to='/gif/pizza'>🍕</Link>
        <Link to='/gif/perezoso'>🦥</Link>
        <Link to='/gif/raton'>🐀</Link>
        <h3>Ultima busqueda</h3>
    </section>
    )
}