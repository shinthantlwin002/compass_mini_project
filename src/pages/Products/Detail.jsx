import React from 'react'
import { useNavigate, useParams } from 'react-router'
import './Detail.css'
import { useState } from 'react';
import { useEffect } from 'react';
import {BsHeart} from 'react-icons/bs'

const Detail = () => {
  const {id} = useParams();
  const useNav = useNavigate();
  const handler = () => {
    useNav('/products')
  }

  const[product,setProduct] = useState({});

  useEffect(() => {
    const controller =new AbortController();
    const signal = controller.signal;
    const fetchData = async()=>{
      const api = await fetch(`http://localhost:3002/products/${id}`,{signal});
      const data = await api.json();
      setProduct(data);
      // console.log(data)
    }
    fetchData();

    () => {
      controller.abort();
    }
  },[id])


  return (
    <div>
      <div className="row px-5 py-2">
        <div className="col">
        <img src={product.image} alt="" />
        </div>
        <div className="col mt-5">
          <h1>{product.title}</h1>
          <h4 className='price'>${product.price}</h4>
          <p className='mt-3'>description:
            <br />
            {product.description}
          </p>
         

          <div className=' mt-3'>
          <button className='detailBtn1 me-3'>Buy Now</button>
          <button onClick={handler} className='detailBtn2'>Back to Catalog</button>
          </div>

          <p className='mt-5'>Save this product for later</p>
          <button className='detailBtn3'><BsHeart /> Wish List</button>
        </div>
      </div>
      
    </div>
  )
}

export default Detail
