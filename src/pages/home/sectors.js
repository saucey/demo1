import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API, graphqlOperation } from 'aws-amplify';
import Layout from '../../layouts/navbar'
import getlistSectors from '../../api/sectors' 

const Sectors = () => {

  const dispatch = useDispatch()

  const listSectors = useSelector((state) => state);

  // console.log(listSectors, 'listSectors');

  useEffect(() => {
    // const data2 = getlistSectors();
    // data2.then(res => {
    //   GET_SECTORS(res.data.listSectors)
    // })
  })

  const GET_SECTORS = (sectors) => {
    dispatch({
      type: 'LIST_SECTORS',
      listSectors: sectors
    })
  }

  const ping = () => {
    dispatch({ type: 'PING' });
  }
  
  return (
    <div>
      <h1>
        Sectors Pages
         <button onClick={ping}>DISPATCH THE PING</button>
      </h1>
    </div>
  )


}

export default Layout(Sectors)
