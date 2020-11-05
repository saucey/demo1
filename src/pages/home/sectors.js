import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API, graphqlOperation } from 'aws-amplify';
import Layout from '../../layouts/navbar'
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';
import CreateIcon from '@material-ui/icons/Create';

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    marginBottom: '20px'
  },
}));

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
  {
    field: 'action_edit',
    headerName: 'Edit',
    sortable: false,
    renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
        >
        <CreateIcon />
      </Button>
    ),
    },
  {
    field: 'action_delete',
    headerName: 'Delete',
    sortable: false,
    renderCell: (params) => (
        <Button
          variant="contained"
          color="secondary"
          size="small"
          style={{ marginLeft: 16 }}
        >
        <DeleteForeverOutlinedIcon />
      </Button>
    ),
  },
  ];

  const classes = useStyles();

  return (
    <div style={{ height: 400, width: '100%' }}>
      <ColorButton  variant="contained" color="primary"  className={classes.margin}>
        <AddBoxIcon style={{ color: '#fff' }}/>
      </ColorButton>
      <DataGrid rows={listSectors} columns={columns} pageSize={5} checkboxSelection />
    </div>
    )
  }
  
  export default Layout(Sectors)
  
  