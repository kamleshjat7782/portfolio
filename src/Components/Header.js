import React from 'react'
import { Link,} from 'react-router-dom'

function Header() {
  return (
    <>
          <nav className='navbar'>
        <div className="logo">
          <a href="/">kamlesh</a>
        </div>
        <ul className='manu'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='./about'>About</Link></li>
          <li><Link to='./contact'>Contact</Link></li>
          <li><Link to='./project'>Project</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Header