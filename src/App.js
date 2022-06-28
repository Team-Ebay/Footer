import { useState } from 'react'
import Carosel from "./components/Carosel";
import Ads from './components/Ads';
import FooterLinks from './components/FooterLinks';
import SiteNav from './components/SiteNav';

function App() {
  const [exploreLinks, setExploreLinks] = useState([
    {
      id: 1,
      title: 'Explore link 1'
    },

    {
      id: 2,
      title: 'Explore link 2'
    },

    {
      id: 3,
      title: 'Explore link 3'
    },

    {
      id: 4,
      title: 'Explore link 4'
    },

    {
      id: 5,
      title: 'Explore link 5'
    },

    {
      id: 6,
      title: 'Explore link 6'
    },

    {id: 7,
      title: 'Explore link 7'
    },

    {
      id: 8,
      title: 'Explore link 8'
    },

    {
      id: 9,
      title: 'Explore link 9'
    }
  ])
  const [data, setData] = useState([
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400',
      title: 'Test Item 1',
      price: '$5.54',
      sold: 100
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1643039952431-38adfa91f320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODg0OA&ixlib=rb-1.2.1&q=80&w=400',
      title: 'Test Item 2',
      price: '$10.99',
      sold: 100
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1642034451735-2a8df1eaa2c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODg4OQ&ixlib=rb-1.2.1&q=80&w=400',
      title: 'Test Item 3',
      price: '$300.00',
      sold: 100
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1640808238224-5520de93c939?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODg4OQ&ixlib=rb-1.2.1&q=80&w=400',
      title: 'Test Item 4',
      price: '$129.99',
      sold: 100
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1642177584449-fa0b017dccc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc5NQ&ixlib=rb-1.2.1&q=80&w=400',
      title: 'Test Item 5',
      price: '$1.99',
      sold: 100
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1642237778207-24985a0bf876?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc5NQ&ixlib=rb-1.2.1&q=80&w=400',
      title: 'Test Item 6',
      price: '$54.99',
      sold: 100
    }
  ])
  return (
    <div className="App">
      <Carosel data={data}/>
      <Ads />
      <FooterLinks links={exploreLinks}/>
      <SiteNav />

    </div>
  );
}

export default App;
