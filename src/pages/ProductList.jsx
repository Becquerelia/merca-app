//!IMPORTS:
import {
  Paper,
  Container,
  Typography,
  Box,
  Grid,
  Collapse,
  Card,
  CardContent,
  CardActions,
  Divider,
} from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SyncLoader from "react-spinners/SyncLoader";
import AddForm from "../components/AddForm";
import axios from "axios";

//!MAIN FUNCTION:

function ProductList() {
  //CONSTANTS & HOOKS:
  const [allProducts, setAllProducts] = useState(null);
  const [showForm, setShowForm] = useState(false);
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
        //console.log(eachProduct, eachProduct.id, id)
        eachProduct.id == id && setAllProducts(eachProduct.products);
      });
    } catch (err) {
      navigate("/error");
    }
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
    <Container component={"main"} maxWidth={"sm"} sx={{ my: 2 }}>
      <Box
        sx={{
          flexWrap: "wrap-reverse",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          pt: 10,
        }}
      >
        <Typography
          sx={{ fontSize: 30, fontWeight: "bold" }}
          color="text.primary"
          gutterBottom
          align={"center"}
        >
          Chocolates tipoo...
        </Typography>
      </Box>
      <div>
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? <b>HIDE FORM</b> : <b>ADD PRODUCT</b>}
        </button>
        <Collapse in={showForm}>
          <AddForm />
        </Collapse>
      </div>

      <Box
        sx={{
          flexWrap: "wrap-reverse",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          pt: 10,
        }}
      >
        {allProducts.map((eachProduct, index) => {
          return (
            <Card
              variant={"outlined"}
              sx={{ p: 3, m: 3, borderColor: "#26b879" }}
              key={eachProduct.id}
            >
              <CardContent sx={{ p: 1 }}>
                <div>
                  <div>
                    <img
                      src={eachProduct.thumbnail}
                      alt={eachProduct.display_name}
                      width="50%"
                    />
                    <CardActions
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                      }}
                    >
                      <button>Lupita</button>
                    </CardActions>
                  </div>
                  <div>
                    <Typography
                      sx={{ fontSize: 16, fontWeight: "bold" }}
                      color="black"
                      gutterBottom
                      align={"center"}
                    >
                      {eachProduct.display_name}
                    </Typography>
                    <Divider />
                    <Typography variant="body2" sx={{ my: 1 }}>
                      Precio: {eachProduct.price_instructions.unit_price} €
                    </Typography>
                    <Divider />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </Box>

      <Paper
        variant={"outlined"}
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        {allProducts.map((eachProduct, index) => {
          return (
            <Grid item xs={12} sm={6} key={eachProduct.id}>
              <Box
                sx={{
                  p: 2,
                  my: 2,
                  border: "2px solid",
                  borderColor: "#26b879",
                  borderRadius: "5px",
                  boxShadow: "#26b879",
                }}
              >
                <CardContent sx={{ p: 1 }}>
                  <Typography
                    sx={{ fontSize: 16, fontWeight: "bold" }}
                    gutterBottom
                    align={"center"}
                  >
                    {eachProduct.display_name}
                  </Typography>
                  <Divider />
                  <Typography
                    sx={{ fontSize: 16, fontWeight: "bold" }}
                    gutterBottom
                    align={"center"}
                  >
                    Precio: {eachProduct.price_instructions.unit_price} €
                  </Typography>
                </CardContent>
              </Box>
            </Grid>
          );
        })}
      </Paper>
    </Container>
  );
}

export default ProductList;
