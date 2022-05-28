//!IMPORTS:
import telefonoAtencion from "../assets/telefonoAtencionCliente.png";
import emailContacto from "../assets/emailContacto.png";
import redesSociales from "../assets/redesSociales.png";
import {
  Box,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Card,
  CardContent,
  Divider,
} from "@mui/material";

function Contact() {
  return (
    <div
      className="cardGrid"
      style={{
        marginTop: 100,
        marginBottom: 100,
      }}
    >
      <Card variant={"outlined"} sx={{ py: 2, px: 2, m: 3 }}>
        <CardContent sx={{ p: 1 }}>
          <img src={telefonoAtencion} alt="Logo" width="260rem" />

          <Typography
            maxWidth={"20rem"}
            minHeight={"8rem"}
            sx={{ fontSize: 15, fontWeight: "bold", pt: 3 }}
            color="black"
            gutterBottom
            align={"center"}
          >
            Te atendemos personalmente de lunes a domingo de 7 a 22:30h, 1h menos en Canarias. <br/><br/> 800 500 220 <br/> (Gratuito)
          </Typography>
        </CardContent>
      </Card>

      <Card variant={"outlined"} sx={{ py: 2, px: 2, m: 3 }}>
        <CardContent sx={{ p: 1 }}>
        <a href="mailto:sugerencias@mercadona.es">
        <img src={emailContacto} alt="Logo" width="300rem" />
      </a>

          <Typography
            maxWidth={"20rem"}
            minHeight={"8rem"}
            sx={{ fontSize: 15, fontWeight: "bold", pt: 3 }}
            color="black"
            gutterBottom
            align={"center"}
          >
            Haznos llegar tus comentarios a través de nuestro correo electrónico haciendo click en el icono superior o en este 
            <a href="sugerencias@mercadona.es"> enlace</a>.
          </Typography>
        </CardContent>
      </Card>

      <Card variant={"outlined"} sx={{ py: 2, px: 2, m: 3 }}>
        <CardContent sx={{ p: 1 }}>
        <img src={redesSociales} alt="Logo" width="290rem" />

          <Typography
            maxWidth={"20rem"}
            minHeight={"8rem"}
            sx={{ fontSize: 15, fontWeight: "bold", pt: 3 }}
            color="black"
            gutterBottom
            align={"center"}
          >
            También puedes contactar con nosotros desde nuestro <a href="https://www.facebook.com/mercadona/">Facebook</a>, <a href="https://twitter.com/mercadona?lang=es">Twitter</a>, <a href="https://www.youtube.com/mercadona">Youtube</a>, <a href="https://www.linkedin.com/company/mercadona/?originalSubdomain=es">Instagram</a> y <a href="https://www.linkedin.com/company/mercadona/?originalSubdomain=es">Linkedin</a>.
          </Typography>
        </CardContent>
      </Card>

      
      
    </div>
  );
}

export default Contact;
