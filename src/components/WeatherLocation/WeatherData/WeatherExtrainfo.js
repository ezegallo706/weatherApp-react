import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtrainfo = ({humidity, wind}) =>(
    <div className="WeatherExtrainfoCont">
       <span className="extrainfotext">{`Humedad: ${humidity} %`}</span>
       <span className="extrainfotext">{`Vientos: ${wind} wind`}</span>
    </div>
);

WeatherExtrainfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
};

export default WeatherExtrainfo;