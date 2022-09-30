import React , {useState} from 'react'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';

function Hamburger({isActive} , props) {
  return (
    <div className={isActive ? 'ham-dropdown' : 'claassss'}>
    <ul>
      <li><a href="#home"><HomeIcon/> Home</a></li>
      <li><a href="#about"><PersonIcon/> About</a></li>
      <li><a href="#skills"><CodeIcon/> Skills</a></li>
      <li><a href="#services"><WorkIcon/> Services</a></li>
      <li><a href="#portfolio"><ViewCarouselIcon/> Portfolio</a></li>
      <li><a href="#qualifications"><SchoolIcon/> Qualifications</a></li>
      <li><a href="#contact"><PermContactCalendarIcon/> Contact me</a></li>
      <li><a href="#social"><PersonAddAlt1Icon/> Social Media</a></li>

    </ul>
  </div>
  )
}

export default Hamburger