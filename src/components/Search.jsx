//!IMPORTS:
import { useState } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search';

//!MAIN FUNCTION:
function Search(props) {
  //CONSTANTS & HOOKS:
  const { searchProduct } = props;
  const [search, setSearch] = useState("");

  //HANDLE FUNCTION FOR SEARCH BAR:
  const handleChange = (e) => {
    setSearch(e.target.value);
    searchProduct(e.target.value);
  };

  //RENDER VIEW:
  return (
    <div className="container">
      <TextField
        label={<SearchIcon/>}
        margin="dense"
        color="success"
        type="text"
        name="search"
        variant={"filled"}
        sx={{ mb: 2 }}
        InputLabelProps={{
          style: { color: "#bdbdbd"},
        }}
        InputProps={{
          style: { color: "#229e6b"},
        }}
        value={search}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
