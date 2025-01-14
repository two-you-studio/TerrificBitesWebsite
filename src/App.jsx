import React from 'react'
import Header from './components/Header'
import Carousel from './components/Carousel'
import SquareCards from './components/SquareCards'
import CircleCards from './components/CircleCards'
import CardsCarousel from './components/CardsCarousel'
import SplitSectionRight from './components/SplitSectionRight'
import SplitSectionLeft from './components/SplitSectionLeft'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>  
      <Header/>
      <Carousel/>
      <SquareCards/>
      <CircleCards/>  
      <CardsCarousel/>
      <SquareCards/>
      <SplitSectionRight/>
      <SplitSectionLeft/>
      <Footer/>
      </div>
  )
}

export default App