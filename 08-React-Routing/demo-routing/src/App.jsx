import './App.css'
import {Routes, Route} from "react-router-dom";
import Home from './assets/components/Home/Home';
import About from './assets/components/About/About';
import Profile from './assets/components/Profile/Profile';
import Person from './assets/components/person/Person';


function App() {


  return (
    <div>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/profile' element={<Profile />}>
          <Route path='/profile/:id' element={<Person />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
