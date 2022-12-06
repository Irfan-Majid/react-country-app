import React,{useEffect,useState} from 'react'
import { Countries } from './components/Countries';


const url = "https://restcountries.com/v3.1/all";
const App = () => {
  const [isLoading,setLoading] = useState(true);
  const [error,setError] = useState(null);
  const [countries,setCountries] = useState([]);


  useEffect(() => {
    fetchData(url);
  })
  const fetchData = async (url) => {
    setLoading(true);
    try{ 
     
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setLoading(false);
      setError(null);
      console.log(countries)
    }catch(e){
      setLoading(false);
      setError(e);
    }
  }
  return (
    <>
    <h1>Country App</h1>
    {isLoading && <h2>Loading....</h2>}
    {error && <h2>{error.message}</h2>}
    {countries && <Countries countries={countries} />}
    </>
  );
}

export default App;
