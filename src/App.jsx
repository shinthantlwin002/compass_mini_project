import React from 'react'
import { Route, Routes } from 'react-router'
import MasterLayout from './layouts/MasterLayout';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import { Outlet } from 'react-router';
import Detail from './pages/Products/Detail';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MasterLayout />}>
          <Route element={<div>
            <p style={{backgroundColor:"#144F61",color:"wheat",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",margin:0}}>20% discount | Limited time only</p>
            <Outlet />
          </div>}> 
          <Route index element={<Home />}/>
            <Route path='/products' element={<Products />}/>
            <Route path='/products/:id' element={<Detail />}/>
          </Route>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
