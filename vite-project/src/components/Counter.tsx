import React, { useEffect, useState } from 'react'

function Counter() {
    const [count, setCount] = useState<number>(0);
    useEffect(()=>{
        let intervalID = setInterval(()=>{
            setCount(pre=> pre + 1)
        }, 1000)

        return ()=>{
            clearInterval(intervalID)
        }
    },[])
  return (
    <div>
        {count}
    </div>
  )
}

export default Counter