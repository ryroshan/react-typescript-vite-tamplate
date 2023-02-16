import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import CheckBox from '@material-ui/core/Checkbox'
import useFetch from '../hooks/useFetch'

function RenderItem() {
    const {items, loading, error, setItems} = useFetch('https://jsonplaceholder.typicode.com/posts')
    const [field, setFiled] = useState<string>('')
    const [check, setCheck] = useState<boolean>(false)
    const onchnageFuc = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
      setFiled(e.target.value)
    }
    const handlecheck = (e: React.ChangeEvent<HTMLInputElement>) =>{
      console.log(e.target.checked);
      
      setCheck(e.target.checked)
      setItems(e.target.checked ? [] : items) 
    }
    const filteredItems = items.filter((item)=> item.title.toLowerCase().includes(field))
  return (
    <div>
        {loading && <h1>Loading...</h1>}
        {error && <h1>Oops! need to refresh the page....</h1>}
        <CheckBox checked={check} onChange={handlecheck}/>
        <TextField name={field} onChange={(e)=>{onchnageFuc(e)}} variant='outlined'/>
        <ul>
        {filteredItems.map(item=>(
            <li key={item.id}>{item.title}</li>
        ))}
        </ul>
        
    </div>
  )
}

export default RenderItem