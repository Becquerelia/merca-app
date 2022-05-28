//!IMPORTS:
import { useNavigate } from "react-router-dom";
import { AppBar, Button, Toolbar } from "@mui/material";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

//!MAIN FUNCTION:
function Navbar() {
  const navigate = useNavigate();

  //RENDER VIEW:
  return (
    <AppBar position={"static"}>
      <Toolbar sx={{ backgroundColor: "#229e6b", flexGrow: "1" }}>
        <Button
          variant="text"
          sx={{ color: "#FFFFFF" }}
          onClick={() => {
            navigate("/");
          }}
        >
         <HomeRoundedIcon  /> 
        </Button>

        <Button
          sx={{
            marginLeft: "auto",
            color: "#FFFFFF",
            textDecoration: "none",
          }}
          onClick={() => {
            navigate("/categories-list");
          }}
        >
          <b>CATEGORÍAS</b> 
        </Button>       

        <Button
          onClick={() => {
            navigate("/contact");
          }}
          sx={{
            marginLeft: "auto ",
            color: "#FFFFFF",
          }}
        >
          <b>CONTACTO</b>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
