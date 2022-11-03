import React, { useState } from "react"
import "./navbar.css"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
// import Main from "../../components/main/Main"

const Navbar = ({ setShow, size }) => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  // logout--------------------------------
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  const user = localStorage.getItem("token");
  // logout--------------------------------
  const navigate = useNavigate();
  const uploadProperties = () => {
    navigate('/uploadProperty')
  }
  return (
    <>
      <nav className='navbar'>
        <div className='nav'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? "fas fa-times" : " fas fa-bars"}></i>
          </div>
          <a href="/">
            <img src='images/logo1.png' alt='' />
          </a>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to='/' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/about' onClick={closeMobileMenu}>
                About us
              </Link>
            </li>
            <li>
              <Link to='/contact' onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>
            {/* <li>
              <Link to='/cart' onClick={closeMobileMenu}>
                Cart
              </Link>
            </li> */}
          </ul>
          <div className="loginpart">
            <ul>

              <li><Link to='/property/uploadProperty'>
                <button className="list_btn" onClick={uploadProperties}>
                  List your Property
                </button>
              </Link>
              </li>
              <li>{user ?
                <Link to='/'>
                  <button className="white_btn" onClick={handleLogout}>
                    Logout
                  </button>
                </Link>
                : <Link to='/login'>
                  <button className='primary-btn' onClick={closeMobileMenu}>Login</button>
                </Link>}
              </li>
              <li>
                <Link to='/signup'>
                  <button className='primary-btn' onClick={closeMobileMenu}>Sign up</button>
                </Link>
              </li>
              <li>
                <Link to='/property/cartitem'>
                  <div className="cart " onClick={() => setShow(false)}>
                    <span>
                    <i class="fa fa-heart" aria-hidden="true"></i>
                    </span>
                    <span>{size}</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          {/* {user &&
            <div className="main_container">
              <button className="white_btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          } */}
          {/* <Main /> */}
        </div>
      </nav>
    </>
  )
}

export default Navbar
