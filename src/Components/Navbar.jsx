import React from 'react'


export default function Navbar(props) {
  const textColor = () =>{
    return props.mode==='primary'? "light":"light";
  }

  
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} text-${textColor()}`} >
      <div className="container-fluid">
      {/* <Link className={`navbar-brand text-${textColor()}`} to="/">TextUtils</Link> */}
      <a className={`navbar-brand text-${textColor()}`} href="/">TextUtils</a>
      <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          </li>
            <a className={`nav-link active text-${textColor()}`} aria-current="page" href="/">Home</a>
            {/* <Link className={`nav-link active text-${textColor()}`} aria-current="page" to="/">Home</Link> */}
          {/* <li className="nav-item">
            <Link className={`nav-link text-${textColor()}`} to="/About">{props.aboutText}</Link>
          </li>
          <li className="nav-item">
            <a href='/' className={`nav-link text-${textColor()}`}>Contact</a>
          </li> */}
        </ul>
        <form className="d-flex" role="search">
        <div className="form-check form-switch me-2 ">
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label mx-3" htmlFor="flexSwitchCheckDefault">Light/Dark</label>
        </div>
          
        </form>
      </div>
    </div>
  </nav>
  )
}
