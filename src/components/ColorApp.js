import React,{useContext}  from "react";
import StaticContext from "../context/StaticContext";
export default function ColorApp() {
    const ContextoActual= useContext(StaticContext);
    console.log(`El color es ${ContextoActual.color_theme}`)
    return(
        <></>
    )
}

// import StaticContext from "./context/StaticContext"
//Todo lo que queda dentro de la etiqueta tiene acceso al contexto
{/* <StaticContext.Provider value={{color_theme:'light'}}>
    <ColorApp/>
</StaticContext.Provider> */}