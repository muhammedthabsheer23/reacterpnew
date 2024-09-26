import React, { useState } from 'react'
import Sidebar from './Sidebar'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Home from './Home'

function App() {
  const [toggle, settoggle] = useState(false)
  const Toggle=()=>{
    settoggle(!toggle)
  }
  return (
    <div className='conatiner-fluid bg-secondary min-vh-100'>
      <div className='row'>
        {toggle &&
        <div className='col-2 bg-white vh-100'>
        <Sidebar/>
        </div>}
        <div className='col'>
         <Home Toggle={Toggle}/>
        </div>
      </div>
     
    </div>
  )
}

export default App