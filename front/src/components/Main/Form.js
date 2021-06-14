// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './main.scss';

const Form = ({ formInput, handleInputChange, handleFormSubmit, errorMsg }) => (
  <div className="newMember">
    <h2 className="newMember__title">Ajouter un(e) Argonaute</h2>
    <form
      className="newMember__form"
      onSubmit={(event) => {
        event.preventDefault();
        handleFormSubmit(formInput);
      }}
    >
      <label htmlFor="name">Nom de l&apos;Argonaute</label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Charalampos"
        value={formInput}
        onChange={(event) => {
          handleInputChange(event.target.value);
        }}

      />
      <button type="submit">Envoyer</button>
    </form>
    {
      errorMsg
      && <div className="error">{errorMsg}</div>
    }
  </div >
);

Form.propTypes = {
  formInput: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  errorMsg: PropTypes.string.isRequired,
}

export default Form;
