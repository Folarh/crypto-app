import './Main.css'
import Crypto from "../assets/crypto.webp"

export default function Main() {
  return (
   <main className='main-page'>
    <div  className='main-page-left'>
        <h5>Buy and sell crypto 24/7  from MeCoin</h5>
        <h1>
            Invest In <br/>
            Cryptocurrency with your <br/>
            bank card

        </h1>
        <p>Buy, Sell and  Store hundreads of crypto-currency</p>
        <div className='call-to-action'>
            <input type="search" placeholder='Enter Your Email'/>
            <button>Learn more</button>
        </div>
    </div>

    <div  className='main-page-right'>
    <img src={Crypto} alt="crypto-pic"/>
    </div>
   
   </main>
  )
}
