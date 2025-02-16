import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ITEM_HEIGHT = 48;

const MoreActions = ({ row, openConfirm, handleDataUpdate, handleNotes, openRejection }) => {
  const options = [
    'Notes',
    'Delete Package',
    row?.disable_whatsapp ? 'Enable Sharing' : 'Disable Sharing',
    'Reject User'
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuChange = (o) => {
    switch (o) {
      case 'Delete Package':
        openConfirm(row);
        break;
      case 'Notes':
        handleNotes(row);
        break;
      case 'Disable Sharing':
        handleDataUpdate(row, { disable_whatsapp: true });
        break;
      case 'Enable Sharing':
        handleDataUpdate(row, { disable_whatsapp: false });
        break;
      case 'Reject User':
        openRejection(row);
        break;
      default:
        break;
    }
    handleClose();
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} onClick={() => handleMenuChange(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MoreActions;
