import './App.css';
import Navbar from './Navbar';
import AddStudent from './AddStudent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './services/Home';
import EditStudent from './EditStudent';
import ViewStudent from './ViewStudent';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route index element={<Home />}></Route>
          <Route path='/studentlist' element={<Home />}></Route>
          <Route exact path='/addstudent' element={<AddStudent />}></Route>
          <Route exact path='/editstudent/:id' element={<EditStudent/>}></Route>
          <Route exact path='/viewstudent/:id' element={<ViewStudent/>}></Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
