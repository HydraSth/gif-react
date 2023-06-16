import React,{useState} from "react";
import { Link, useLocation } from "wouter";
import logo from "./logo192.png"
import "./menu.css"

export default function Menu() {
    const[keyword,setKeyword]=useState("");
    const [path,pushLocation] = useLocation();

    const handleSubmit=(e)=>{
       e.preventDefault();
       pushLocation(`/gif-react/gif/${keyword}`);
    }
    const handleChange=(e)=>{
        setKeyword(e.target.value);
    }

    return(
    <section className='menu'>
        <img src={logo} alt="logo"/>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search" value={keyword} onChange={handleChange}/>
        </form>
        <Link to='/gif-react/gif/pizza'>🍕</Link>
        <Link to='/gif-react/gif/perezoso'>🦥</Link>
        <Link to='/gif-react/gif/raton'>🐀</Link>
    </section>
    )
}