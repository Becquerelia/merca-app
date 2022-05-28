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
  const [price, setPrice] = useState(0);
  const [weight, setWeight] = useState("");
  const [format, setFormat] = useState("");
  const [image, setImage] = useState("");  
  

  //!INTERNAL FUNCTIONS:

  //FUNCTION TO ADD NEW PRODUCT:
   const handleSubmit = async (e) =>{
    e.preventDefault();
    addProduct({ display_name:name, price:price, weight:weight, packaging:format, thumbnail:image });
    setName("");
    setPrice("");
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
                  label={"Nombre del producto"}
                  InputLabelProps={{
                    style: { color: "#bdbdbd" },
                  }}
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  color={"secondary"}
                  value={name}
                  sx={{ mb: 1 }}
                />
                <TextField
                  required
                  fullWidth
                  type={"number"}
                  id={"price"}
                  autoComplete="price"
                  variant={"filled"}
                  label={"Precio"}
                  InputLabelProps={{
                    style: { color: "#bdbdbd" },
                  }}
                  InputProps={{ inputProps: { min: 0 } }}
                  name="price"
                  onChange={(e) => setPrice(e.target.value)}
                  color={"secondary"}
                  value={price}
                  sx={{ mb: 1 }}
                />
                <TextField
                  required
                  fullWidth
                  type={"text"}
                  id={"weight"}
                  autoComplete="weight"
                  variant={"filled"}
                  label={"Peso (en gramos)"}
                  InputLabelProps={{
                    style: { color: "#bdbdbd" },
                  }}
                  name="weight"
                  onChange={(e) => setWeight(e.target.value)}
                  color={"secondary"}
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
                  label={"Formato"}
                  InputLabelProps={{
                    style: { color: "#bdbdbd" },
                  }}
                  name="format"
                  onChange={(e) => setFormat(e.target.value)}
                  color={"secondary"}
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
                  label={"URL de la Imagen"}
                  InputLabelProps={{
                    style: { color: "#bdbdbd" },
                  }}
                  name="image"
                  onChange={(e) => setImage(e.target.value)}
                  color={"secondary"}
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
