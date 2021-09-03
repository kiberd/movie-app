import React, { useState } from "react";
import Header from "components/Header";
import Layout from "components/Layout";

import Search from "./Search";
import Dashboard from "./Dashboard";
import Bookmarks from "./Bookmarks";
import WriteMemo from "./WriteMemo";
import { dark, light } from "lib/style-utils";

import { Switch } from "react-router";
import { HashRouter as Router, Route } from "react-router-dom";

import styled, { ThemeProvider } from "styled-components";
import { ModalProvider } from "styled-react-modal";

// Import the functions you need from the SDKs you need
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from "firebase/app";
import "firebase/performance";
import "firebase/firestore";
import "firebase/auth";



function App() {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBtxp7nTAlYFDoCfrIykGOrwSRWChE1LII",
    authDomain: "movie-app-216e1.firebaseapp.com",
    projectId: "movie-app-216e1",
    storageBucket: "movie-app-216e1.appspot.com",
    messagingSenderId: "312204621134",
    appId: "1:312204621134:web:cf56de8e925a35bf859a1f",
    measurementId: "G-XDNC4VCJPD",
  };

  // Initialize Firebase
  const firebaseApp  = firebase.initializeApp(firebaseConfig);

  const firebaseAppAuth = firebaseApp.auth();


  const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
  };


  const [darkMode, setDarkMode] = useState(false); // 테마 모드 세팅
  const theme = darkMode ? light : dark; // 테마 환경에 맞는 테마 컬러 가져오기.

  const toggleTheme = () => setDarkMode(darkMode ? false : true); // 테마 변경하기 이벤트

  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <Layout>
          <Header onToggleTheme={toggleTheme} />
          <Layout.Main>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/search" component={Search} />
              <Route path="/bookmarks" component={Bookmarks} />
            </Switch>
          </Layout.Main>
        </Layout>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
