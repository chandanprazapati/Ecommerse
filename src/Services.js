import React from 'react';
import ReactDOM from 'react-dom/client';
import pdata from './Pdata';
import { Routes, Route, Link } from "react-router-dom";

export default function Services() {
    return (
        <>

            {pdata.map((d) => (
                <article>
                    <img src={d.image} alt='' />
                    <br />
                    <br />
                    <h3><Link to={`product/${d.id}`}> {d.title} </Link> </h3>
                    <br />
                    <p>Price:{d.price}</p>
                </article>
            ))}

        </>

    )
}