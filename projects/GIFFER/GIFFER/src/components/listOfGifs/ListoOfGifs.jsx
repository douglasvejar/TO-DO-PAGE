import { useContext, useEffect } from 'react'
import {Gif} from  '../gifs/Gifs'
import { ContextGif } from '../../contextGif/ContextGif'
import { getGif } from '../../services/gifApi/gifApi'


function ListOfGifs (){     
    const {
        gifState,
        setState, 
        setGif,
        loadingState,
        anime
    } = useContext(ContextGif)
    
    useEffect(()=>{
        getGif(anime).then(gifs => {
            setGif(gifs)    
        })
        
        
},[])

        
    return (
        gifState.map(gifs =>
            <Gif key={gifs.id}  id={gifs.id}  url={gifs.url}/>
            )
    )
}

export {ListOfGifs}