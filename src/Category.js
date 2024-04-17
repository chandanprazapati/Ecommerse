import React from 'react'
import Catgdata from './Catgdata'
import { Routes, Route, Link, useParams } from "react-router-dom";

export default function Category() {
  return (
    <>
      <div>Category</div>
      <ui class='xx'>
        {Catgdata.map((a) => (
          <li><Link to={`/catgproduct/${a.id}`}>{a.catgName}</Link></li>
        ))}
      </ui>
    </>
  )
}
