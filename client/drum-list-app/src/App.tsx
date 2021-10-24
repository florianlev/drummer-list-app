import React, { useEffect, useState } from 'react'
import DrummersItem from './components/DrummersItem'
import DrummerItemDetails from './components/DrummerItemDetails';
import { Router, Link, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';


import config from './config';
import './App.scss';
const history = createBrowserHistory();


function App() {
  return (

    <Router history={history}>
      <div className='app-container'>
        <h1>My drummers</h1>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/drummer/:id" component={DrummerItemDetails}></Route>
        </Switch>
      </div>
    </Router>
  )
}

const Home = () => {
  const [drummers, setDrummers] = useState<IDrummers>()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    fetch(config.api.endpoints.drummers.all)
      .then((response) => response.json())
      .then((data) => { setDrummers(data) })
      .catch((err) => {
        console.log(err)
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [])

  if (loading) {
    return <p>Données en chargement ...</p>;
  }

  if (error || !Array.isArray(drummers?.drummers)) {
    return <p>Erreur de chargement des données ! </p>;
  }

  return (
    <div className="videos">
      {drummers?.drummers.map((drummer: IDrummer) => (
        <Link to={`/drummer/${drummer.id.toString()}`}>
          <DrummersItem
            key={drummer.id}
            drummer={drummer}
          />
        </Link>
      ))}
    </div>
  )
}

export default App
