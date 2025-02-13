import React from 'react'
import CategoryMenu from '../components/CategoryMenu'
import Fooditems from '../components/Fooditems'
import Cart from '../components/Cart'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <CategoryMenu />
      <Fooditems />
      <Cart />
    </div>
  )
}

export default Home
