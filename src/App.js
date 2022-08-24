import { useEffect, useState } from 'react';
import './App.css';
import CardItems from './components/CardItems';
import Searchbar from './components/Searchbar';
import axios from 'axios';
import Loading from './components/Loading';
import Hero from './components/Hero';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const url = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`


  const fetchData = () => {

    setLoading(true)
    axios.get(`${url}`)
      .then(function (response) {
        const result = response.data.results;
        console.log(response.data.results);
        if (result) {
          setData(result)
          setLoading(false)
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }


  useEffect(() => {
    fetchData();
  }, [searchTerm])



  return (

    <div>
      <Hero />
      <div className='m-5 bg-base-50'>
        <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        {loading ? <Loading /> : <div className='flex flex-wrap justify-center px-2 '>
          {data.map((data, index) => {
            return (
              <CardItems data={data} key={index} />
            )
          })}
        </div>}
      </div>
    </div>
  );
}

export default App;
