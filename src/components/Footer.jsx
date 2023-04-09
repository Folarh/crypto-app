import React from 'react'
import SocialIcon from '../components/SocialIcon'

//styles
import './Footer.css'

//icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='support'>
      <p><b>Support</b></p>
        <p>Contact Us</p>
        <p>Chat</p>
        <p>Help Center</p>
        <p>Faq</p>
      </div>

      <div className='developers'>
      <p><b>Developers</b></p>
      <p>Cloud</p>
      <p>Commerce</p>
      <p>Pro</p>
      <p>Api</p>
      </div>
      <div className='About'>
      <p><b>About</b></p>
      <p>Legal</p>
      <p>Privacy</p>
      </div>
      <div className='socials'>
        <SocialIcon Icon={<FacebookIcon/>} name="Facebook"/>
        <SocialIcon Icon={<TwitterIcon/>} name="Twitter"/>
        <SocialIcon Icon={<GitHubIcon/>} name="Github"/>
        <SocialIcon Icon={<LinkedInIcon/>} name="LinkedIn"/>
       
       
      </div>
    </div>
  )
}
