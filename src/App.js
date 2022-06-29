import { useState, useEffect } from 'react'
import Carosel from "./components/Carosel";
import Ads from './components/Ads';
import FooterLinks from './components/FooterLinks';
import SiteNav from './components/SiteNav';

function App() {
  const [exploreLinks, setExploreLinks] = useState([]) 
  const [alsoviewed, setAlsoviewed] = useState([])

  //  Fetch Funcitons
  const url = 'http://localhost:5000' || window.location.href

  const fetchExploreLinks = () => {
    fetch(`${url}/api/explorelinks`)
    .then(res => res.json())
    .then(data => setExploreLinks(data))
    .catch(error => console.log(error))
  }

  const fetchAlsoviewed = () => {
    fetch(`${url}/api/alsoviewed`)
    .then(res => res.json())
    .then(data => setAlsoviewed(data))
    .catch(error => console.log(error))
  }

  useEffect(()=>{
    fetchExploreLinks()
  }, [])

  useEffect(()=>{
    fetchAlsoviewed()
  }, [])




  return (
    <div className="App">
      <Carosel data={alsoviewed}/>
      <Ads />
      <FooterLinks links={exploreLinks}/>
      <SiteNav />

    </div>
  );
}

export default App;
