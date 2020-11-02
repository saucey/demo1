import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API, graphqlOperation } from 'aws-amplify';
import Layout from '../../layouts/navbar'
import { DataGrid } from '@material-ui/data-grid';


const Sectors = () => {
  
  const dispatch = useDispatch()
  
  const getSectors = () => {
    dispatch({ type: 'GET_SECTORS' });
  }
  
  const listSectors = useSelector((state) => state.listSectors);
  
  useEffect(() => {
    getSectors();
  }, [])
  
  const columns = [
    { field: 'idsectors', headerName: 'Sector ID', width: 100 },
    { field: 'sector', headerName: 'Sector', width: 100 },
    { field: 'short', headerName: 'Short', width: 100 },
    {
      field: 'user',
      headerName: 'User',
      width: 100,
    },
    {
      field: 'active_from',
      headerName: 'Active From',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 150,
    },
  ];
  
  if (listSectors !== null) {
    listSectors.map((s, i)=> s['id'] = i+1);
  }

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={listSectors} columns={columns} pageSize={5} checkboxSelection />
    </div>
    )
  }
  
  export default Layout(Sectors)
  
  