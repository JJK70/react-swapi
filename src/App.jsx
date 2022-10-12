import './App.css';
import { Route, Routes } from 'react-router-dom'
import StarshipPage from './pages/StarshipPage/StarshipPage';
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';

function App() {
  return (
    <>
      <Routes>
        <Route path='/starships-page' element={<StarshipPage />} />
        <Route path='/starship' element={<StarshipDetails />} />
      </Routes> 
    </>
  );
}

export default App;