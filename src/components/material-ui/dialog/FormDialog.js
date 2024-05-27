import React, { useEffect, useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Box, Input } from '@mui/material';

import CustomTextField from "../../forms/theme-elements/CustomTextField";
import { useDispatch } from 'react-redux';
import { saveClaim } from 'src/store/apps/eCommerce/ClaimSlice';

const FormDialog = ({...props}) => {
    const [description,setDescription] = useState("")
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [fileName, setFileName] = useState('');
    const handleFileChange = (event) => {
        console.log(event.target.files[0])
        const file = event.target.files[0];
        setFileName(file);
      };
    const disptach = useDispatch()
    const formData = new FormData();
    formData.append('file', fileName);
    formData.append('description', description);
    formData.append('purchaseId', props.purchase.id);

    useEffect(() => {
         
    });

   
    return (
        <>
            <Button variant="contained" color="primary" fullWidth onClick={handleClickOpen}>
                Reclaim
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Claim Now</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        You are going to make a claim about this product {props && props.purchase.product.name + " " + props.purchase.product.id}
                    </DialogContentText>
                    <Box mt={2}>
                        <CustomTextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="description"
                            type="text"
                            fullWidth
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <hr />
                    </Box>
                        <Box mt={2}>
                               
                        <Button variant="contained" color="primary" component="label">
                    Upload
                    <input hidden accept="image/*"  type="file" onChange={handleFileChange}  />
                  </Button>
                     upload the necessacy images 
                  <hr />
                        </Box>
                </DialogContent>
                <DialogActions>
                    <Button color="error" onClick={handleClose}>Cancel</Button>
                    <Button onClick={
                       ()=>{
                        disptach(saveClaim(formData)).then(
                            (res)=>{
                               handleClose()
                            }
                        )
                       }
                    }>Claim now</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default FormDialog;
