import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
     <Header />
     <div>
     <Route path='/' exact component={Home}>
     </Route>
     <Route path='/cart' exact component={Cart}>
    </Route>
     </div>
    </Router>
  );
}

export default App;
