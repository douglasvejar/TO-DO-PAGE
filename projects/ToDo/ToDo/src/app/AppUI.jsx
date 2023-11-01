import React from 'react'
import {ToDoInput} from '../components/ToDoInput/ToDoInput'
import {ToDoTittle} from '../components/ToDoTittle/TodoTittle'
import { ToDoList } from '../components/ToDoList/ToDoList'
import { ToDoItem } from '../components/ToDoItems/ToDoItem'
import { ToDoBtn } from '../components/ToDoBtn/ToDoBtn'
import { ToDoForm } from '../components/ToDoForm/ToDoForm'
import { LoadingToDo } from '../components/Loading/LoadingToDo'
import { ErrorToDo } from '../components/Error/ErrorToDo'
import { ToDoContext } from '../ContextToDo/ContextToDo'
import { Modal } from '../Modal/Modal'
import { CreaTodo } from '../components/CreaTodo/CreaTodo'

export function AppUI (){
  const {
    loading,
    error,
    todoSearch,
    completeTodos,
    deleteTodos, 
    stateForm,
    
  } = React.useContext(ToDoContext)
    return (
        <>
        <div className='App-content'>
          
          <ToDoTittle/>
            
          <ToDoInput/> 
           
          <ToDoList>
            {loading && (
                  <>
                  <LoadingToDo/> 
                  <LoadingToDo/> 
                  <LoadingToDo/>
                  </>
            )}  
            {error && <ErrorToDo/>}
            {(!loading && todoSearch.length === 0) && <CreaTodo/>}
            {todoSearch.map(toDo =>(
               <ToDoItem 
               key={toDo.text} 
               completed={toDo.completed} 
               text={toDo.text} 
               oncomplete={()=> completeTodos(toDo.text)}
               ondelete={()=> deleteTodos(toDo.text)}
               />
              ))}
             </ToDoList>         
           
             <ToDoBtn />        
        </div>
    
        <Modal>
            {stateForm && (
              <ToDoForm/>
            )}
        </Modal>
        </>
      )
    
      
    }