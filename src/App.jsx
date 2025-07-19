import './App.css'

function App() {

  return (
    <div className='container'>
      <div className='toast-container'>
        <div className='toast'>
          Success Toast <span>X</span>
        </div>
      </div>
      <h1>React Toaster App</h1>
      <div className='btn-container'>
        <button>Success Toast</button>
        <button>Info Toast</button>
        <button>Warning Toast</button>
        <button>Error Toast</button>

      </div>

    </div>
  )
}

export default App
