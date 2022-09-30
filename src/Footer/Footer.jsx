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
        <div class="fcolumns social"> 
						<ul>
							<li> <a href=""><InstagramIcon/></a></li>
							<li> <a href=""><FacebookIcon/></a></li>
							<li> <a href=""><GitHubIcon/></a></li>
							<li> <a href=""><LinkedInIcon/></a></li>
							<li> <a href=""><TwitterIcon/></a></li>
						</ul>
			  </div>
        
        <div class="fcolumns"> 
						<span>Copyright @ Nishita Gupta</span>
			  </div>
      </div>
		</footer>  
    
  )
}

export default footer
