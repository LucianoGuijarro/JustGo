import './App.css';
import Banners from './components/Banners/Banners';
import EmpezarExperiencia from './components/EmpezarExperiencia/EmpezarExperiencia';
import Footer from './components/Footer/Footer';
import GridDestinos from './components/GridDestinos/GridDestinos';
import Navbar from './components/Navbar/Navbar';
import InformacionWH from './components/QueEsWorkingHolidays/InformacionWH';

function App() {
  return (
    <>
    <Navbar />
    <Banners />
    <GridDestinos />
    <EmpezarExperiencia  />
    <InformacionWH />
    <Footer />
    </>
  );
}

export default App;
