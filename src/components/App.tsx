import {useEffect, useState} from 'react'
import logo from '../assets/img/logo.svg'
import '../assets/style/App.scss'
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function App() {

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer className="footer" />
    </div>
  )
}

export default App
