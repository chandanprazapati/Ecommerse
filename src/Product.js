import React from 'react'
import pdata from './Pdata'
import { useParams } from 'react-router'

export default function Product() {
  var { id } = useParams()
  var dp = pdata.find((element) => element.id == id)
  return (
    <>
      <div><h3>Dtails of product </h3> </div>
      <h3> {dp.title} </h3>
      <img src={dp.image} />
      <p> {dp.description} </p>
    </>
  )
}
