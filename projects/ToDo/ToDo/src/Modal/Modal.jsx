import React from "react"
import  ReactDOM  from "react-dom"


function Modal ({children}){
  return ReactDOM.createPortal(
    <div className="ToDo-form">
       {children} 
    </div>,
    document.getElementById('modal')
  ) 
}

export { Modal }