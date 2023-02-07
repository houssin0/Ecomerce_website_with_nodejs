import React from 'react'
import Navbar from '../compenents/Navbar'
import Announcement from '../compenents/Announcement'
import Slider from '../compenents/Slider'
import Categories from '../compenents/Categories'
import Products from '../compenents/Products'
import Newsletter from '../compenents/Newsletter'
import Footer from '../compenents/Footer'



const Home = () => {
  return (
    <div >
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home