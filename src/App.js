
import { useEffect, useState } from 'react';
import './App.css';
import CountryBox from './components/CountryBox';

function App() {

  const [countries, setCountries] = useState([])


  useEffect(() => {

    const fetchData = async () => {

      const response = await fetch("https://xcountries-backend.azurewebsites.net/all");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      console.log(jsonData)
      setCountries(jsonData);


    };

    fetchData();

  }, [])

  return (
    <div className="App">
      {countries.map((ele, idx) => <CountryBox name={ele.name} img={ele.flag} key={idx} />)}
    </div>
  );
}

export default App;
