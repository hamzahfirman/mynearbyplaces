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

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/places'>
          <Places/>
        </Route>
        <Route exact path='/aplace'>
          <Place/>
        </Route>
        <Route exact path='/businesses'>
          <Businesses/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
