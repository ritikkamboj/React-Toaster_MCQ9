import { useState } from 'react'
import './App.css'

function App() {
  // const [visible , setVisible] = useState(false);
  const [list, setList] = useState([]);

  function handleClick(message, type) {
    const id = new Date().getTime();
    const newToast = [...list, { id, message, type }]
    setList(newToast);

    // setVisible(true)
    // setTimeout(()=> handleClose() , 5000)


  }

  function handleClose() {
    setVisible(false)
  }

  return (
    <div className='container'>

      <div className='toast-container'>
        {
          list.map((data)=> {
            return    <div key={data.id} className={`toast ${data.type}`}>
        {data.message} <span onClick={() => handleClose("Success", 'success')}>X</span>
        </div>
          })
        }
     
      </div>


      <h1>React Toaster App</h1>
      <div className='btn-container'>
        <button onClick={() => handleClick("Success" , 'success')}>Success Toast</button>
        <button onClick={() => handleClick("Info" , 'info')}>Info Toast</button>
        <button onClick={() => handleClick("Warning" , 'warning')}>Warning Toast</button>
        <button onClick={() => handleClick("Error" , 'error')}>Error Toast</button>

      </div>

    </div>
  )
}

export default App
