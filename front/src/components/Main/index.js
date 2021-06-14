// == Import npm
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// == Import
import Form from './Form';
import Crew from './Crew';
import './main.scss';

import {getMembers, addCrewMember } from 'src/utils/fetch';

const Main = () => {
  const [members, setMembers] = useState([]); // a place to store the members in state
  const [input, setInput] = useState(''); // input of our form for controlled field
  const [loading, setLoading] = useState(true); // loading bool initially set to true to show the spinner until we fetch the crew members
  const [errorMsg, setErrorMsg] = useState('');

  // function to update the value of our controlled field on change
  const updateInput = (newValue) => {
    setInput(newValue);
  }

  useEffect(async () => {
    // we want to load the members once on componentdidmount
   getMembers(setMembers, setLoading);
  }, [])

  return (
    <main className="main">
      <Form
        formInput={input}
        handleInputChange={updateInput}
        // we supply a callback that will try to post a crew member
        handleFormSubmit={addCrewMember(setMembers, setLoading, setInput, setErrorMsg)}
        errorMsg={errorMsg}
      />
      <Crew members={members} isLoading={loading} />
    </main>
  )
};


export default Main;
