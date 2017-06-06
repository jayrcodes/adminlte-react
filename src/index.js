import './Vendor';
import React from 'react';
import ReactDOM from 'react-dom';

import Dashboard from './components/Dashboard';
import DataTables from './components/DataTables';
import TopNav from './components/TopNav';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div>
      <TopNav />

      <Route exact path="/" component={Dashboard}/>
      <Route path="/tables" component={DataTables}/>

      <Sidebar />
      <Footer />
    </div>
  </Router>
, document.getElementById('root'));
registerServiceWorker();

