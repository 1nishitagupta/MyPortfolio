import React , {useState} from 'react'
import { Link } from "react-router-dom";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';

function Hamburger({isActive , handleClick , setIsActive} , props ) {
  return (
    <div className={isActive ? 'ham-dropdown' : 'claassss'}>
    <ul>
      <li onClick={handleClick}><a href="#home"><HomeIcon/> Home</a></li>
      <li onClick={handleClick}><a href="#about"><PersonIcon/> About</a></li>
      <li onClick={handleClick}><a href="#skills"><CodeIcon/> Skills</a></li>
      <li onClick={handleClick}><a href="#services"><WorkIcon/> Services</a></li>
      <li onClick={handleClick}><a href="#portfolio"><ViewCarouselIcon/> Portfolio</a></li>
      <li onClick={handleClick}><a href="#qualifications"><SchoolIcon/> Qualifications</a></li>
      <li onClick={handleClick}><a href="#contact"><PermContactCalendarIcon/> Contact me</a></li>
      <li onClick={handleClick}><a href="#footer"><PersonAddAlt1Icon/> Social Media</a></li>
      <li onClick={handleClick}><Link to="/blog"><BookIcon/>Blog</Link></li>
      <li onClick={handleClick}><Link to="/feedback"><BookIcon/>Feedback</Link></li>

    </ul>
  </div>
  )
}

export default Hamburger