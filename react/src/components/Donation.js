import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { productContxt } from './ProductContext';
import { InputAdornment, TextField } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { useForm } from "react-hook-form";
import Login from './Login';

export default function Donation() {

    const navigat = useNavigate();
    const productCtx = useContext(productContxt);
    const [donationDetails, setDonationDetails] = useState({ donate: JSON.parse(localStorage.getItem('user')), sumDonation: null });
    const { register, handleSubmit, formState: { errors } } = useForm();

    function onSubmit() {
        console.log("befor enter a donation", productCtx.donationArr)
        console.log("details", donationDetails)
        productCtx.setDonationArr([...productCtx.donationArr, donationDetails])
        console.log("after", productCtx.donationArr)
        navigat('/allProducts');
    }

    return (
        <>
            {localStorage.getItem('user') ?
                <form onSubmit={handleSubmit(onSubmit)} style={{ width: "50%" }} id='register'>
                    <TextField disabled
                        id="input-with-icon-textfield"
                        className='inputs'
                        label="UserName"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle aria-label="toggle password visibility"></AccountCircle>
                                </InputAdornment>
                            ),
                        }}
                        variant="standard"
                        color={errors?.userName?.type === "required" ? 'error' : 'secondary'}
                        defaultValue={JSON.parse(localStorage.getItem('user')).username}
                    /><br />
                    <TextField disabled
                        id="input-with-icon-textfield"
                        className='inputs'
                        label="Address"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PlaceIcon />
                                </InputAdornment>
                            ),
                        }}
                        variant="standard"
                        color={errors?.address?.type === "required" ? 'error' : 'secondary'}
                        defaultValue={JSON.parse(localStorage.getItem('user')).address}
                    /><br />
                    <TextField disabled
                        id="input-with-icon-textfield"
                        className='inputs'
                        label="email"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailIcon />
                                </InputAdornment>
                            ),
                        }}
                        variant="standard"
                        color={errors?.address?.type === "required" ? 'error' : 'secondary'}
                        defaultValue={JSON.parse(localStorage.getItem('user')).email}
                    /><br />
                    <TextField
                        id="input-with-icon-textfield"
                        className='inputs'
                        label="Sum"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MonetizationOnIcon />
                                </InputAdornment>
                            ),
                        }}
                        variant="standard"
                        color={errors?.userName?.type === "required" ? 'error' : 'secondary'}
                        defaultValue={"כמה אני תורם להציל חיים"}
                        {...register("userName", { required: true })}
                        onChange={(e) => setDonationDetails({ ...donationDetails, sumDonation: e.target.value })}
                    /><br />
                    {errors?.sum?.type === "required" && <p className='requierds'>שדה זה הינו שדה חובה</p>}
                    <input type="submit" value='submit' variant="outlined" color='secondary' /><br />
                </form>
                :
                <Login />
            }
        </>
    );
}