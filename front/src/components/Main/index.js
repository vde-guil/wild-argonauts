// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
// == Import
import Form from './Form';
import Crew from './Crew';
import './main.scss';

const Main = ({ members, formInput, handleInputChange, handleFormSubmit, isLoading, errorMsg }) => (
  <main className="main">
    <Form
      formInput={formInput}
      handleInputChange={handleInputChange}
      handleFormSubmit={handleFormSubmit}
      errorMsg={errorMsg}
    />
    <Crew members={members} isLoading={isLoading} />
  </main>
);

Main.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })).isRequired,
  formInput: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string.isRequired,
}

export default Main;
