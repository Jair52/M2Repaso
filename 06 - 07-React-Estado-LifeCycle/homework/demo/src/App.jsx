import './App.css'
import Display from './components/Display/Display'
import Counter from './components/counter/Counter'
import Person from './components/person/Person'


function App() {

  return (
    <>
      <Counter/>
      <Person name='FT' lastname='45a' />
      {/* <Display variable={Counter.counter}/> */}
    </>
  )
}

export default App
