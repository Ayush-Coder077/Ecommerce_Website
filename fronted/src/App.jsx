import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HOMES from './pages/HOMES'
import COLLECTIONS from './pages/COLLECTIONS'
import ABOUTS from './pages/ABOUTS'
import CONTACTS from './pages/CONTACTS'
import PRODUCTS from './pages/PRODUCTS'
import PLACE_ORDER from './pages/PLACE_ORDER'
import CARTS from './pages/CARTS'
import SIGN_IN from './pages/SIGN_IN'
import ORDER from './pages/ORDER'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import SearchBar from './components/SearchBar'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <SearchBar/>
      <Routes>
      <Route path='/' element={<HOMES/>}/>
      <Route path='/collection' element={<COLLECTIONS/>}/>
      <Route path='/about' element={<ABOUTS/>}/>
      <Route path='/contact' element={<CONTACTS/>}/>
      <Route path='/product/:productId' element={<PRODUCTS  />}/>
      <Route path='/place-order' element={< PLACE_ORDER />}/>
        <Route path='/cart' element={< CARTS />}/>
          <Route path='/signin' element={< SIGN_IN />}/>
            <Route path='/orders' element={<ORDER  />}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
