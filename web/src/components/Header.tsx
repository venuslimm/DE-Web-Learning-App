import Link from 'next/link';
import Image from 'next/image';
import { Box } from '@mui/material';

const Header = () => {
  return (
    <Box
      component="header"
      className="flex flex-row items-center"
      bgcolor="primary.900"
      sx={{
        position: 'fixed',
        zIndex: 1000,
        py: '1rem',
        px: '5rem',
      }}
      width={'100vw'}
      height={'7vh'}
    >
      <Link href="/#course-catalogue" className="mb-1">
        <Image src="/resources/logo.png" alt="App Logo" width={150} height={150} />
      </Link>
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
    </Box>
  );
};

export default Header;
