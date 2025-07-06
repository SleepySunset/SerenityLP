import { useState } from "react"
import Hamburger from 'hamburger-react';
import Navbar from './Navbar'

const Menu = () => {
  const[isOpen, setIsOpen] = useState(false)
  

  return (
    <div className="hamburger-container">
      <Hamburger
      className="hamburger"
      size={18}
      toggled={isOpen}
      toggle={setIsOpen}
      style={{ zIndex: 20, position: "relative" }}
      />
      {isOpen && <Navbar classId="nav-hamburger"/>}
    </div>
    
  )
}

export default Menu
