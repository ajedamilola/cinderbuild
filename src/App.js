import React from 'react';
import BestDealsIntro from './components/Home/BestDealsIntro';
import CinderPoeple from './components/Home/CinderPeople';
import HomeBrands from './components/Home/HomeBrands';
import HomeIntro from './components/Home/HomeIntro';
import Navbar from "./components/Home/Navbar";
import PopularDeals from './components/Home/PopularDeals';
import Testimonials from './components/Home/Testimonials';
import TrustBrands from './components/Home/TrustBrands';
import UpdatesSubscription from './components/Home/UpdatesSubscription';
import Footer from "./components/Home/Footer";
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
      <Testimonials />
      <TrustBrands />
      <UpdatesSubscription />
      <Footer />
    </div>
  )
}
