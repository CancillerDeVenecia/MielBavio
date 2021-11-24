import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './w3/w3colors.css';

// Components
import Header from './components/header/Header'

// Views
import Home from './views/Home/Home';
import About from './views/About/About';
import ItemDetail from './views/ItemDetail/ItemDetail';
import Cart from './views/Cart/Cart';
import Category from './views/Category/Category';
import Buy from './views/Buy/Buy';

// Context
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
    <Router>
    <div className="App">
      <Header />
      <Switch> 
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/item/:id" component={ItemDetail} />
        <Route path="/category/:id" component={Category} />
        <Route path="/cart" component={Cart} />
        <Route path="/buy" component={Buy} />
      </Switch>   
    </div>
    </Router>
    </CartProvider>
  );
}

export default App;
