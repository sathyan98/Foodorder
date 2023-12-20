import Header from './shared/header';
import Home from './components/Home';
import Form from './components/Form';
import About from './components/About';
import Food from './components/food'
import { Route ,  Routes} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
       <Header />
       <Routes>
       <Route path="/" element={<Food />}></Route>
       <Route path = "form" element = {<Form />}></Route> 
       <Route path = "about" element = {<About />}></Route> 

       </Routes>
    </div>
  );
}

export default App;
