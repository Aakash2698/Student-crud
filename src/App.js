import React from "react";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Component/About/About";
import Authors from "./Component/Authors/Authors";
import AddAuthor from "./Component/AddAuthors/AddAuthor";
import UpdateAuthor from "./Component/UpdateAuthor/UpdateAuthor";
import ManageAuthor from "./Component/ManageAuthor/ManageAuthor";
import {Provider} from 'react-redux';
import configureStore from './Store/Store';

function App() {
  return ( 
    <Provider store={configureStore()}>
     <Router> 
      <Navbar/>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Authors" component={Authors} />
        <Route exact path="/ManageAuthor" component={ManageAuthor}/>
        <Route exact path="/UpdateAuthor/:id" render={props=>(
          <UpdateAuthor{...props}/>
        )}/>
        <Route exact path="/AddAuthor" component={AddAuthor} />
      </Switch>
    </Router>
    </Provider>
 
  )
  
}

export default App;
