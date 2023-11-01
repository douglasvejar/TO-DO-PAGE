import { ToDoContext } from '../../ContextToDo/ContextToDo'
import React from 'react'
import './ToDoBtn.css'

export function ToDoBtn(){
    const {
        stateForm,
        setState
    } = React.useContext(ToDoContext)
    function handleState (){
        setState(!stateForm)
    }
    return(
        <button onClick={handleState} className="add-ToDo">+</button>
    )
}