import TextField from '@material-ui/core/TextField'
import Button  from '@material-ui/core/Button'
import React, { useState } from 'react'
import { IFieldInput, IFieldErrors } from '../types/type'



function FormValidation() {
  const [state, setState] = useState<IFieldInput>({
    name : '',
    email: '',
    password: ''
  })

  const [formErrors, setFromsError] = useState<IFieldErrors>({
    name : '',
    email: '',
    password: ''
  });

  const validateForm = (values: IFieldInput)=>{
    let erros: IFieldErrors = {};

    if(!state.name){
      erros.name = 'Name is required!!';
    }

    if(!state.email){
      erros.email = 'email is required!!';
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
      erros.email = 'enter valid email!!!'
    }

    if(!state.password){
      erros.password = 'password is required!!';
    }else if(state.name.length < 6){
      erros.password ='Password must be at least 6 characters long';
    }

    setFromsError(erros)
    return erros
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    const {name, value} = e.target;
    setState({ ...state, [name]: value });  
  }

  function handleClick(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()  
    console.log(state);
  }

  return (
    <form onSubmit={handleClick}>
      <div>
      <TextField variant='filled' name='name' onChange={handleChange} label='name' type='text' value={state.name}/>
      {formErrors.name && <span>{formErrors.name}</span>}
      </div>
      <div>
      <TextField variant='filled' name='email' label='email' onChange={handleChange} type='text' value={state.email}/>
      {formErrors.name && <span>{formErrors.email}</span>}

      </div>
      <div>
      <TextField variant='filled'  name='password' label='password' onChange={handleChange} type='text' value={state.password}/>
      {formErrors.name && <span>{formErrors.password}</span>}

      </div>
      <div>
      <button>Submit</button>
      </div>
    </form>

  )
}

export default FormValidation