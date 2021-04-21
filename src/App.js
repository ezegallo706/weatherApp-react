import React, { Component } from 'react';
import { Grid,Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Paper from '@material-ui/core/Paper';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer  from './containers/ForecastExtendedContainer';
import './App.css';


const cities = [
  'Buenos Aires,ar',
  'Mykonos,gr',
  'Honolulu,haw',
  'Helsinki,fi',
  'Budapest,hu',
  'Kuala Lumpur,my',
  'Quebec,ca',
  'Miami,us',
  'Bogotá,col',
  'Tel Aviv,il',
  'Ciudad de México,mx',
  'Madrid,es',
];

class App extends Component {

  render() {

    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12}>
              Título
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={5}>
              <LocationListContainer cities={cities}>
              </LocationListContainer>
          </Col>
          <Col xs={12} md={7}>
            <Paper zdepth={4}>
              <div className="detail">
                <ForecastExtendedContainer></ForecastExtendedContainer>
              </div>
            </Paper>
          </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;