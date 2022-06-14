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
import { useEffect, useState } from 'react';
import GetData from '../API/GetData';

const App = () => {

  const [orders, setOrders] = useState([]);
  const [originalOrders, setOriginalOrders] = useState([]);
  const [price, setPrice] = useState(0);

  const [pizza, setPizza] = useState(null);
  const [drinks, setDrinks] = useState(null);
  const [snacks, setSnacks] = useState(null);
  const [sushi, setSushi] = useState(null);

  useEffect(() => {
      const res = new GetData();
      res.getPizza('/pizza.json')
      .then(data => setPizza(data))
      res.getPizza('/sushi.json')
      .then(data => setSushi(data))
      res.getPizza('/snacks.json')
      .then(data => setSnacks(data))
      res.getPizza('/drinks.json')
      .then(data => setDrinks(data))
  }, [])

  const getOrder = (item) => {
    setOriginalOrders([...originalOrders, item]);
    const hasItem = orders.some(order => (order.id === item.id) && (order.varient === item.varient));
    if (!hasItem) {
      setOrders([...orders, item])
    } else {
      setOrders([...orders])
    }
    const newPrice = price + item.price;
    setPrice(newPrice);
  }
  

  return ( 
    <>
      <Router>
      <Header price={price}/>
        <Menu />
        <Routes>
          <Route exact path='/' element={<Home
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
                                            originalOrders={originalOrders}
                                            />} />
        </Routes>
      </Router>
      <Description/>
      <Footer/>
    </>
  );
}
 
export default App;