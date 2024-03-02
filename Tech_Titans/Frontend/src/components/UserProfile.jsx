import React from "react";
// import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import CharacterAuthorizeIcon from '@rsuite/icons/CharacterAuthorize';
// import "rsuite/dist/rsuite.min.css"; 
import { IconButton } from "rsuite"; 

function UserProfile() {
  const ButtonStyle = { margin: "0px 0px" , borderRadius:"100%",height:"3rem",width:"3rem",boxShadow:"3rem"}; 
  return (
    <Box
      sx={{
        position: "fixed",
        top: 16,
        right: 16,

      }}
    >
      <Link to={"/logout"}>
        <IconButton icon={<CharacterAuthorizeIcon style={{fontSize:"2rem",color:"blue"}}/>} style={ButtonStyle} />
      </Link>
    </Box>
  );
}

export default UserProfile;
