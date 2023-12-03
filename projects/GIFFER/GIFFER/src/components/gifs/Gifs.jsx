import React, { useState } from "react"
import './gifs.css'
function Gif ({id, title, url}){
    return (
      <div key={id} className= {`gif-data`} >
      <a href={url}><img className={'image-gif'}src={url}></img></a>
     </div>
         )
}

export {Gif}