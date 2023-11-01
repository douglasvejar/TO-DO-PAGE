import './ToDoList.css'
export function ToDoList ({children}){
    return(
        <ul className="ToDo-List">
            {children}  
        </ul>
    )   
}