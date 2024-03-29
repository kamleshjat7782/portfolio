import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Project from './Components/Project';
import CardDetails from './Components/CardDetails';
import ProjectData from './Components/ProjectData';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header/>
      <main>

      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/about' element = {<About/>} />
        <Route path='/contact' element = {<Contact/>} />
        <Route path='/project' element = {<Project/>} />
        <Route path='/cardDetails' element={<CardDetails />}/>
        <Route path='/projectData' element={<ProjectData />}/>

      </Routes>
      </main>
      <Footer/>
      
      </BrowserRouter>


    </div>
  );
}

export default App;
