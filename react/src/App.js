import { React, useContext } from 'react'
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import MyRouter from './components/MyRouter';
import  ProductContxt  from './components/ProductContext';

function App() {

  const productCtx = useContext(ProductContxt);

  return (
    <>
        <BrowserRouter>
          <header>
            <img id="img" src="./assets/logo.jpg" />
            <nav>
              <ul>
                <li><Link to="login">התחברות</Link></li>
                <li><Link to="register">הרשמה</Link></li>
                <li><Link to="allProducts">כל המוצרים </Link> </li>
                <li onClick={() => { localStorage.removeItem('user'); productCtx.setIsManager(false) }}><Link to='login'> ליציאה </Link> </li>
                {productCtx.isManager&&<li><Link to="allDonations"> כל התרומות  </Link></li>}
                {productCtx.isManager&&<li><Link to="table">הוספת ועריכת מוצר</Link></li>}
                <li><Link to="donation"><img id="donation" src="./assets/button.jpg" /></Link> </li>
              </ul>
            </nav>
          </header>
          <img id="img" src="./assets/full.jpg" />
          
          <MyRouter />
        </BrowserRouter>
    </>
  );
}
export default App;