import './App.css';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Navbar from './components/Navbar/navbar';
import { Route, Routes } from 'react-router-dom';
import Place from './components/places/Place';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/places' element ={<Place/>}/>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
