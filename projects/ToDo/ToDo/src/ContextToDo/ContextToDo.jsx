import { useState } from 'react'
import React from 'react'
import { useLocalStorage } from "../app/useLocalStorage";

const ToDoContext = React.createContext();

function ToDoProvider ({children}){
    const [stateForm, setState] = useState(false)
    const [stateSearch, setSearch ] = useState('')
    const {saveItem: setTodoStorage, 
           item: todoState,
           loading,
           error         
    } = useLocalStorage('TODO_VI', [])
  
    const toDoCompleted = todoState.filter(toDo =>(
      toDo.completed
    )).length

    const totalTodos = todoState.length
    
    const todoSearch = todoState.filter(toDo => {
      const todoLower = toDo.text.toLocaleLowerCase()
      const searchLower = stateSearch.toLocaleLowerCase()
      return todoLower.includes(searchLower)
    })
  
    function addTodo (text){
      const newTodos = [...todoState]
      newTodos.push({
        text,
        completed: false
      })
      setTodoStorage(newTodos)
    }
   function completeTodos (text){
      const newTodos = [...todoState]
      const todoIndex = newTodos.findIndex(todo => (
        todo.text == text
      ))
      newTodos[todoIndex].completed = true
      setTodoStorage(newTodos)
    }
  
    function deleteTodos (text){
      const newTodos = [...todoState]
      const todoIndex = newTodos.findIndex(todo => (
        todo.text == text
      )) 
      newTodos.splice(todoIndex, 1)
      setTodoStorage(newTodos)
      }

    return(
        <ToDoContext.Provider value={{
            toDoCompleted,
            totalTodos,
            todoState,
            stateSearch,
            setSearch,
            todoSearch,
            completeTodos,
            deleteTodos,
            stateForm,
            setState,
            loading,
            addTodo,
            error
        }}>
            {children}
        </ToDoContext.Provider>
    )
}

export {ToDoProvider, ToDoContext}