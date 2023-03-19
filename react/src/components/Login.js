import React, { useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';
import { productContxt } from './ProductContext';


export default function Login() {
    const productCtx = useContext(productContxt);
    const navigat = useNavigate();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const change = () => {
        console.log("dsdfadadsf");
        axios.get(`http://localhost:4000/user/getUserByName/${userName}`)
            .then((u) => {
                if (u.data === '') {
                    navigat(`/register/${userName}`);
                }
                else if (u.data.password === password) {
                    if (u.data.username === "manager" && u.data.password === "1234")
                        productCtx.setIsManager(true)
                    localStorage.setItem('user', JSON.stringify(u.data));
                    navigat('/allProducts');
                }
                else
                    navigat(`/register/${userName}`);
            })
    }

    return (
        <div id="body">
            <div id="login">
                <TextField onChange={(e) => setUserName(e.target.value)}
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
                    color={(userName === null || userName === "") ? 'error' : 'secondary'}
                /><br />
                <TextField onChange={(e) => setPassword(e.target.value)}
                    id="standard-adornment-password"
                    className='inputs'
                    type={showPassword ? 'text' : 'password'}
                    label="Password"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                    color='secondary'
                />
            </div>
            <label htmlFor="remember-me" >
                <span>Remember me</span>
                <span>
                    <input id="remember-me" name="remember-me" type="checkbox" />
                </span>
            </label><br />
            <Button variant="outlined" color='secondary' onClick={() => { change(); }}>submit</Button><br />
        </div>
    )
}