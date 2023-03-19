import { useContext } from 'react'
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom"
import { productContxt } from './ProductContext';
import { useNavigate } from 'react-router-dom';


import { React } from 'react'
import { InputAdornment, TextField } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';

import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function () {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const productCtx = useContext(productContxt);
    const params = useParams();
    const myProduct = productCtx.arr.find(obj => obj.id === params.id);
    const navigat = useNavigate();
    
    function onSubmit() {
     navigat('/allProducts')
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: "50%" }} id='register'>
                <TextField
                    id="input-with-icon-textfield"
                    className='inputs'
                    label="ProductName"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LocalGroceryStoreIcon aria-label="toggle password visibility"></LocalGroceryStoreIcon>
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                    color={errors?.ProductName?.type === "required" ? 'error' : 'secondary'}
                    defaultValue={myProduct.name}
                    {...register("childId", { required: true})}
                /><br />
                {errors?.childId?.type === "required" && <p className='requierds'>שדה זה הינו שדה חובה</p>}
                <TextField
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
                    {...register("userName", { required: true })}
                /><br />
                {errors?.userName?.type === "required" && <p className='requierds'>שדה זה הינו שדה חובה</p>}
                <TextField
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
                    {...register("address", { required: true })}
                /><br />
                {errors?.address?.type === "required" && <p className='requierds'>שדה זה הינו שדה חובה</p>}
                <TextField
                    id="input-with-icon-textfield"
                    className='inputs'
                    label="Email"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <EmailIcon />
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                    color={errors?.email?.type === "required" ? 'error' : 'secondary'}
                    {...register("email", { required: true })}
                /><br />
                {errors?.email?.type === "required" && <p className='requierds'>שדה זה הינו שדה חובה</p>}
                <TextField
                    id="input-with-icon-textfield"
                    className='inputs'
                    label="Num cards for order"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AddCircleIcon aria-label="toggle password visibility"></AddCircleIcon>
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                    color={errors?.numOfProducts?.type === "required" ? 'error' : 'secondary'}
                    defaultValue={1}
                     {...register("numOfProducts", { required: true})}
                /><br />
                {errors?.numOfProducts?.type === "required" && <p className='requierds'>שדה זה הינו שדה חובה</p>}
                <input type="submit" value='submit' variant="outlined" color='secondary' /><br />
            </form>
        </>
    )
}