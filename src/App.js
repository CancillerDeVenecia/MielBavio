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

function App() {
  return (
    <Router>
    <div className="App">
      <SideBar />
      <Header />
      <Switch> 
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/item/:id" component={ItemDetail} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
