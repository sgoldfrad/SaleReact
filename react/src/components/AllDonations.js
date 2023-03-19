import React, { useContext } from 'react'
import { productContxt } from './ProductContext';

export default function AllDonations() {

  const productCtx = useContext(productContxt);

  return (
    <>
          {productCtx.donationArr.length ?
            <h2>כל התרומות</h2> &&
            <table className="table table-striped table-hover" >
              <tr>
                <th>מספר תרומה</th>
                <th>שם התורם</th>
                <th>מייל</th>
                <th>סכום התרומה</th>
              </tr>
              {productCtx.donationArr.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.donate.username}</td>
                    <td>{item.donate.email}</td>
                    <td>{item.sumDonation}</td>
                  </tr>)
              })}
            </table>
            :
            <p>אין תרומות</p>
          }    
    </>
  )
} 