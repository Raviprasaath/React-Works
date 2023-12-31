import React from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '@mui/material'

const AppBreadCrumbs = () => {
  const location = useLocation();
  let crumbLink = '';  
  let crumbPath = location.pathname.split('/').filter((item)=>item !== '')
    .map((crumb)=>{
        crumbLink += `/${crumb}`;
        return <Link to={crumbLink} key={crumb}>{crumb}</Link>
      })      
  console.log('crumbPath');
    return (
    <div>
        <Breadcrumbs aria-label="breadcrumb">
          {crumbPath}
        </Breadcrumbs>
    </div>
  )
}

export default AppBreadCrumbs
