import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import { useDispatch, useSelector } from 'react-redux'
import GreenButtonCustom from './greenButtonCustom'
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { CLOSE_MODAL, DELETE_SECTOR } from '../store/actions'

const DeleteConfirmationForm = ({sectorId}) => {
    
    const dispatch = useDispatch();
    
    const deleteSector = () => {
        dispatch(DELETE_SECTOR(sectorId))
    }
    
    const cancelDelete = () => {
        dispatch(CLOSE_MODAL(!true))
    }
    
    return (
        <div>
        <p>Please confirm if you wish to delete</p>
        <GreenButtonCustom
        onClick={() => deleteSector()}
        fullWidth
        style={{marginBottom: '10px'}}
        >
        <CheckIcon style={{ color: '#fff' }}/>
        </GreenButtonCustom>
        <Button
        onClick={() => cancelDelete()}
        fullWidth
        variant="contained"
        color="secondary"
        >
        <CloseIcon/>
        </Button>
        </div>  
        )
    }
    
    export default DeleteConfirmationForm