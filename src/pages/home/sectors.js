import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API, graphqlOperation } from 'aws-amplify';
import Layout from '../../layouts/navbar'
import getlistSectors from '../../api/sectors' 

const Sectors = () => {

  const dispatch = useDispatch()
  const listSectors = useSelector((state) => state);
  
  useEffect(() => {
    const data2 = getlistSectors();
    data2.then(res => {
      console.log(res, 'res')
      GET_SECTORS(res.data.listSectors)
    })
  })

  const GET_SECTORS = (sectors) => {
    dispatch({
      type: 'LIST_SECTORS',
      listSectors: sectors
    })
  }
  
  return (
    <div>
      <h1>
        Sectors Pages
      </h1>
    </div>
  )
}
export default Layout(Sectors)
