import './ToDoInput.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { ToDoContext } from '../../ContextToDo/ContextToDo'

export function ToDoInput (){
    const {
        stateSearch,
        setSearch
    } = React.useContext(ToDoContext)
    return(
        <div className="input-container">
        <i><FontAwesomeIcon icon={faMagnifyingGlass} fontSize={20}/></i>
            <input onChange={(event)=>{
                setSearch(event.target.value)
            }} className='ToDo-Input' type="text" placeholder="Buscar" value={stateSearch} >
            </input>
         </div>        
    )
}