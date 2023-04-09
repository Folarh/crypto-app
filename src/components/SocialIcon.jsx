import React from 'react'

export default function SocialIcon({Icon, name}) {
  return (
    <div className="social-icon">
        <span>{Icon}</span>
    <p>{name}</p>
   
</div>
  )
}
