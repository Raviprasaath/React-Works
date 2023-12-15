import React from 'react'
import { Outlet } from 'react-router'

const CareerLayouts = () => {
  return (
    <>
        <div>
            <h2>Current Jobs</h2>    

        </div>
        <Outlet />
    </>
  )
}

export default CareerLayouts
