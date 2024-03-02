import React from "react";
import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import CharacterAuthorizeIcon from '@rsuite/icons/CharacterAuthorize';
import { useNavigate } from "react-router-dom";
// import "rsuite/dist/rsuite.min.css"; 
import { IconButton } from "rsuite"; 

function UserProfile() {
  const navigate = useNavigate();
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
