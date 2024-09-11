import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
      <header className="d-flex justify-content-between align-items-center my-2 border-b">
        <Link href="/">
          <h1 className="display-10">To insert app logo here</h1>
        </Link>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
  )
}

export default Header;
