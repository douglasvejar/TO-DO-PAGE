import React, { useState } from 'react'
import './ToDoForm.css'
import { ToDoContext } from '../../ContextToDo/ContextToDo'

export function ToDoForm (){
    const [newInputTodo , setNewInputTodo] = useState('')
    const {
        addTodo,
        setState 
    } = React.useContext(ToDoContext)
    
    function onCancel (){
        setState(false)
    }

    function onAccept (){
        setState(false)
        addTodo(newInputTodo)
    }
    function onChange(event){
        setNewInputTodo(event.target.value)
    }
    return(
        <form className='ToDo-form-active' >
            <label className='ToDo-title'>AÑADE UN TO DO</label>
            <input className='ToDO-Input'
            value={newInputTodo}
            onChange={onChange}
            ></input>
            <div className='ToDo-Buttons'>
                <button className='ToDo-Btn-Add' onClick={onAccept}>AÑADIR</button>
                <button className='ToDo-Btn-Cancel'onClick={onCancel}>CANCELAR</button>
            </div>
        </form>
    )
}

