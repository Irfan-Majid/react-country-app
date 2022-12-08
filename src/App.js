import React,{useEffect,useState} from 'react'
import { Countries } from './components/Countries';
import { Search } from './components/Search';


const url = "https://restcountries.com/v3.1/all";
const App = () => {
  const [isLoading,setLoading] = useState(true);
  const [error,setError] = useState(null);
  const [countries,setCountries] = useState([]);
  const [filteredCountries,setFilteredCountries] = useState(countries);


  
  const fetchData = async (url) => {
    setLoading(true);
    try{ 
     
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilteredCountries(data);
      setLoading(false);
      setError(null);
      console.log(countries)
    }catch(e){
      setLoading(false);
      setError(e);
    }
  }
  
  useEffect(() => {
    fetchData(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRemoveCountry = (name) => {
    const filterData = filteredCountries.filter((country) => country.name.common !== name)
    setFilteredCountries(filterData);
  }
 
  const handleSearch = (search) => {
    const value = search.toLowerCase();
    const filterData = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    })
    setFilteredCountries(filterData);
  }

  return (
    <>
    <Search onSearch={handleSearch}/>
    <h1>Country App</h1>
    {isLoading && <h2>Loading....</h2>}
    {error && <h2>{error.message}</h2>}
    {countries && <Countries countries={filteredCountries} onRemoveCountry={handleRemoveCountry}/>}
    </>
  );
}

export default App;
