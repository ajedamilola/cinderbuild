import React from 'react';
import BestDealsIntro from './components/Home/BestDealsIntro';
import CinderPoeple from './components/Home/CinderPeople';
import HomeBrands from './components/Home/HomeBrands';
import HomeIntro from './components/Home/HomeIntro';
import Navbar from "./components/Home/Navbar";
import PopularDeals from './components/Home/PopularDeals';
import Testimonial from './components/Home/Testimonial';
import "./font-awesome/css/fa-solid.css"
import "./font-awesome/css/fontawesome.min.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <HomeIntro />
      <BestDealsIntro />
      <HomeBrands />
      <PopularDeals />
      <CinderPoeple />
      <Testimonial />
    </div>
  )
}
