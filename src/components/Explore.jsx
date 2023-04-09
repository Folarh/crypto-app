import React from 'react'
import Card from '../components/Card'
import './Explore.css'

//images import
import Bitcoin from '../assets/bitcoin-logo.png'
import Etherum from '../assets/Ethereum-logo.png'
import Tether from '../assets/tether-logo.png'
import Bnb from '../assets/bnb-logo.png'
import Usd from '../assets/usd-coin.png'
import Xrp from '../assets/xrp-logo.png'


export default function Explore() {
  return (
    <div className='explore'>
    <div className='explore-articles'>
        <h1>
            EXPLORE top Crypto's like Bitcoin, <br/>
            Etherum , Solana Yuna and Doge Coin
        </h1>
        <p>See all available assets and nfts</p>
        <button className='btn'>See More</button>
    </div>

    <div className='explore-coins'>
      <div className='top-coins'>
      <Card img={Bitcoin} coin="Bitcoin" price= "$27,555"/>
    <Card img={Etherum} coin="Etherum" price= "$1,829.59"/>
    <Card img={Tether} coin="Tether" price= "$1.005"/>
      </div>
      <div className='below-coins'>
      <Card img={Bnb} coin="Bnb" price= "$344.41"/>
    <Card img={Usd} coin="Usd Coin" price= "$1.003"/>
    <Card img={Xrp} coin="Xrp" price= "$0.384"/>
      </div>
    </div>
    </div>
  )
}
