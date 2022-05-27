//!IMPORTS:
import { Paper, Container } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Collapse from "@mui/material/Collapse";
import SyncLoader from "react-spinners/SyncLoader";
import AddForm from "../components/AddForm";
import axios from "axios";

//!MAIN FUNCTION:
function CategoriesList() {
  //CONSTANTS & HOOKS:
  const [allCategories, setAllCategories] = useState(null);
  const [extraCategories, setExtraCategories] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getAllCategories();
  }, []);

  //!INTERNAL FUNCTIONS:
  //FUNCTION TO GET CATEGORIES LIST:
  const getAllCategories = async (category) => {
    try {
      const response = await axios.get(
        "https://tienda.mercadona.es/api/v1_1/categories/92"
      );
      console.log(response.data.categories);
      setAllCategories(response.data.categories);
    } catch (err) {
      navigate("/error");
    }
  };

   const addCategory = (category) => {
     setExtraCategories([...extraCategories, category]);
   };

  //LOADING SYSTEM:
  if (!allCategories) {
    return (
      <div className="loadingSpinner">
        <h2>...Loading...</h2>
        <br />
        <SyncLoader color="#26b879" size="1rem" />
      </div>
    );
  }

  //RENDER VIEW:
  return <div>
      <Container component={"main"} maxWidth={"sm"} sx={{ my: 5 }}>
    <div>
      <button onClick={() => setShowForm(!showForm)} > {showForm? "HIDE FORM" : "ADD CATEGORY"}</button>
      <Collapse in={showForm} > <AddForm addCategory={addCategory} /> </Collapse>                
    </div>         
    
    <Paper
        variant={"outlined"}
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
      {allCategories.map((eachCategory, index)=>{
        return(
          <div key={eachCategory.id}>
          <Link to={`/categories-list/${eachCategory.id}/product-list`} >{eachCategory.name} </Link>
          </div>
          
        )
      })}        
      </Paper>
    </Container>
  </div>;
}

export default CategoriesList;
