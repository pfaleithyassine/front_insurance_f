import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Box, FormControl, InputLabel,  MenuItem, IconButton } from '@mui/material';
import {  updatestatus } from 'src/store/apps/eCommerce/ClaimSlice';

import CustomSelect from "../../forms/theme-elements/CustomSelect";
import ButtonGroup from '@mui/material/ButtonGroup';
import { useDispatch } from 'react-redux';
const MaxWidthDialog = (props) => {
    console.log(props.ticket.id)
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');
   
    const dispatch = useDispatch()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleMaxWidthChange = (event) => {
        setMaxWidth(
            // @ts-expect-error autofill of arbitrary value is not handled.
            event.target.value,
        );
    };

    const handleFullWidthChange = (event) => {
        setFullWidth(event.target.checked);
    };
    const [status,setStatus] = useState("")

    return (
        <>
            <Button variant="contained" color="primary" fullWidth onClick={handleClickOpen}>
                Change State
            </Button>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>State Manager</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Now you can choose the new status of the claim ♥
                    </DialogContentText>
                    <Box>
                    <IconButton    >
                    <ButtonGroup variant="outlined" aria-label="Basic button group">
                      <Button onClick={()=>{setStatus("onRepair")}}>Change State to in repair</Button>
                      <Button onClick={()=>{setStatus("REMBOURSED")}}>Change State to reimboursed</Button>
                      <Button onClick={()=>{setStatus("rejected")}}>Change State to declined</Button>
                      </ButtonGroup>

                    </IconButton>
                    </Box>
                    <Box visibility={status === "onRepair" ? "visible" : "hidden"}
                        noValidate
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            m: 'auto',
                            width: 'fit-content',
                        }}
                    >
                        <FormControl  sx={{ mt: 2, minWidth: 120 }}>
                            <InputLabel htmlFor="Choose Repair">Choose Repair</InputLabel>
                            <CustomSelect
                                autoFocus
                                value={maxWidth}
                                onChange={handleMaxWidthChange}
                                label="Choose repair"
                                inputProps={{
                                    name: 'max-width',
                                    id: 'max-width',
                                }}
                            >
                                <MenuItem value={false}>Karim</MenuItem>
                                <MenuItem value="xs">Leith Menaa</MenuItem>
                                <MenuItem value="sm">Yassine Bousseha</MenuItem>
                                <MenuItem value="md">Mouhamed Salah</MenuItem>
                                <MenuItem value="lg">Amine ben ali</MenuItem>
                                <MenuItem value="xl">ala</MenuItem>
                            </CustomSelect>
                        </FormControl>
                      
                    </Box>
                </DialogContent>
                <DialogActions>
                <Button color="primary" variant="contained" onClick={
                  ()=>{
                    const body = {id:props.ticket.id , status}
                    dispatch(updatestatus(body )).then(
                      (res)=>{
                        console.log(res)
                        handleClose()
                      }
                    )
                  }
                }>Change current state</Button>

                    <Button color="error" variant="contained" onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default MaxWidthDialog;
