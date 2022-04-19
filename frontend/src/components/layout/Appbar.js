import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();
export default function Appbar(props){
    return (
        <ThemeProvider theme={theme}>
        <AppBar position="fixed">
        <Toolbar>
          {/*<CameraIcon sx={{ mr: 2 }} />*/}
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    )
  
}
