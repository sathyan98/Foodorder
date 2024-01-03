import Header from './shared/header';
import Home from './components/Home';
import Form from './components/Form';
import About from './components/About';
import Food from './components/food'
import { Route ,  Routes} from 'react-router-dom';
import Foodmenu from './components/foodMenu'
import './App.css';
import { Suspense } from 'react';

function App() {
  return (
    <div className="App">
       <Header />
       <Routes>
       {/* <Suspense fallback = {<div>Loading</div>} >  */}
       <Route path="/" element={<Food />}></Route>
       <Route path = "form" element = {<Form />}></Route> 
       <Route path = "about" element = {<About />}></Route> 
       <Route path = ':id' element = {<Foodmenu />}></Route>
        {/* </Suspense> */}
       </Routes>
    </div>
  );
}

export default App;
