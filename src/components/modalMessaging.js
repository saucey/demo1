import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import Alert from '@material-ui/lab/Alert';


const ModalMessaging = () => {
    
    const modal_msg = useSelector((state) => state.modalMsg);
    
    return (
        <div>
        {modal_msg !== null &&
            <Alert style={{ zIndex: 2000, position: 'fixed', bottom: '16px', right: '24px' }} variant="filled" severity="success">
                {modal_msg}
            </Alert>
        } 
        </div>
        );
        
    }
    
    export default ModalMessaging