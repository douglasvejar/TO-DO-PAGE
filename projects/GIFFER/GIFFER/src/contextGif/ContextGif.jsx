import React from "react";
import { useState } from "react";


const ContextGif = React.createContext()

function GifProvider ({children}){
    const [gifState, setGif] = useState([])
    const [anime, setAnime] = useState('Animes')
    const [loadingState, setState] = useState(true)
       
    return(
        <ContextGif.Provider value={{
            gifState,
            setGif,
            anime,
            setAnime,
            setState,
            loadingState,
            
        }}>
                {children}
        </ContextGif.Provider>
    )
}

export {GifProvider, ContextGif}

