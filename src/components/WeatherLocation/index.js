import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import transformWeather  from './../../services/transformWeather';
import Location  from './Location';
import WeatherData  from './WeatherData';

const api_key = "6ffa7c630a5cc64b1510c97a030502bb";
const url = "http://api.openweathermap.org/data/2.5/weather";


class WeatherLocation extends Component{
    constructor({city}){
        super();
        this.state = {
            city,
            data: null
        };
    }

    handleUpdateClick = () =>{
      
    }

    componentWillMount(){
        const {city} = this.state;
        const api_weather = `${url}?q=${city}&appid=${api_key}`;
        fetch(api_weather).then(data => {
            console.log(data);
            return data.json();
        }).then( weather_data => {
            const data = transformWeather(weather_data);
            this.setState({data});
            console.log(weather_data);
        });
    }

    render = () =>{
    const {onweatherLocationClick}= this.props;
    const {city, data} = this.state;
    return (
    <div className="weatherLocationCont" onClick={onweatherLocationClick}>
       <Location city={city}/>
       {data ? <WeatherData data={data}/> : 
        <CircularProgress size={60} thickness={7}/>}
    </div>)
    };
}

WeatherLocation.propTypes = {
    city: PropTypes.string,
    onweatherLocationClick: PropTypes.func
};

export default WeatherLocation;