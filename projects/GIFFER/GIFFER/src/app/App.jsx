import React from 'react'
import './App.css'
import { AppUI } from './AppUI'
import { GifProvider } from '../contextGif/ContextGif'

function App() {  
  return(
    <GifProvider>
       <AppUI/>
    </GifProvider>
    )
    
  
}

export default App
