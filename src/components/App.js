import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Header/Header';
import Menu from './Menu/Menu';
import Home from '../pages/Home';
import Pizza from '../pages/Pizza';
import Sushi from '../pages/Sushi';
import Snacks from '../pages/Snacks';
import Drinks from '../pages/Drinks';
import Description from './Description/Description';
import Cart from '../pages/Cart';
import Footer from './Footer/Footer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchItems } from '../API/getData';
import { getPizzaAction } from "../store/pizzaReducer"
import { getSushiAction } from '../store/sushiReducer';
import { getSnacksAction } from '../store/snacksReducer';
import { getDrinksAction } from '../store/drinksReducer';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems('pizza', getPizzaAction));
    dispatch(fetchItems('sushi', getSushiAction));
    dispatch(fetchItems('snacks', getSnacksAction));
    dispatch(fetchItems('drinks', getDrinksAction));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return ( 
    <>
      <Router>
      <Header/>
        <Menu />
        <Routes>
          <Route exact path='/where-pizza' element={<Home/>} />
          <Route path='/pizza' element={<Pizza />} />
          <Route path='/sushi' element={<Sushi />} />
          <Route path='/snacks' element={<Snacks />} />
          <Route path='/drinks' element={<Drinks />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
      <Description/>
      <Footer/>
    </>
  );
}
 
export default App;