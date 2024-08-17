import { MyComponent } from "./component/MyComponent"

function App() {
  const Heloo =()=>{
    return(
      <h1>
      helo</h1>
    )
  }
  return (
    <>
      <div>
          <MyComponent></MyComponent>
          <Heloo></Heloo>
      </div>
    </>
  )
}

export default App
