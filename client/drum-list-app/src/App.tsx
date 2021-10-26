import DrummerItemDetails from './components/DrummerItemDetails';
import Search from './components/Search';

import { Router,Switch, Route,Link } from "react-router-dom";
import { createBrowserHistory } from 'history';
import './App.scss';
import './styles/bootstrap.min.css';
const history = createBrowserHistory();

function App() {
  return (

    <Router history={history}>
      <div className='app-container'>

      <Link to={`/`} style={{ color: 'inherit', textDecoration: 'inherit'}}>

        <h1>My drummers</h1>
        </Link>
        <Switch>
          <Route path="/" exact component={Search}></Route>
          <Route path="/drummer/:id" component={DrummerItemDetails}></Route>
        </Switch>
      </div>
    </Router>
  )
}
export default App
