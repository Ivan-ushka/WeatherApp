import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Home from "./pages/home/home";
import 'semantic-ui-css/semantic.min.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter} from "react-router-dom";
import Routing from "./routes/routing";
import Store from "./store/store";

const store = new Store();
// import About from "./pages/about/about";

export const Context = createContext({
    store,
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Context.Provider value={{store}}>
    <BrowserRouter>
        <Routing />
    </BrowserRouter>
    </Context.Provider>

  // </React.StrictMode>
);



