import { Button, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react'

interface IFormData{
    firstname: string,
    lastname: string,
    email: string,
    password: string
}

function SendDataToServer() {
    const [formData, setFromData] = useState<IFormData>({
        firstname: '',
        lastname: '',
        email: '',
        password: ''

    });

    function onChnageHandle(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>){
        const {name, value} = e.target;
        setFromData({ ...formData, [name]: value});
    }

    function sendDatatoPost(e: React.FormEvent<HTMLFormElement>){
        console.log(formData);
        e.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
              'Content-Type': 'application/json',
            },
          }).then((response) => response.json())
        .then(data=> console.log(data))
    }

  return (
    <div>
        <form onSubmit={sendDatatoPost}>
            <TextField name='firstname' type='text' variant='outlined' onChange={onChnageHandle}/>
            <TextField name= 'lastname' type='text' variant='outlined' onChange={onChnageHandle}/>
            <TextField name='email' type='text' variant='outlined' onChange={onChnageHandle}/>
            <TextField name='password' type='text' variant='outlined' onChange={onChnageHandle}/>
            <Button type='submit'>Submit</Button>
        </form>
    </div>
  )
}

export default SendDataToServer