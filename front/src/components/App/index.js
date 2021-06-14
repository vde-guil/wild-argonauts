// == Import npm
import React, { useEffect } from 'react';

// == Import
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Main from 'src/components/Main';
import './app.scss';



// == Composant
const App = () => {

  useEffect(async () => {
    document.title = 'Argonauts';
  }, [])

  return (<div className="app">
    <Header />
    <Main />
    <Footer />
  </div>
  );
}

// == Export
export default App;
