import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'
import AppBreadCrumbs from '../Components/AppBreadCrumbs'

const RootLayouts = () => {
  return (
    <div>
      <Navbar />
      <AppBreadCrumbs />
      <Outlet />
    </div>
  )
}

export default RootLayouts
