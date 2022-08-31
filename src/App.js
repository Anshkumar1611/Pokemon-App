import { useEffect, useState } from 'react';
import './App.css';
import CardItems from './components/CardItems';
import Searchbar from './components/Searchbar';
import axios from 'axios';
import Loading from './components/Loading';
import Hero from './components/Hero';
import Pagination from './components/Pagination';

function App() {
  const [data, setData] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [nextPageUrl, setNextPageUrl] = useState('')
  const [prevPageUrl, setPrevPageUrl] = useState('')
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // const url = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
      .then(function (response) {
        const result = response.data.results;
        console.log(response.data);
        if (result) {
          setLoading(false)
          setNextPageUrl(response.data.next)
          setPrevPageUrl(response.data.previous)
          setData(result)
        }
      })
      .catch(function (error) {
        console.error(error);
      });
    return () => cancel()
  }, [currentPageUrl])

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function gotoprevPage() {
    setCurrentPageUrl(prevPageUrl)
  }

  return (

    <div>
      <Hero />
      <div className='m-5 bg-base-50'>
        <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Pagination gotoNextPage={nextPageUrl ? gotoNextPage : null} gotoprevPage={prevPageUrl ? gotoprevPage : null} />
        {loading ? <Loading /> : <div className='flex flex-wrap justify-center px-2 '>
          {data.map((data, index) => {
            return (
              <CardItems data={data} key={index} />
            )          
          })}
          <br /> 
             
        </div>}
        <Pagination gotoNextPage={nextPageUrl ? gotoNextPage : null} gotoprevPage={prevPageUrl ? gotoprevPage : null} />   
      </div>
    </div>
  );
}

export default App;
