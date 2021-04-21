import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
// import transformForecast from './../services/transformForecast';



// const days = [
//     'Lunes',
//     'martes',
//     'Miércoles',
//     'Jueves',
//     'Viernes',
//     'Viernes',
//   ];

//   const data = {
//     temperature: 10,
//     humidity: 20,
//     weatherState: 'normal',
//     wind: 'normal'
// }

// const api_key = "6ffa7c630a5cc64b1510c97a030502bb";
// const url = "http://api.openweathermap.org/data/2.5/forecast";

const renderForecastItemDays = (forecastData) => {
    return forecastData.map( forecast => (
            <ForecastItem 
                key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay} 
                hour={forecast.hour} 
                data={forecast.data}>
            </ForecastItem>));
}

const renderProgress = () => {
    return <h5>cargando pronostico extendido...</h5> ;
}

const ForecastExtended = ({city, forecastData}) => (

            <div>
               <h5 className="forecast-title">Pronóstico exendido  para {city}</h5> 
               {forecastData ? 
                renderForecastItemDays(forecastData) :
                renderProgress()}
            </div>
);

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array.isRequired,
};

export default ForecastExtended;