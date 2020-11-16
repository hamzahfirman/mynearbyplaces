import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

/* Components */
import Home from './components/Home';
import Places from './components/Places';
import Place from './components/aPlace';
import Businesses from './components/Businesses';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/' render={ props => <Home {...props}/>}>
        </Route>
        <Route  path='/places'>
          <Places/>
        </Route>
        <Route  path='/aplace'>
          <Place/>
        </Route>
        <Route path='/login'>
        <Login />
        </Route>
        <Route  path='/businesses'>
          <Businesses/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
