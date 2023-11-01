import { ToDoProvider } from '../ContextToDo/ContextToDo';
import { AppUI } from './AppUI'
import './app.css'

//const toDoItems = [
  //{text:'Cortar cebolla', completed:false},
  //{text:'Cortar tomate', completed:false},
  //{text:'Cortar papa', completed:false},
  //{text:'Cortar pollo', completed:false},
  //{text:'Cortar cebollin', completed:false},
  //{text:'Comprar pescado', completed:false}
//]



function App(){
  return(
      <ToDoProvider>
        <AppUI/>
      </ToDoProvider>
  );
}

export default App