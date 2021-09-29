import React,{Component} from "react";
import { ReactDOM } from "react";
import { BrowserRouter, Switch , Route, Link} from 'react-router-dom';
import Home from "./components/Home";
import EditUser from "./components/EditUser";
import AddUser from "./components/AddUser";
import './App.css';
import {GlobalProvider} from './contacts/GlobalState';

const App = () => {

  
  return (
    <div  style={{maxWidth:'30rem',margin:'4rem auto', fontFamily: 'monospace,Helvatica'}}>
       <GlobalProvider>
       <BrowserRouter >
        <Switch>
             <Route exact path="/" component={Home} />
             <Route path="/add" component={AddUser} /> 
             <Route path="/edit/:id" component={EditUser}/>

        </Switch>
         </BrowserRouter>
               

       </GlobalProvider>
        </div>

  );
}

export default App;
