import './ToDoItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import {faX} from '@fortawesome/free-solid-svg-icons'


export function ToDoItem({text, completed, oncomplete, ondelete}){
   
    return(
    <div className='items-list'>
        <li className={`ToDo-Item ${completed && 'ToDo-Item ToDo-item-check'}`} >
            <i className={'icon-check'} ><FontAwesomeIcon icon={faCheck} fontSize={20} onClick={oncomplete}/></i>
            {text}
            <i  className='icon-x'><FontAwesomeIcon icon={faX}  fontSize={20} onClick={ondelete}/></i>
        </li>
     </div>
            )

}
