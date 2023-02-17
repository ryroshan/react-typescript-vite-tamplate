import  Accordion  from './components/Accordion'
import { useState } from 'react'
import './App.css'
import RenderItem from './components/RenderItem'
import FormValidation from './components/FormValidation'
import Counter from './components/Counter'
import SendDataToServer from './components/SendDataToServer'
import Debouncing from './components/Debouncing'
function App() {

  return (
    <div className="App">
    {/* <RenderItem /> */}
    {/* <Accordion /> */}
    {/* <FormValidation /> */}
    {/* <Counter /> */}
    {/* <SendDataToServer /> */}
    <Debouncing />
    </div>
  )
}

export default App
