//!IMPORTS:
import { useNavigate } from "react-router-dom";
import { AppBar, Button, Toolbar } from "@mui/material";

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
         <b>Home</b> 
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
          <b>Products by Category</b> 
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
          <b>Contact</b>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
