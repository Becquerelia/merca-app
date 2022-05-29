//!IMPORTS:
import { Typography, Collapse } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { apiProducts } from "../utils/apiProducts";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SyncLoader from "react-spinners/SyncLoader";
import AddForm from "../components/AddForm";
import Search from "../components/Search";
import ProductDetails from "../components/ProductDetails";
import axios from "axios";

//!MAIN FUNCTION:
function ProductList() {

  //CONSTANTS & HOOKS:
  const [allProducts, setAllProducts] = useState(null);
  const [allProductsToRender, setAllProductsToRender] = useState(null);
  const [productTitle, setProductTitle] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getAllProducts();
  }, []);

  //!INTERNAL FUNCTIONS:
  //? FUNCTION TO GET PRODUCT LIST BY API CALL (API CORS PREVENTS ACCESS, BUT FUNCTION WORKS CORRECTLY):
  /* const getAllProducts = async () => {
    try {
      const response = await axios.get(
        "https://tienda.mercadona.es/api/v1_1/categories/92"
      );
      console.log(response.data.categories);
      const data = response.data.categories;
      data.forEach((eachProduct) => {
        eachProduct.id == id && setAllProducts(eachProduct.products);
        eachProduct.id == id && setAllProductsToRender(eachProduct.products);
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
      eachProduct.id == id && setAllProductsToRender(eachProduct.products);
      eachProduct.id == id && setProductTitle(eachProduct.name);
    });
  };

  //FUNCTION TO ADD PRODUCT:
  const addProduct = (product) => {
    setAllProducts([product, ...allProducts]);
    setAllProductsToRender([product, ...allProducts]);
    setShowForm(!showForm);
  };

  //FUNCTION TO SEARCH A PRODUCT:
  const searchProduct = (searchQuery) => {
    const filteredProducts = allProducts.filter((eachProduct) => {
      return eachProduct.display_name
        .toUpperCase()
        .includes(searchQuery.toUpperCase());
    });
    setAllProductsToRender(filteredProducts);
  };

  //FUNCTION TO UPDATE A PRODUCT:
  const updateProduct = (product) => {
    const updatedList = allProducts.map((eachProduct) => {
      if (eachProduct.thumbnail === product.thumbnail) {
        eachProduct.display_name = product.display_name;
        eachProduct.packaging = product.packaging;
      }
      return eachProduct;
    });
    setAllProducts(updatedList);
    setAllProductsToRender(updatedList);
  };

  //FUNCTION TO DELETE A PRODUCT:
  const deleteProduct = (productName) => {
    const newList = JSON.parse(JSON.stringify(allProducts));
    const filteredArr = newList.filter(
      (eachProduct) => eachProduct.display_name !== productName
    );
    setAllProducts(filteredArr);
    setAllProductsToRender(filteredArr);
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
      <div >
      <button style={{marginTop: 20, padding: 1}} onClick={() => navigate(-1)}> <ArrowBackIcon/> </button>
        <Typography
          sx={{ pt: 4, pb: 4, fontSize: 40 }}
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
          {showForm ? <b>OCULTAR</b> : <b>AÑADIR PRODUCTO</b>}
        </button>
        <Collapse in={showForm}>
          <AddForm addProduct={addProduct} />
        </Collapse>
        <Search searchProduct={searchProduct} />
      </div>

      <div className="cardGrid">
        {allProductsToRender.map((eachProduct, index) => {
          return (
            <ProductDetails
              key={eachProduct.display_name + index}
              eachProduct={eachProduct}
              updateProduct={updateProduct}
              deleteProduct={deleteProduct}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;