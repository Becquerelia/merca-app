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
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

//!MAIN FUNCTION:
function ProductDetails(props) {
  //CONSTANTS & HOOKS:
  const { eachProduct, updateProduct, deleteProduct } = props;
  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);  
  const [openDelete, setOpenDelete] = useState(false);
  const navigate = useNavigate();

  //!INTERNAL FUNCTIONS:
  //FUNCTION TO OPEN A MODAL WITH AN IMAGE:
  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  //FUNCTION TO OPEN A MODAL TO UPDATE A PRODUCT:
  const handleOpenUpdate = (e) => {
    e.preventDefault();
    setOpenUpdate(true);
  };

  //FUNCTION TO OPEN A MODAL TO DELETE A PRODUCT:
  const handleOpenDelete = (e) => {
    e.preventDefault();
    setOpenDelete(true);
  };
  
  //FUNCTION TO CLOSE MODAL AND UPDATE A PRODUCT:
  const handleUpdate = (e) => {
    e.preventDefault();
    updateProduct({eachProduct});
    setOpenUpdate(false);
  };

  //FUNCTION TO CLOSE MODAL AND DELETE A PRODUCT:
  const handleDelete = (e) => {
    e.preventDefault();
    deleteProduct(eachProduct.display_name);
    setOpenDelete(false);
  };

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
            />
            <Dialog
              open={open}
              onClose={() => setOpen(false)}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <Box sx={{ backgroundColor: "background.default" }}>
                <DialogTitle id="alert-dialog-title">
                  <b>{eachProduct.display_name}</b>
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
                {eachProduct.priceByUnit
                  ? eachProduct.priceByUnit
                  : eachProduct.price_instructions.unit_price}{" "}
                €
              </Typography>
              <Divider />

              <Typography variant="body2" sx={{ mt: 1, mb: 3 }}>
                {eachProduct.packaging} -{" "}
                {eachProduct.weight
                  ? eachProduct.weight
                  : eachProduct.price_instructions.unit_size * 1000}{" "}
                g
              </Typography>
              <div>
                <button
                  style={{ padding: 5, marginLeft: 3, marginRight: 6 }}
                  onClick={handleOpenUpdate}
                >
                  <EditRoundedIcon />
                </button>
                <Dialog
                  open={openUpdate}
                  onClose={() => setOpenUpdate(false)}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <Box sx={{ backgroundColor: "background.default" }}>
                    <DialogTitle id="alert-dialog-title" color={"#229e6b"}>
                      Editar producto
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText
                        id="alert-dialog-description"
                        color={"black"}
                      >
                        Actualizar...
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <button onClick={() => setOpenUpdate(false)}>
                        CANCELAR
                      </button>
                      <button onClick={handleUpdate}>ACTUALIZAR</button>
                    </DialogActions>
                  </Box>
                </Dialog>
                <button
                  style={{ padding: 5, marginLeft: 6, marginRight: 3 }}
                  onClick={handleOpenDelete}
                >
                  <DeleteOutlineOutlinedIcon />
                </button>
                <Dialog
                  open={openDelete}
                  onClose={() => setOpenDelete(false)}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <Box sx={{ backgroundColor: "background.default" }}>
                    <DialogTitle id="alert-dialog-title" color={"#229e6b"}>
                      Eliminar producto
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText
                        id="alert-dialog-description"
                        color={"black"}
                      >
                        ¿Seguro que desea eliminar "
                        <i>{eachProduct.display_name}</i>" de la lista de
                        productos?
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <button onClick={() => setOpenDelete(false)}>
                        ¡MEJOR NO!
                      </button>
                      <button onClick={handleDelete}>SÍ, POR FAVOR</button>
                    </DialogActions>
                  </Box>
                </Dialog>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductDetails;
