import React, { useRef, useContext } from 'react'
import { productContxt } from './ProductContext';

export default function Table() {

   const productCtx = useContext(productContxt);
   const idinput = useRef();
   const nameinput = useRef();

   const add = () => {
      idinput.current.value &&
         nameinput.current.value &&
         productCtx.setArr([...productCtx.arr, { id: idinput.current.value, name: nameinput.current.value, src: "" }])
   }

   const change = () => {
      let arr = [...productCtx.arr];
      arr.find((val) => val.id == idinput.current.value).name = nameinput.current.value;
      productCtx.setArr(arr);
   }
   
   return (
      <>
         {productCtx.arr.length
            ?
            <table className="table table-striped table-hover">
               <tr>
                  <th>קוד</th>
                  <th>שם</th>
               </tr>
               {productCtx.arr.map((item, index) =>
                  <tr key={index}>
                     <td>{item.id}</td>
                     <td>{item.name}</td>
                  </tr>)}
               <tr>
                  <td>
                     <input type="text" placeholder="id" ref={idinput}></input>
                  </td>
                  <td>
                     <input type="text" placeholder="name" ref={nameinput} ></input>
                  </td>
               </tr>
               <button onClick={() => add()}> הוסף</button>
               <button onClick={() => change()}> שנה</button>
            </table>
            :
            <div class="spinner-border text-primary" role="status">
               <span class="sr-only">Loading...</span>
            </div>
         }
      </>
   )
}