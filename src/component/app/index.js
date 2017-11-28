import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Navbar from '../navbar';
// import * as utils from '../.../lib/utils';
import Contact from '../contact';
import Menu from '../menu';
import Drinks from '../drinks';
import Gallery from '../gallery';
import Mailing from '../mailing';
import Directions from '../directions';
import Footer from '../footer';



class App extends React.Component {
  render() {
    return ( <div className = "application">
      <BrowserRouter >
        <div >
          <Navbar / >
             //HERO IMAGE
          <Route exact path = "/menu"
            component = { Menu }/> ;
          <Route exact path = "/drinks"
            component = { Drinks }/>
          <Route exact path = "/gallery"
            component = { Gallery }/> ;
          <Route exact path = "/contact"
            component = { Contact }/> ;
          <Footer / >
        </div> ;
      </BrowserRouter>
    </div>
    );
  }
}

export default App;
