import React from 'react'
import Phone from '../assets/team-removebg-preview.png'

//styles
import './Trade.css'

export default function Trade() {
  return (
    <div className='trade'>
      <div className='trade-left'>
        <img src={Phone} alt="crypto"/>
      </div>

      <div className='trade-right'>
        <h1>Earn Passive income with<br/>
         crypto
         </h1>
        <p>Earn up to 12% anual rewards on 30+ digital assets</p>
        <h6>Simply your coin</h6>
        <div className='call-to-action'>
            <input type="search" placeholder='Enter Your Email'/>
            <button>Learn more</button>
        </div>
      </div>
    </div>
  )
}
