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
    const inBasket = orders.find(order => (order.item.id === item.id) && (order.item.varient === item.varient));
    if (inBasket) {
      inBasket.counter++;
      const initialPrice = item.price;
      inBasket.price = +(initialPrice * inBasket.counter).toFixed(2);
    } else {
      setOrders([...orders, {item, counter: 1, price: item.price}])
    }

    const newPrice = price + item.price;
    setPrice(newPrice);
  }

  const increment = (item) => {
    const inBasket = orders.find(order => (order.item.id === item.id) && (order.item.varient === item.varient));
    inBasket.counter++;
    const newPrice = price + item.price;
    const initialPrice = item.price;
    inBasket.price = +(initialPrice * inBasket.counter).toFixed(2);
    setPrice(newPrice);
  }

  const decrement = (item) => {
    const inBasket = orders.find(order => (order.item.id === item.id) && (order.item.varient === item.varient));
    inBasket.counter--;
    const initialPrice = inBasket.price;
    inBasket.price = +(initialPrice - item.price).toFixed(2);
    if (inBasket.counter === 0) {
      const newOrders = orders.filter(order => !order.counter <= 0);
      setOrders(newOrders);
    }
    const newPrice = price - item.price;
    setPrice(newPrice);
  }
  

  return ( 
    <>
      <Router>
      <Header price={price}/>
        <Menu />
        <Routes>
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
        </Routes>
      </Router>
      <Description/>
      <Footer/>
    </>
  );
}
 
export default App;