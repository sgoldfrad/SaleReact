import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import '../MyStyle.css'
import { productContxt } from './ProductContext';
import Login from './Login';

export default function AllProducts() {

    const navigat = useNavigate();
    const productCtx = useContext(productContxt);

    return (
        <>
            {
                localStorage.getItem('user') ?
                    <div className="mydiv">
                        {productCtx.arr.map((item, index) =>
                            <div className="item" key={index} onClick={() => { navigat(`/itemDetails/${item.id}`) }}>
                                <h1>{item.name}</h1>
                                <img src={item.src} />
                                <p>{item.id}</p>
                            </div>)}
                    </div>
                    :
                    <Login />
            }
        </>
    )
}