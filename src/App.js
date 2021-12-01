import { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import SearchBar from './components/SearchBar';
import iconArrow from './files/images/icon-arrow.svg';
import bgPattern from './files/images/pattern-bg.png';
import { ipApi } from './utils/APIs';
import './App.css';

const App = () => {
  const [term, setTerm] = useState('');
  const [ipData, setIpData] = useState({});
  const setSearchTerm = searchTerm => {
    setTerm(searchTerm);
  }

  const searchIp = () => {
    ipApi(term).then(data => setIpData(data));
  }

  useEffect(() => {
    ipApi().then(data => setIpData(data));
  }, [])
  return (
    <div className="App">
      <img src={bgPattern} className="background-pattern" 
      alt="blue background-pattern"/>
      <h2>IP Address Tracker</h2>
      <SearchBar iconArrow={iconArrow} handleChange={setSearchTerm}
      handleClick={searchIp}/>
      <Dashboard data={ipData}/>
      <iframe id="map"
        loading="lazy"
        allowfullscreen
        src={`https://www.google.com/maps/embed/v1/place?zoom=5&key=AIzaSyA03z6PEEhOTgpgg-PM-w6F2Jk2pGWljJE
          &q=${ipData.location ? ipData.location.region : ''}`}>
      </iframe>
    </div>
  );
}

export default App;
