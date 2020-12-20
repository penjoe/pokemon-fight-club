
import React from "react";
import Header from "./header.js";
import Footer from "./footer.js";
import Fightclub from './fightclub.js';

import "bootstrap/dist/css/bootstrap.min.css";

import store from './redux/index.js';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store} >
      <Header />
      <Fightclub />
      <Footer />
    </Provider>
  );
};

export default App;