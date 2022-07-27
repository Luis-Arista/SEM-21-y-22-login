import { useState } from "react";
import { ColorContext } from "./ColorContext";

export const ColorProvider = ({ children }) => {
    const [ color , setColor ] = useState( 'black' )
    const [ colorTexto , setColorTexto ] = useState('white')

    return(
        <ColorContext.Provider value = {{color , setColor , colorTexto , setColorTexto }}>
            { children }
        </ColorContext.Provider>
    )
}