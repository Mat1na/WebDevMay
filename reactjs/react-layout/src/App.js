import React, { useState } from 'react'
import {Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'

import Home from './Home'
import MovieDetails from './MovieDetails'
import SearchResults from './SearchResults'
function App() {
    const [result,setResult] = useState([])
    const searchResult = ()=>{
        console.log('This is search handler')
        setResult([{
            id:1,
            name:'Batman & Joker'
        }])
    }
    return (
        <Layout searchResultHandler={searchResult}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/search' element={<SearchResults result={result}/>}/>
                <Route path='/:movie_id' element={<MovieDetails/>}/>
                
            </Routes>
        </Layout>
    )
}

export default App
