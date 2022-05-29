//!IMPORTS:
import { Box, Typography } from "@mui/material";
import GppBadIcon from "@mui/icons-material/GppBad";

//!MAIN FUNCTION:

function NotFound() {
  //RENDER VIEW:
  return (
    <div className="App">
      <Box
        sx={{
          flexWrap: "wrap-reverse",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          pt: 10,
        }}
      >
        <Typography
          sx={{ fontSize: 16, fontWeight: "bold", pb: 30 }}
          color="text.primary"
          gutterBottom
          align={"center"}
        >
          <GppBadIcon /> <br /> <br />
          ¡Vaya!
          <br />
          Parece que la dirección a la que tratas de acceder no existe...
          <br />
          ¡Prueba con otra!
        </Typography>
      </Box>
    </div>
  );
}

export default NotFound;
