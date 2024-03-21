import { FaBars } from "react-icons/fa";
import { navLinks } from "../constants";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import SmartSchoolCentralLogo from '../assets/Smart Scholar Central.jpg'
const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return ( 
        <nav className="navbar">
         <img src={SmartSchoolCentralLogo} alt="Smart School Central Logo" style={{width: '200px', height: '50px',marginLeft: '20px',width:'200px'}} className="logo" />  
          <div className="nav-links">
                {navLinks.map(nav => (
                    <NavLink to={nav.link} key={nav.id} className="link">{nav.id}</NavLink>
                ))}
            </div>
            <div className="menu-icons">
                <FaBars 
                    onClick={() => {
                        setToggle(prev => !prev);
                    }}
                />
            </div>
            <div className={`${toggle ? 'show' : 'hidden'}`}>
                {navLinks.map(nav => (
                    <NavLink to={nav.link} key={nav.id}>{nav.id}</NavLink>
                ))}
            </div>
        </nav>
    );
}
 
export default Navbar;