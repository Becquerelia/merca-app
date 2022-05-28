//!IMPORTS:
import {
  Box,
  Typography,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Card,
  CardContent,
  Divider,
  IconButton,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SyncLoader from "react-spinners/SyncLoader";
import AddForm from "../components/AddForm";
import axios from "axios";

//!MAIN FUNCTION:

function ProductList() {
  //CONSTANTS & HOOKS:
  const [allProducts, setAllProducts] = useState(null);
  const [productTitle, setProductTitle] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getAllProducts();
    console.log("A ver:", allProducts, id);
  }, []);

  //!INTERNAL FUNCTIONS:

  //FUNCTION TO GET CATEGORIES LIST:
  const getAllProducts = async () => {
    try {
      const response = await axios.get(
        "https://tienda.mercadona.es/api/v1_1/categories/92"
      );
      console.log(response.data.categories);
      const data = response.data.categories;
      data.forEach((eachProduct) => {
        eachProduct.id == id && setAllProducts(eachProduct.products);
        eachProduct.id == id && setProductTitle(eachProduct.name);
      });
    } catch (err) {
      navigate("/error");
    }
  };

  //FUNCTION TO OPEN A MODAL WITH AN IMAGE:
  const handleOpenModal = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  //FUNCTION TO CLOSE MODAL AND SET STATE:
  const handleClose = () => {
    setOpen(false);
  };

  //LOADING SYSTEM:
  if (!allProducts) {
    return (
      <div className="loadingSpinner">
        <h2>...Loading...</h2>
        <br />
        <SyncLoader color="#26b879" size="1rem" />
      </div>
    );
  }

  //RENDER VIEW:
  return (
    <div className="App">
      <div>
        <Typography
          sx={{ pt: 8, pb: 4, fontSize: 40 }}
          color="black"
          gutterBottom
          align={"center"}
        >
          {productTitle.toUpperCase()}
        </Typography>

        <button
          style={{ marginBottom: "2rem" }}
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? <b>HIDE FORM</b> : <b>ADD PRODUCT</b>}
        </button>
        <Collapse in={showForm}>
          <AddForm />
        </Collapse>
      </div>

      <div className="cardGrid">
        {allProducts.map((eachProduct, index) => {
          return (
            <Card
              variant={"outlined"}
              maxWidth={"sm"}
              sx={{ py: 2, px: 8, m: 3, borderColor: "#26b879" }}
              key={eachProduct.id}
            >
              <CardContent sx={{ p: 1 }} className="cardText">
                <div>
                  <img
                    src={eachProduct.thumbnail}
                    alt={eachProduct.display_name}
                    width="80%"
                    className="zoomEffect"
                    onClick={handleOpenModal}
                  />
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <Box sx={{ backgroundColor: "background.default" }}>
                      <DialogTitle id="alert-dialog-title">
                        {eachProduct.display_name}
                      </DialogTitle>
                      <DialogContent>
                        <img
                          src={eachProduct.thumbnail}
                          alt={eachProduct.display_name}
                          width="100%"
                          onClick={handleOpenModal}
                        />
                      </DialogContent>
                    </Box>
                  </Dialog>

                  <div>
                    <Typography
                      maxWidth={"sm"}
                      sx={{ fontSize: 15, fontWeight: "bold" }}
                      color="black"
                      gutterBottom
                      align={"center"}
                    >
                      {eachProduct.display_name}
                    </Typography>
                    <br />
                    <Divider />
                    <Typography variant="body2" sx={{ my: 1 }}>
                      <b>Precio: </b>
                      {eachProduct.price_instructions.unit_price} €
                    </Typography>
                    <Divider />
                    <Typography variant="body2" sx={{ my: 1 }}>
                      <b>Peso: </b>
                      {eachProduct.price_instructions.unit_size * 1000} g
                    </Typography>
                    <Divider />
                    <Typography variant="body2" sx={{ my: 1 }}>
                      <b>Formato:</b> {eachProduct.packaging}
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
