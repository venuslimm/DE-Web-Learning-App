import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
      // <header className="flex justify-content-between align-items-center my-2 border-b">
      <header className="flex flex-row items-center my-2 border-b">
        <Link href="/" className='mb-1'>
          {/* Credits:
            https://static-00.iconduck.com/assets.00/computer-icon-1024x1024-q34qlzrf.png
            https://static.vecteezy.com/system/resources/previews/035/193/466/original/data-pipeline-icon-line-illustration-vector.jpg
          */}
          <Image src="/resources/logo.png" alt="App Logo" width={64} height={64} className="display-10" />
        </Link>
        <h1 className="display-10 ml-5">Learn DE</h1>
        {/* <nav>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </nav> */}
      </header>
  )
}

export default Header;
