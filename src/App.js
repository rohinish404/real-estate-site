
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { FilterContext } from './Contexts/FilterContext';
function App() {
  const [value4,setValue4] = useState("")
  const [value1, setValue1] = useState("Location")
  const [value2, setValue2] = useState("Price")
  const [value3, setValue3] = useState("Property Type");
  const [submit,setSubmit] = useState(false)

  return(
    <div className='bg-purple-50'>
        <FilterContext.Provider value={{value4,setValue4,value1,setValue1,value2,setValue2,value3,setValue3,submit,setSubmit}}>
          <Navbar />
          <Home />
        </FilterContext.Provider>
    </div>
  );
}

export default App;
