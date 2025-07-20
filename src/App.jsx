import { useState } from 'react'
import './App.css'

function App() {
  // const [visible , setVisible] = useState(false);
  const [list, setList] = useState([]);

  function handleClick(message, type) {
    const id = new Date().getTime();
    const newToast = [...list, { id, message, type }]
    setList(newToast);
    setTimeout(()=> handleClose(id),5000)

    // setVisible(true)
    // setTimeout(()=> handleClose() , 5000)


  }

  function handleClose(id) {
    // let filArr = list.filter((data)=> data.id !==id);
  setList(prevList => prevList.filter(data => data.id !== id));
  }

  return (
    <div className='container'>

      <div className='toast-container'>
        {
          list.map((data)=> {
            return    <div key={data.id} className={`toast ${data.type}`}>
        {data.message} <span onClick={() => handleClose(data.id)}>X</span>
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
