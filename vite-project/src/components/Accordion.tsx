import React, { useState } from 'react'
import {Package} from '../json/json'
interface IJson {
    id: number,
    image: string,
    title: string,
    price: string,
    brand_name: string
}

function Accordion() {
    const [jsonData, setJsonData] = useState<IJson[]>(Package);
    const [show, setShow] = useState<boolean[]>(Array(jsonData.length).fill(false));    
    function handleClick(index:number){
        const newShow = [...show];
        newShow[index] = !newShow[index];
        setShow(newShow)
    }
  return (
    <div>
        {jsonData.map(item=>(
            <div  key={item.id}>
               <span onClick={()=> handleClick(item.id)} style={{fontSize: 'x-large'}}>{show[item.id] ? '+' : '-'}</span> <span>{item.title}</span>
                {!show[item.id] ? <img style={{height: '400px', width: '400px'}} src={item.image}/> : null }
            </div>
        ))}
    </div>
  )
}

export default Accordion