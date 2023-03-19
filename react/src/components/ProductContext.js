import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const productContxt = createContext();

export default function ProductContext(props) {

    const [arr, setArr] = useState([]);
    const [donationArr, setDonationArr] = useState([]);
    const [isManager,setIsManager]=useState(false)

    useEffect(() => {
        axios.get('./Products.json')
            .then(product => {
                setArr(product.data)
            })
            .catch(eror => console.log("eror"))
    }, [])

    return (
        <productContxt.Provider value={{ arr, setArr, donationArr, setDonationArr }}>
            {props.children}
        </productContxt.Provider>
    );
}