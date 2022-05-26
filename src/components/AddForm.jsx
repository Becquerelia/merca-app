//!IMPORTS:
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {    
    Box,
    Button,
    Container,
    Divider,
    Paper,
    TextField
  } from "@mui/material";

//!MAIN FUNCTION:
function AddForm(props) {
  //CONSTANTS & HOOKS:
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState(0)
  const [weight, setWeight] = useState("")
  const [format, setFormat] = useState("")
  const [image, setImage] = useState("")
  const navigate = useNavigate();
  const {addProduct} = props;

  //!INTERNAL FUNCTIONS:

    //HANDLE FUNCTIONS:
    const handleTitle = (e) => {setTitle(e.target.value)}
    const handlePrice = (e) => {setPrice(e.target.value)}
    const handleWeight = (e) => {setWeight(e.target.value)}
    const handleFormat = (e) => {setFormat(e.target.value)}    
    const handleImage = (e) => {setImage(e.target.value)}
  
    //FUNCTION TO ADD NEW PRODUCT:
    // const handleSubmit = async (e) =>{
    //   e.preventDefault()
    //   try {
    //     const newProduct = {title, price, weight, format, image}
    //     //!await addNewEventService(newEvent)
    //     getAllProducts()
    //     setTitle("")
    //     setPrice(0)
    //     setWeight("")
    //     setFormat("")
    //     setImage("")
    //   }
    //   catch(err){
    //     navigate("/error")
    //   }    
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct({title, price, weight, format, image})
    }

    //FUNCTION TO DISABLE SUBMIT:
    const enabledIfFilled = () => {
        return !title;
    };
    
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
                id={"title"}
                autoComplete="title"
                variant={"filled"}
                label={"Title"}
                InputLabelProps={{
                  style: { color: "#bdbdbd" },
                }}
                name="title"
                onChange={(e) => setTitle(e.target.value)}
                color={"secondary"}
                value={title}
                sx={{ mb: 1 }}
              />
              <TextField
                required
                fullWidth
                type={"number"}
                id={"price"}
                autoComplete="price"
                variant={"filled"}
                label={"Price"}
                InputLabelProps={{
                  style: { color: "#bdbdbd" },
                }}
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
                label={"Weight"}
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
                label={"Format"}
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
                label={"Image URL"}
                InputLabelProps={{
                  style: { color: "#bdbdbd" },
                }}
                name="image"
                onChange={(e) => setImage(e.target.value)}
                color={"secondary"}
                value={image}
                sx={{ mb: 1 }}
              />
              
              <Divider sx={{ mb: 2 }} />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={enabledIfFilled()}
              >
                ADD
              </Button>
            </Box>  
          </div>
        </Box>
      </Paper>
    </Container>
    </div>
  )
}

export default AddForm