import './App.css'
import MyComponent from './components/MyComponent'

function App() {

  return (
    <>
      <div>
        <MyComponent 
        className = "hello"
        title = "Hello Style"
        src = "https://plus.unsplash.com/premium_photo-1705091982141-d8cff43e2ea6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        
        <MyComponent 
        className = "vcl"
        title = "hello KhaMinh Dev"
        src = "https://plus.unsplash.com/premium_photo-1705091981580-61fde359c314?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </>
  )
}

export default App
