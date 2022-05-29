//!IMPORTS:
import { Box, Typography } from "@mui/material";
import GppBadIcon from "@mui/icons-material/GppBad";

//!MAIN FUNCTION:
function Error() {
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
          ¡Vaya! parece que estamos teniendo algún problema interno... <br />
          ¡Vuelve más tarde! Mientras tanto puedes ir a Mercadona a comprar chocolate.
        </Typography>
      </Box>
    </div>
  );
}

export default Error;
