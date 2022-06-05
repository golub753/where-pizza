import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Header/Header';
import Menu from './Menu/Menu';
import Home from '../pages/Home';
import Pizza from '../pages/Pizza';
import Sushi from '../pages/Sushi';
import Snacks from '../pages/Snacks';
import Drinks from '../pages/Drinks';
import Desserts from '../pages/Desserts';

const App = () => {
  return ( 
    <>
      <Header />
      <Router>
        <Menu />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/pizza' element={<Pizza/>} />
          <Route path='/sushi' element={<Sushi/>} />
          <Route path='/snacks' element={<Snacks/>} />
          <Route path='/drinks' element={<Drinks/>} />
          <Route path='/desserts' element={<Desserts/>} />
        </Routes>
      </Router>
    </>
  );
}
 
export default App;