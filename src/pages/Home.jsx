//!IMPORTS:
import { useNavigate } from "react-router-dom";
import logoMercadona from "../assets/logo-mercadona.png"
import {
  Box,
  Button,  
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

//!MAIN FUNCTION:

function Home() {

  const navigate = useNavigate();  

  //RENDER VIEW:
  return (
    <div className="App">
      <Box
        sx={{
          flexWrap: "wrap-reverse",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          pt: 10,
        }}
      >
        <img src={logoMercadona} alt="Logo" width="750rem"/>
      </Box>
      <Box
        sx={{
          flexWrap: "wrap-reverse",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          pt: 10,
        }}
      >
        <Card variant={"outlined"} sx={{ p: 10, m: 3 }}>
          <CardContent sx={{ p: 1 }}>
            <Typography
              sx={{ fontSize: 16, fontWeight: "bold" }}
              color="text.primary"
              gutterBottom
              align={"center"}
            >
              ¡Haz click para consultar el listado de chocolates ordenados por categoría!
            </Typography>
            
          </CardContent>
          <CardActions
            sx={{
              pt: 5,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
          
            <button
              onClick={() => {
                navigate("/categories-list");
              }}
            >
             <b>VER CATEGORÍAS</b>
            </button>
          </CardActions>
        </Card>
        
      </Box>
    </div>
  )
}

export default Home