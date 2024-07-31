import { Routes, Route } from 'react-router-dom';
import { Footer, Nav, Quiz } from './components/index';
import { Home, Login, SignUp } from './pages/index';

function App() {


  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/quiz/:id' element={<Quiz/>} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
