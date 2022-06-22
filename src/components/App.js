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
  }, [])

  return ( 
    <>
      <Router>
      <Header/>
        <Menu />
        <Routes>
<<<<<<< HEAD
          <Route exact path='/where-pizza' element={<Home
            pizza={pizza}
            sushi={sushi}
            snacks={snacks}
            drinks={drinks}
            getPizza={getOrder}
            getSushi={getOrder}
            getSnacks={getOrder}
            getDrinks={getOrder}
          />} />
          <Route path='/pizza' element={<Pizza pizza={pizza} getPizza={getOrder}/>} />
          <Route path='/sushi' element={<Sushi sushi={sushi} getSushi={getOrder}/>} />
          <Route path='/snacks' element={<Snacks snacks={snacks} getSnacks={getOrder}/>} />
          <Route path='/drinks' element={<Drinks drinks={drinks} getDrinks={getOrder}/>} />
          <Route path='/cart' element={<Cart
                                            orders={orders}
                                            increment={increment}
                                            decrement={decrement}
                                            />} />
=======
          <Route exact path='/' element={<Home/>} />
          <Route path='/pizza' element={<Pizza />} />
          <Route path='/sushi' element={<Sushi />} />
          <Route path='/snacks' element={<Snacks />} />
          <Route path='/drinks' element={<Drinks />} />
          <Route path='/cart' element={<Cart />} />
>>>>>>> dev
        </Routes>
      </Router>
      <Description/>
      <Footer/>
    </>
  );
}
 
export default App;