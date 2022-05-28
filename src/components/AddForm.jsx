//!IMPORTS:
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  TextField,
} from "@mui/material";

//!MAIN FUNCTION:
function AddForm(props) {
  //CONSTANTS & HOOKS:
  const { addProduct } = props;
  const [name, setName] = useState("");
  const [priceByUnit, setPriceByUnit] = useState(0);
  const [weight, setWeight] = useState("");
  const [format, setFormat] = useState("");
  const [image, setImage] = useState("");  
  

  //!INTERNAL FUNCTIONS:

  //FUNCTION TO ADD NEW PRODUCT:
   const handleSubmit = async (e) =>{
    e.preventDefault();
    addProduct({ display_name:name, priceByUnit:priceByUnit, weight:weight, packaging:format, thumbnail:image });
    setName("");
    setPriceByUnit("");
    setWeight("");
    setFormat("");
    setImage("");
  }

  //RENDER VIEW:
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Paper
          variant={"outlined"}
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Box sx={{ mt: 1 }}>
            <div>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  required
                  fullWidth
                  type={"text"}
                  id={"name"}
                  autoComplete="name"
                  variant={"filled"}
                  color="success"
                  label={"Nombre del producto"}
                  InputLabelProps={{
                    style: { color: "#bdbdbd" },
                  }}
                  name="name"
                  onChange={(e) => setName(e.target.value)}                  
                  value={name}
                  sx={{ mb: 1 }}
                />
                <TextField
                  required
                  fullWidth
                  type={"number"}
                  id={"priceByUnit"}
                  autoComplete="priceByUnit"
                  variant={"filled"}
                  color="success"
                  label={"Precio (€)"}
                  InputLabelProps={{
                    style: { color: "#bdbdbd" },
                  }}
                  InputProps={{ inputProps: { min: 0 } }}
                  name="priceByUnit"
                  onChange={(e) => setPriceByUnit(e.target.value)}
                  value={priceByUnit}
                  sx={{ mb: 1 }}
                />
                <TextField
                  required
                  fullWidth
                  type={"text"}
                  id={"weight"}
                  autoComplete="weight"
                  variant={"filled"}
                  color="success"
                  label={"Peso (en gramos)"}
                  InputLabelProps={{
                    style: { color: "#bdbdbd" },
                  }}
                  name="weight"
                  onChange={(e) => setWeight(e.target.value)}                  
                  value={weight}
                  sx={{ mb: 1 }}
                />
                <TextField
                  required
                  fullWidth
                  type={"text"}
                  id={"format"}
                  autoComplete="format"
                  variant={"filled"}
                  color="success"
                  label={"Formato"}
                  InputLabelProps={{
                    style: { color: "#bdbdbd" },
                  }}
                  name="format"
                  onChange={(e) => setFormat(e.target.value)}
                  value={format}
                  sx={{ mb: 1 }}
                />
                <TextField
                  required
                  fullWidth
                  type={"text"}
                  id={"image"}
                  autoComplete="image"
                  variant={"filled"}
                  color="success"
                  label={"URL de la Imagen"}
                  InputLabelProps={{
                    style: { color: "#bdbdbd" },
                  }}
                  name="image"
                  onChange={(e) => setImage(e.target.value)}
                  value={image}
                  sx={{ mb: 1 }}
                />

                <button>AÑADIR</button>
              </Box>
            </div>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}

export default AddForm;
