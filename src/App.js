
import { useEffect, useState } from 'react';
import './App.css';
import CountryBox from './components/CountryBox';

function App() {

  const [countries, setCountries] = useState([])


  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch("https://xcountries-backend.azurewebsites.net/all");
        if (!response.ok) {
          throw new Error("error");

        }
        const jsonData = await response.json();
        console.log(jsonData)
        setCountries(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }



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
