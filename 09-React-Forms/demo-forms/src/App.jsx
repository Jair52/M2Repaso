import './App.css'
import Form from './components/Form'

function App() {

  const data ={
    name: "FT45a",
    title: "Formulario Controlado"
  }
  
  return (
    <div>
      <Form data= {data}/>
    </div>
  )
}

export default App
