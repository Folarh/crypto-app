import "./NavBar.css"

export default function NavBar() {
  return (
   <nav className="navbar">
    <div className="logo">
        <h2>Me<span>Coin</span></h2>
    </div>

    <div className="nav-list">
        <ul>
            <li>Home</li>
            <li>Earn</li>
            <li>contact</li>
            
        </ul>
    </div>

    <button>Connect wallet</button>

   </nav>
  )
}
