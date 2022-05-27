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

function AddCategoryForm(props) {
    //CONSTANTS & HOOKS:
  const [title, setTitle] = useState("");  
  const navigate = useNavigate();
  

  //!INTERNAL FUNCTIONS:

  //HANDLE FUNCTIONS:
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  //RENDER VIEW:
  return (
    <Container component="main" maxWidth="xs">
        <Paper
          variant={"outlined"}
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Box sx={{ mt: 1 }}>
            <div>
              <Box
                component="form"
                //onSubmit={handleSubmit}
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
                    style: { color: "#26b879" },
                  }}
                  name="title"
                  onChange={(e) => setTitle(e.target.value)}
                  color={"secondary"}
                  value={title}
                  sx={{ mb: 1 }}
                />

                <button>ADD</button>
              </Box>
            </div>
          </Box>
        </Paper>
      </Container>
  )
}

export default AddCategoryForm