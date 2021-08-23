import React, {useState} from 'react';
import Header from 'components/Header';
import Layout from 'components/Layout';

import Search from './Search';
import Dashboard from './Dashboard';
import Bookmarks from './Bookmarks';
import WriteMemo from './WriteMemo';
import {dark, light} from 'lib/style-utils';


import { Switch } from 'react-router';
import { HashRouter as Router, Route } from 'react-router-dom';

import styled, { ThemeProvider } from 'styled-components';

function App() {



  const [darkMode, setDarkMode] = useState(false); // 테마 모드 세팅
  const theme = darkMode ? light : dark; // 테마 환경에 맞는 테마 컬러 가져오기.

  const toggleTheme = () => setDarkMode(darkMode ? false : true); // 테마 변경하기 이벤트


  return (

    <ThemeProvider theme={theme}>
      <Layout>
        <Header onToggleTheme={toggleTheme} />


        <Layout.Main>





          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/search' component={Search} />
            <Route path='/bookmarks' component={Bookmarks} />

          </Switch>





        </Layout.Main>

      </Layout>
    </ThemeProvider>


  );
}

export default App;