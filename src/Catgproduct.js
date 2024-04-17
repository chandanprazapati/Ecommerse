import React from 'react'
import { Routes, Route, Link, useParams } from "react-router-dom";
import pdata from './Pdata';

export default function Catgproduct() {
    let {cid}= useParams()
    let dp=pdata.filter((element)=>element.category==cid)
  return (
      <>
    <div>Catgproduct</div>
    {dp.map((d)=>(
        <article>
            <img src={d.image}/>
            <h3><Link to={`product/${d.id}`}> {d.title} </Link> </h3>
            <p>Price: {d.price}</p>
        </article>    
        ))}
        </>
  )
}
