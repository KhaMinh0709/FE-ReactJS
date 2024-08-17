import './App.css'
import { ArrayRender } from '../ArrayRender'
import MyComponent from './components/MyComponent'

function App() {
  console.log(ArrayRender)

  return (
    <>
    <div>
      <MyComponent>
        <h1> hello</h1>
      </MyComponent>
      {ArrayRender.map((item,index) =>{
        if(index === 1){
          console.log(index)
        }
        return(
          <MyComponent
          key = {item.id}
          title = {item.title}
          src = {item.src}
          ></MyComponent>
        )
      })}
    </div>
    </>
  )
}

export default App
