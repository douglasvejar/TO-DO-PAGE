import { useContext } from 'react'
import { ContextGif } from '../../contextGif/ContextGif'
import './navbar.css'



function Navbar (){
  const {
    setAnime,
    } = useContext(ContextGif)

    function changeState(){
      setAnime('Jujutsu Kaisen')
    }

    function changeState2(){
      setAnime('Hunter x Hunter')
    }

    
    return(
      <nav className="navbar-content">
      <ul className="nav-list">
        <li><a className='item-navbar'href="/">Inicio</a></li>
        <li className="dropdown">
          <a className='item-navbar' href="/servicios">Servicios</a>
          <div className="dropdown-content">
            <a className='item-dropdown' onClick={changeState}>Jujutsu Kaisen</a>
            <a className='item-dropdown' onClick={changeState2}>Hunter x Hunter</a>
            <a className='item-dropdown'>Akira</a>
            <a className='item-dropdown'>Naruto</a>
            <a className='item-dropdown'>Evangelion</a>
          </div>
        </li>
        <li><a className='item-navbar' href="/acerca">Acerca de</a></li>
        <li><a className='item-navbar' href="/contacto">Contacto</a></li>
      </ul>
      <div className="search-container">
        <input type="text" placeholder="Buscar" />
        <button type="submit">Buscar</button>
      </div>
    </nav>
    )
  }
  export {Navbar}

