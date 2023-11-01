import React from 'react'
import './ToDoTitle.css'
import { ToDoContext } from '../../ContextToDo/ContextToDo'

export function ToDoTittle (){
    const {
        toDoCompleted,
        totalTodos
    } = React.useContext(ToDoContext)
    return (
        <h1 className="ToDo-Title">Has completados <span className='span-completed'>{toDoCompleted}</span> To Do de <span className='span-total'>{totalTodos}</span></h1>
    )
}
