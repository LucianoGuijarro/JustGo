import './App.css';
import Banners from './components/Banners/Banners';
import EmpezarExperiencia from './components/EmpezarExperiencia/EmpezarExperiencia';
import GridDestinos from './components/GridDestinos/GridDestinos';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Banners />
    <GridDestinos />
    <EmpezarExperiencia  />
    </>
  );
}

export default App;
