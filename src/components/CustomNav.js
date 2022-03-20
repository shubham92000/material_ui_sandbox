import React from 'react';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const CustomNav = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: '#eee',
          padding: '5px 15px',
        }}
      >
        <div
          style={{
            display: 'flex',
            marginLeft: '30px',
            width: '30%',
            justifyContent: 'space-around',
          }}
        >
          <div className="nav-ele">brand</div>
          <div
            style={{
              display: 'flex',
            }}
          >
            <Button variant="text" className="nav-ele">
              Home
            </Button>
            <Button variant="text" className="nav-ele">
              About
            </Button>
            <Button
              className="nav-ele"
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              Dropdown
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
        <div>search</div>
      </Box>
    </>
  );
};

export default CustomNav;
