import React, { useEffect, useState } from 'react'
import Drummer from './components/DrummersItem';
import DrummersItem from './components/DrummersItem'
import config from './config';
import './App.scss';

const App: React.FC = () => {
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
    return <p>Data is loading...</p>;
  }

  if (error || !Array.isArray(drummers?.drummers)) {
    console.log(drummers)
    return <p>There was an error loading your data!</p>;
  }

  return (
    <div className='app-container'>
      <h1>My drummers</h1>
      <div className="videos">
      {drummers?.drummers.map((drummer: IDrummer) => (
        <DrummersItem
          key={drummer.id}
          drummer={drummer}
        />
      ))}
      </div>
    </div>
  )
}

export default App
