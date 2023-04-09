import React from 'react'

export default function Card({img, coin, price}) {
  return (
    <div className='card'>
      <img src={img} alt="pic"/>
      <h4>{coin}</h4>
      <p>{price}</p>
    </div>
  )
}
