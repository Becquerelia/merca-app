//!IMPORTS:
import { useNavigate } from "react-router-dom";
import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";

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
          Home
        </Button>

        <Button
          sx={{
            marginLeft: "auto",
            color: "#FFFFFF",
            textDecoration: "none",
          }}
          onClick={() => {
            navigate("/product-list");
          }}
        >
          Product List
        </Button>

        <Button
          sx={{
            marginLeft: "auto",
            color: "#FFFFFF",
          }}
          onClick={() => {
            navigate("/about-me");
          }}
        >
          About me
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
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
