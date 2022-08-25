import React from 'react';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";
import Contact from './contact';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from './NotFound';
import BlogDetail from './BlogDetail';
import Blog from './Blog';
// import your route components too

const TestFunction=()=>{
  console.log("TestFunction")
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <BrowserRouter>
        <h5>This is Static</h5>
        <ul>
          <li><a href='/'>Homepage</a></li>
          <li><a href='/contact'>Contact</a></li>
          <li><a href='/blog'>Blog</a></li>
          {/* <li><a href='/blog/5'>Post 5</a></li> */}
        </ul>
        <Routes>
       < Route path='/' element={<App users={[1,2,3,4]} posts={[{id:1},{id:2}]}/>}/>
       < Route path='/contact' element={<Contact MyFunction={TestFunction}/>}/>
       < Route path='/blog' element={<Blog/>}/>
       < Route path='/blog/:id' element={<BlogDetail/>}/>
       < Route path='*' element={<NotFound/>}/> // page not found
       
        </Routes>
        </BrowserRouter>
  </React.StrictMode>
);

