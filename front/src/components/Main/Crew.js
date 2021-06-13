// == Import npm
import React from 'react';
import Loader from "react-loader-spinner";
import PropTypes from 'prop-types';


// == Import
import './main.scss';

const Crew = ({ members, isLoading }) => (
  <div className="crew">
    <h2 className="crew__title">Membres de l'équipage</h2>
    { isLoading
      && <Loader
        style={{ textAlign: 'center' }}
        type="Puff"
        color="#f76c6c"
        height={100}
        width={100}
      />
    }
    {!isLoading
      && <section className="crew__list">
        {
          members.map((member) => (
            <div key={member.id}
              className="crew__list__item"
            >
              {member.name}
            </div>
          ))
        }
      </section>
    }

  </div>
);

Crew.prototype = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })).isRequired,
  isLoading: PropTypes.bool.isRequired,
}

export default Crew;
