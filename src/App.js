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
import EligeTuProximoDestino from './pages/eligeTuProximoDestino/EligeTuProximoDestino';
import GuiaAlemania from './pages/guia-working-holidays/alemania/GuiaAlemania';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/*' element={<Error404 />} />
          <Route path='/que-es-una-working-holiday' element={<QueEsUnaWorkingHoliday />} />
          <Route path='/elige-tu-proximo-destino' element={<EligeTuProximoDestino />} />
          <Route path='/guia-working-holiday/Alemania' element={<GuiaAlemania />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
