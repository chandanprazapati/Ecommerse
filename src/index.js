import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import Header from './Header';
import './Style.css';
import Footer from './Footer';
import Services from './Services';

var v = <h1>Hello, world! </h1>
ReactDOM.createRoot(document.getElementById('root')).render(

  <>
    <BrowserRouter>
      <Header />
      <Footer />
    </BrowserRouter>
  </>

)
