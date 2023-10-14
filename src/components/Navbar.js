import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; 
import { FaHome } from "react-icons/fa";
import { SiFormstack } from "react-icons/si";
import { CgProfile} from "react-icons/cg";
import { MdDashboard} from "react-icons/md";
import { FcTodoList} from "react-icons/fc";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <h1> <div className='hh'><MdDashboard/>Dashbord</div></h1>
      
        <li><Link to="/Home"> <FaHome />Home</Link></li>
        <li><Link to="/Form"> <SiFormstack/>Form</Link></li>
        <li><Link to="/Profile" ><CgProfile/>Profile</Link></li>   
        <li><Link to="/Todo" ><FcTodoList/>Todo</Link></li>   
      </ul>
    </nav>
  );
};

export default Navbar;

