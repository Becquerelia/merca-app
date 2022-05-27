//!IMPORTS:
import { Paper, Container } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Grid, Collapse } from "@mui/material/";
import SyncLoader from "react-spinners/SyncLoader";
import AddForm from "../components/AddForm";
import axios from "axios";

//!MAIN FUNCTION:

function ProductList() {
    //CONSTANTS & HOOKS:
  const [allProducts, setAllProducts] = useState(null);  
  const [showForm, setShowForm] = useState(false);
  const {id} = useParams()
  const navigate = useNavigate();

  useEffect(() => {
    getAllProducts();
    console.log("A ver:", allProducts, id)
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
      data.forEach((eachProduct)=>{
          //console.log(eachProduct, eachProduct.id, id)
          eachProduct.id == id && setAllProducts(eachProduct.products);
      })
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
    <Container component={"main"} maxWidth={"sm"} sx={{ my: 5 }}>
        <div>
          <button onClick={() => setShowForm(!showForm)}>           
            {showForm ? <b>HIDE FORM</b>  : <b>ADD PRODUCT</b> }
          </button>
          <Collapse in={showForm}>            
            <AddForm />
          </Collapse>
        </div>

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
                  {eachProduct.display_name}
                </Box>
              </Grid>
            );
          })}
        </Paper>
      </Container>
  )
}

export default ProductList