import { Box, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import React from 'react';
export interface NavbarProps {}

const Navbar : React.FC<NavbarProps> = () => {
	return (
	 <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>);
};

export default Navbar;
