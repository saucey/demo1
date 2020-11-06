import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const SectorForm = () => {
    
    const { register, handleSubmit, errors } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' })
    const [sector, setSector] = useState('')
    const [short, setShort] = useState('')
    const [errorMessaging, setErrorMessaging] = useState(null)
    const onSubmit = data => {
        // history.push('/home')
    }
    
    return (
        <form
        // ref={useRef()  }
        onSubmit={handleSubmit(onSubmit)}
        >
        <TextField
        value={sector}
        onChange={(e) => setSector(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
        id="sector"
        label="Sector"
        name="sector"
        autoComplete="sector"
        autoFocus
        inputRef={register({ required: true })}
        error={errors.sector?.type === 'required'}
        />
        <p>
        {errors.sector?.type === 'required' && <span>This field is required</span>}
        </p>
        <TextField
        value={short}
        onChange={(e) => setShort(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
        name="short"
        label="Short"
        type="short"
        id="short"
        autoComplete="short"
        inputRef={register({ required: true })}
        error={errors.short?.type === 'required'}
        />
        <p>
        {errors.short?.type === 'required' && <span>This field is required</span>}
        </p>
        <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        >
        SAVE
        </Button>
        </form>
        )
    }
    
    export default SectorForm