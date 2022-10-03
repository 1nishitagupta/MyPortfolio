import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import './footer.css'

function footer() {
  return (
    
    <footer>
			<div className="container footer-cols">
        <div className="fcolumns social"> 
						<ul>
							<li> <a href="https://www.instagram.com/nishitaa_2002/" target="_blank"><InstagramIcon/></a></li>
							<li> <a href="https://www.facebook.com/nishita.gupta.3344" target="_blank"><FacebookIcon/></a></li>
							<li> <a href="https://github.com/1nishitagupta" target="_blank"><GitHubIcon/></a></li>
							<li> <a href="https://www.linkedin.com/in/nishita-gupta-/" target="_blank"><LinkedInIcon/></a></li>
							<li> <a href="https://twitter.com/nishi9525" target="_blank"><TwitterIcon/></a></li>
						</ul>
			  </div>
        
        <div className="fcolumns"> 
						<span>Copyright @ Nishita Gupta</span>
			  </div>
      </div>
		</footer>  
    
  )
}

export default footer
