import React,{useContext}  from "react";
import StaticContext from "../context/StaticContext";
export default function ColorApp() {
    const ActualContext= useContext(StaticContext);
    console.log(`El color es ${ActualContext.color_theme}`)
    return(
        <></>
    )
}


    //Todo lo que queda dentro de la etiqueta tiene acceso al contexto
    // <StaticContext.Provider value={{color_theme:'light'}}>
    //     <ColorApp/>
    // </StaticContext.Provider> 