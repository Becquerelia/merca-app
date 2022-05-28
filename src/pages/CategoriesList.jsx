//!IMPORTS:
import { apiProducts } from "../utils/apiProducts";
import { Paper, Container } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Grid, Collapse } from "@mui/material/";
import SyncLoader from "react-spinners/SyncLoader";
import AddCategoryForm from "../components/AddCategoryForm";
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

  //FUNCTION TO GET CATEGORIES LIST BY API CALL:
  /* const getAllCategories = async () => {
     try {
       const response = await axios.get(
        "https://tienda.mercadona.es/api/v1_1/categories/92"
       );
       console.log(response.data.categories);
       setAllCategories(response.data.categories);
     } catch (err) {
       navigate("/error");
     }
  }; */

  //FUNCTION TO GET CATEGORIES FROM DATA FILE "apiProducts.js":
  const getAllCategories = () => {
    setAllCategories(apiProducts);
    console.log(apiProducts);
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
  return (
    <div>
      <Container component={"main"} maxWidth={"sm"} sx={{ my: 5 }}>
        <div>
          <button onClick={() => setShowForm(!showForm)}>
            {showForm ? <b>HIDE FORM</b> : <b>ADD CATEGORY</b>}
          </button>
          <Collapse in={showForm}>
            <AddCategoryForm addCategory={addCategory} />
          </Collapse>
        </div>

        <Paper
          variant={"outlined"}
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          {allCategories.map((eachCategory, index) => {
            return (
              <Grid item xs={12} sm={6} key={eachCategory.id}>
                <Box
                  sx={{
                    p: 2,
                    my: 2,
                    border: "1px solid",
                    borderColor: "#26b879",
                    borderRadius: "5px",
                    boxShadow: "#26b879",
                    backgroundColor: "#26b879",
                  }}
                >
                  <Link
                    to={`/categories-list/${eachCategory.id}/product-list`}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <b>{eachCategory.name.toUpperCase()}</b>
                  </Link>
                </Box>
              </Grid>
            );
          })}
        </Paper>
      </Container>
    </div>
  );
}

export default CategoriesList;
