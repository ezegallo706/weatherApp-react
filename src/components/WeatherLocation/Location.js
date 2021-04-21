import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Location = ( {city} ) => {    //destructuring
    return (
    <div className="locationCont">
        <h4>{city}</h4>
    </div>
)
};

Location.propTypes = {
    city: PropTypes.string.isRequired
};

export default Location;

