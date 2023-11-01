import { useEffect, useState } from "react"

export function useLocalStorage  (nameItem, initialValue) {
   const [item, setItem] = useState(initialValue)
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(false)

useEffect(()=>{
  try{
    setTimeout(()=>{
      const itemStringyfi = localStorage.getItem(nameItem)  
       let parsedItem
          if (!itemStringyfi){
            localStorage.setItem(nameItem ,JSON.stringify(initialValue))
            parsedItem = initialValue
          }else{
            parsedItem = JSON.parse(itemStringyfi)
            setItem(parsedItem)
      }
      setLoading(false)
      },2000)
  }catch(error){
    setError(error)
    setLoading(false)
  }
  },[])

    const saveItem = (newItem) => {
      localStorage.setItem('TODO_VI', JSON.stringify(newItem))
      setItem(newItem)
    }
    
     return {
      saveItem, 
      item,
      loading,
      error
    }        
  }

