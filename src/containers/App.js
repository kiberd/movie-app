import React from 'react';
import Header from 'components/Header';
import Layout from 'components/Layout';

import Search from './Search';
import Dashboard from './Dashboard';
import Bookmarks from './Bookmarks';


import { Switch } from 'react-router';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (

    <Layout>
      <Header />


      <Layout.Main>





      <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/search' component={Search} />
          <Route path='/bookmarks' component={Bookmarks} />
          
        </Switch>





      </Layout.Main>

    </Layout>


  );
}

export default App;