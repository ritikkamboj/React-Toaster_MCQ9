import { useState } from 'react'
import './App.css'

function App() {
  const [visible , setVisible] = useState(false);

  function handleClick()
  {
    setVisible(true)
    setTimeout(()=> handleClose() , 5000)
  }

  function handleClose()
  {
    setVisible(false)
  }

  return (
    <div className='container'>
     {
      visible &&  <div className='toast-container'>
        <div className='toast'>
          Success Toast <span onClick={() => handleClose()}>X</span>
        </div>
      </div>
     }
      <h1>React Toaster App</h1>
      <div className='btn-container'>
        <button onClick={() => handleClick()}>Success Toast</button>
        <button>Info Toast</button>
        <button>Warning Toast</button>
        <button>Error Toast</button>

      </div>

    </div>
  )
}

export default App
