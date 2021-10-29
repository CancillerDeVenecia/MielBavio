import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Header from './components/header/Header'
import SideBar from './components/navBar/SideBar';

// Views
import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import ItemDetail from './views/ItemDetail/ItemDetail';
import Cart from './views/Cart/Cart';

// Context
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
    <Router>
    <div className="App">
      <SideBar />
      <Header />
      <Switch> 
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/item/:id" component={ItemDetail} />
        <Route path="/cart" component={Cart} />
      </Switch>   
    </div>
    </Router>
    </CartProvider>
  );
}

export default App;
