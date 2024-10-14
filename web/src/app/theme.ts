'use client';
import { createTheme } from '@mui/material/styles';
import { amber, blueGrey } from '@mui/material/colors';

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  palette: {
    primary: blueGrey,
    secondary: amber,
  },
});

export default theme;
