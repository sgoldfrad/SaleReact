import { useContext } from 'react';
import { useParams } from "react-router-dom";
import { productContxt } from './ProductContext';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Button } from '@mui/material';

export default function Item() {

    const params = useParams();
    const productCtx = useContext(productContxt);
    const myProduct = productCtx.arr.find(obj => obj.id === params.id);
    const navigat = useNavigate();

    return (
        <div className='mydiv' >
            <div id='description'>
                <h1>{myProduct.name}</h1>
                <p> {myProduct.description}</p>
                <button onClick={() => { navigat(`/order/${myProduct.id}`) }} ></button>
                <Button variant="outlined" color='secondary' onClick={() => { navigat(`/order/${myProduct.id}`) }}>order me</Button>
            </div>
            <div class="imagesPruducts">
                <img src={myProduct.src} style={{ margin: "auto" }} />
            </div>
        </div>
    )
}