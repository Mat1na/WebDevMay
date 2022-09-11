import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

function Layout({ children,searchResultHandler,inputHandler,setSelectedGenre ,selectedGenre}) {
  return (
    <BrowserRouter>
      <Header searchResultHandler={searchResultHandler} inputHandler={inputHandler} selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre}/>
      {children}
      <Footer />
    </BrowserRouter>
  )
}

export default Layout
