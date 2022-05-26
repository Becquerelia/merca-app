//!IMPORTS:
import { Paper, Container } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Collapse from '@mui/material/Collapse';
import SyncLoader from "react-spinners/SyncLoader";
import AddForm from "../components/AddForm";
import Search from '../components/Search';
import axios from "axios";

const exampleProducts = [
  {name: "Chocolate con leche", price: 1, weight: "250g", format: "Tableta", image:"url de prueba"},
  {name: "Chocolate blanco", price: 0.80, weight: "200g", format: "Tableta", image:"url de prueba"}
]

//!MAIN FUNCTION:
function ProductList() {
  //CONSTANTS & HOOKS:
  //const [allProducts, setAllProducts] = useState(null);
  const [extraProducts, setExtraProducts] = useState(exampleProducts);
  const [productsToRender, setProductsToRender] = useState(exampleProducts);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  // useEffect(()=>{
  //   getAllProducts()
  // }, [])
  
  //!INTERNAL FUNCTIONS:
    //FUNCTION TO GET PRODUCT LIST:
    // const getAllProducts = async (product) => {    
    //   try {        
    //     const response = await axios.get("https://tienda.mercadona.es/api/v1_1/categories/92");
    //     console.log(response.data)
    //     setAllProducts(response.data)
    //   }
    //   catch(err){
    //     navigate("/error")
    //   }
    // }

    const addProduct = (product) => {
      setExtraProducts([...extraProducts, product])
      setProductsToRender([...extraProducts, product]) 
    }

  //FUNCTION TO SEARCH PRODUCT:
  const searchProduct = (searchProduct) => {
    const filteredProduct = extraProducts.filter((eachProduct)=>{
      return eachProduct.name.includes(searchProduct)
    })
    setProductsToRender(filteredProduct)
  }  

  //LOADING SYSTEM:
  if(!extraProducts){ 
    return (
      <div className="loadingSpinner" >
        <h2>...Loading...</h2>
        <br />
        <SyncLoader color="#26b879" size="1rem" />
      </div>
    )
  }

  //RENDER VIEW:
  return (
    <Container component={"main"} maxWidth={"sm"} sx={{ my: 5 }}>
      <div>
        <button onClick={() => setShowForm(!showForm)} > {showForm? "HIDE FORM" : "ADD PRODUCT"}</button>
        <Collapse in={showForm} > <AddForm addProduct={addProduct} /> </Collapse>                
      </div>
      <div>
        
         <Search searchProduct={searchProduct}/>                
      </div>      

      <Paper
          variant={"outlined"}
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
        {productsToRender.map((eachProduct, index)=>{
          return(
            eachProduct.name
          )
        })}        
        </Paper>
     </Container>
  )
}

export default ProductList