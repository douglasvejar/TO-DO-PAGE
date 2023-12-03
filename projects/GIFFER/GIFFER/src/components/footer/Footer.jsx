import React from "react"
import "./footer.css"
function Footer (){
    return(
        <footer className="footer">
        <div className="footer-content">
          <p>&copy; DOUGLAS VEJAR</p>
          <div className="github-logo">
            <a href="https://github.com/douglasvejar" target="_blank" rel="noopener noreferrer">
              <img src="ruta/a/tu/logo/github.png" alt="GitHub Logo" />
            </a>
          </div>
        </div>
      </footer>
    )
}

export {Footer}