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

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

const useStyles = makeStyles((theme) => ({
  margin: {
    marginBottom: '20px'
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const SectorsModal = () => {
  return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal>
  )
}

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
}))(Button);

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
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <ColorButton onClick={handleOpen} variant="contained" color="primary" className={classes.margin}>
        <AddBoxIcon style={{ color: '#fff' }}/>
      </ColorButton>
            <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal>
      <DataGrid rows={listSectors} columns={columns} pageSize={5} checkboxSelection />
    </div>
    )
  }
  
  export default Layout(Sectors)
  
  