// == Import npm
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// == Import
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Main from 'src/components/Main';
import './app.scss';

const BASE_URL = 'https://wild-argonaut-vde-guil.herokuapp.com/api/';

// == Composant
const App = () => {

  const [members, setMembers] = useState([]); // a place to store the members in state
  const [input, setInput] = useState(''); // input of our form for controlled field
  const [loading, setLoading] = useState(true); // loading bool initially set to true to show the spinner until we fetch the crew members
  const [errorMsg, setErrorMsg] = useState('');

  // function to add a crew member in database
  const addCrewMember = async (newValue) => {
    // we set the loader to true to show spinner because we'll have to fetch the members once we add a new one
    setLoading(true);
    try {
      // we send a post request to server with axios.
      // We create the body of the request with newValue that is value from the controlled field we installed
      await axios.post(BASE_URL + 'argonaut', { name: newValue.trim()});
    
      // we empty the input value
      setInput('');
      // we empty the error message if there is still one from previous error
      setErrorMsg('');
      // we update the crew members
      await getMembers();

    } catch (error) {
      setErrorMsg(error.response.data);
    } finally {
      // everything is done, we can now hide the spinner
      setLoading(false);
    }
  }

  // function to update the value of our controlled field on change
  const updateInput = (newValue) => {
    setInput(newValue);
  }

  // 
  const getMembers = async () => {
    try {
      // we try to fetch the crew members from the api
      const { data } = await axios.get(BASE_URL + 'argonauts');
      // on succes we fill the state prop
      setMembers(data);
    } catch (error) { 
      console.log(error);
    } finally {
      // when the fetching is done, we stop the loader
      setLoading(false);
    }
  }

  useEffect(async () => {
    // we want to load the members once on componentdidmount
    getMembers();
  }, [])

  return (<div className="app">
    <Header />
    <Main
      members={members}
      formInput={input}
      handleInputChange={updateInput}
      handleFormSubmit={addCrewMember}
      isLoading={loading}
      errorMsg={errorMsg}
    />
    <Footer />
  </div>
  );
}

// == Export
export default App;
