import React from 'react'
import { Outlet } from 'react-router';
import Navbar from './../components/Navbar';

const MasterLayout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default MasterLayout
