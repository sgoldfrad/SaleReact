import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Table from './Table'
import AllProducts from './AllProducts'
import ItemDetails from './ItemDetails'
import Order from './Order';
import Register from './Register';
import Donation from './Donation';
import AllDonations from './AllDonations'
import Login from './Login'

export default function MyRouter() {

    return (
        <>
            <Routes>
                <Route path="/" element={<AllProducts />} />
                <Route path="login" element={<Login/>} />
                <Route path="table" element={<Table />} />
                <Route path="/allProducts" element={<AllProducts />} />
                <Route path="/itemDetails/:id" element={<ItemDetails />} />
                <Route path="/order/:id" element={<Order />} />
                <Route path="register" element={<Register/>}/>
                <Route path="/register/:name" element={<Register />} />
                <Route path="donation" element={<Donation />} />
                <Route path="allDonations" element={<AllDonations />} />
            </Routes>
        </>
    )
}