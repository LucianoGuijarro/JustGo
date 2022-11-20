import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Inicio from './components/Inicio/Inicio';
import Error404 from './components/Error404/Error404';
import QueEsUnaWorkingHoliday from './components/QueEsUnaWorkingHoliday/QueEsUnaWorkingHoliday';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/*' element={<Error404 />} />
          <Route path='/que-es-una-working-holiday' element={<QueEsUnaWorkingHoliday />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
