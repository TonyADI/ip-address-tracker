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

  useEffect(() => {
    ipApi().then(data => {
      console.log(data)
      setIpData(data)});
  }, [])
  return (
    <div className="App">
      <img src={bgPattern} className="background-pattern" 
      alt="blue background-pattern"/>
      <h2>IP Address Tracker</h2>
      <SearchBar iconArrow={iconArrow} handleChange={setSearchTerm}/>
      <Dashboard data={ipData}/>
    </div>
  );
}

export default App;
