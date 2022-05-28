//!IMPORTS:
import {
  Box,
  Modal,
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
import { apiProducts } from "../utils/apiProducts";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SyncLoader from "react-spinners/SyncLoader";
import AddForm from "../components/AddForm";
import axios from "axios";
import ProductDetails from "../components/ProductDetails";

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
  }, []);

  //!INTERNAL FUNCTIONS:

  //FUNCTION TO GET PRODUCT LIST BY API CALL:
  /* const getAllProducts = async () => {
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
  }; */

  //FUNCTION TO GET PRODUCT LIST FROM DATA FILE "apiProducts.js":
  const getAllProducts = () => {
    apiProducts.forEach((eachProduct) => {
      eachProduct.id == id && setAllProducts(eachProduct.products);
      eachProduct.id == id && setProductTitle(eachProduct.name);
    }
  )};
  
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
            <ProductDetails eachProduct={eachProduct} />            
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
