import 'antd/dist/antd.css';
// import logo from './logo.svg';
import './App.css';
import "./style"
import './pages/home/index'
import {GlobalStyle} from "./style";
import React, {Fragment} from "react";
import {BrowserRouter, Route} from "react-router-dom"
import { renderRoutes } from 'react-router-config';
import Routers from  "./routers"


function App() {
  return (
    <div className="App">
      {/*<Home/>*/}
      <GlobalStyle/>
        <BrowserRouter>
            {renderRoutes(Routers)}

        </BrowserRouter>

    </div>
  );
}

export default App;
