import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import {IoIosArrowDown} from 'react-icons/io'
import { Link } from 'react-router-dom';


const Home = () => {
  const useNav = useNavigate();
  const handler = () => {
    useNav('/products');
  }

  const[products,setProducts] = useState([]);

  useEffect(() => {
    fetchData()
  },[])

  const fetchData = async()=>{
    const api = await fetch(`http://localhost:3002/products?_start=1&_end=5`);
    const data =await api.json()
    // console.log(data)
    setProducts(data)
    
  }
  return (
    <>
        <img src="https://static.zara.net/photos///2023/V/0/1/p/5802/037/670/17/w/1366/5802037670_9_1_1.jpg?ts=1678438532263" className='img position-relative'/>
        <div className='position-absolute imgText text-center'>
          <h2 className='fw-bold'>Unleash Your Inner Style Icon with the Latest Fashion Trends!</h2>
          <button onClick={handler} className='homeBtn'>Shop Now</button>
        </div>
        <div>
          <h4 className='text-center my-5 fw-semibold'>Women's Wear</h4>
          <div className="d-flex flex-wrap gap-5 mb-3">
            {products.map((product) => (
              <div key={product.id}>
                <img src={product.image}  className='productImage'/>
              </div>
            ))}
          </div>
          <Link to={'/products'}>
          <div className='text-primary d-flex flex-column align-items-center my-3'>
            <span className='fs-5'>See More</span>
            <IoIosArrowDown />
          </div>
          </Link>
        </div>
    </>
  )
}

export default Home
