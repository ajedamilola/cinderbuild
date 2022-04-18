import React from 'react';
import BestDealsIntro from './Sections/Home/BestDealsIntro';
import CinderPoeple from './Sections/Home/CinderPeople';
import HomeBrands from './Sections/Home/HomeBrands';
import HomeIntro from './Sections/Home/HomeIntro';
import Navbar from "./Sections/Home/Navbar";
import PopularDeals from './Sections/Home/PopularDeals';
import Testimonials from './Sections/Home/Testimonials';
import TrustBrands from './Sections/Home/TrustBrands';
import UpdatesSubscription from './Sections/Home/UpdatesSubscription';
import Footer from "./Sections/Home/Footer";
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
