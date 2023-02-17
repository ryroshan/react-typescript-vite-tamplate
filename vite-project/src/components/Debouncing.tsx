import React, { useState } from 'react'
import _ from 'lodash'
function Debouncing() {
    const [state, setState] = useState<number>(0);

    // const makeBouce = _.debounce(function(){
    //     setState(prev=>prev+1)
    // }, 1000)

    const makeBouce=()=>{}

    function bounce(){
        makeBouce()
    }

  return (
    <div>
        <span style={{fontSize:'larger'}}>{state}</span>
        <br />
        <button onClick={bounce}>Click!! time{state}</button>
    </div>
  )
}

export default Debouncing