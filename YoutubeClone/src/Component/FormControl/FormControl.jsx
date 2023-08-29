import React from "react";
import { useDownloadMenuStyles } from "@mui-treasury/styles/menu/download";
import MenuItem from "@material-ui/core/MenuItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";

// Original design here: https://github.com/siriwatknp/mui-treasury/issues/777

const DownloadMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const downloadMenuClasses = useDownloadMenuStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        className={downloadMenuClasses.button}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <GetAppRoundedIcon className={downloadMenuClasses.downloadIcon} />
        <span>Download</span>
        <ExpandMoreIcon
          className={
            anchorEl ? downloadMenuClasses.downIcon : downloadMenuClasses.upIcon
          }
        />
      </Button>
      <Menu
        id="simple-menu"
        classes={{ paper: downloadMenuClasses.paper }}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>PDF File</MenuItem>
        <MenuItem onClick={handleClose}>CSV File</MenuItem>
        <MenuItem onClick={handleClose}>XLS File</MenuItem>
      </Menu>
    </div>
  );
};

export default DownloadMenu;
