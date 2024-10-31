import React from 'react';
import { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import { useForm, SubmitHandler } from "react-hook-form";
import Header from './components/generic/Header';
import Footer from './components/generic/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import Settings from './pages/Settings';
import Officers from './pages/Officers';

function App() {
  
  function ErrorPage () {
    return (
      <div>
        <Header />
        <h1>Error</h1>
        <p>Page not found. 404</p>
        <Footer />
      </div>
    )
  }
  
  
  //main return
  return (
    <Router>
      <Routes>
        <Route exact path='/' element= {
          // put components inside v
          <React.Fragment>
          <Header />
          <Home />
          <Footer />
          </React.Fragment>
        } />
        <Route path='/events' element={
          // put components inside v
          <React.Fragment>
            <Header />
            <Events />
            <Footer />
          </React.Fragment>
        }/>
        <Route path='/officers' element={
          //put components inside
          <React.Fragment>
            <Header />
            <Officers />
            <Footer />
          </React.Fragment>
        }/>
        <Route path='/settings' element={
          // put components inside
          <React.Fragment>
            <Header />
            <Settings />
            <Footer />
          </React.Fragment>
        }/>
        
        <Route path='*' element={<ErrorPage />}/>
        

      </Routes>

    </Router>
  );
}

export default App;
