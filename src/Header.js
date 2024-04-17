import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Product from './Product';
import { Routes, Route, Link } from "react-router-dom";
import Category from './Category';
import Catgproduct from './Catgproduct';
import imgdata from './Imgdata';

export default function Header() {
    return (
        <>
            {imgdata.map((i) => (
                <header>
                    <img src={i.image} />
                    <ul>
                        <li><i class="bi bi-meta"></i></li>
                        <li><i class="bi bi-instagram"></i></li>
                        <li><i class="bi bi-google"></i></li>
                    </ul>
                </header>
            ))}
            <nav className="link-nav">
                <ul>
                    <li><Link to='/'> Home </Link></li>
                    <li><Link to='/about'> About Us</Link></li>
                    <li><Link to='/contact'> Contact Us</Link></li>
                    <li><Link to='/category'> Category</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/category" element={<Category />} />
                <Route path="/catgproduct/:cid" element={<Catgproduct />} />
            </Routes>

        </>
    )

}