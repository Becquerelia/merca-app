//!IMPORTS:
import {
  Box,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

//!MAIN FUNCTION:
function ProductDetails(props) {
  //CONSTANTS & HOOKS:
  const { eachProduct } = props;
  const [product, setProduct] = useState(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  //!INTERNAL FUNCTIONS:
  //FUNCTION TO OPEN A MODAL WITH AN IMAGE:
  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  //FUNCTION TO CLOSE MODAL AND SET STATE:
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Card
        variant={"outlined"}
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
              onClick={handleOpen}
              product={product}
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
    </div>
  );
}

export default ProductDetails;
