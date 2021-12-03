import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About.jsx';
import Ciudad from '../components/Ciudad.jsx';
import swal from 'sweetalert2';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){

          let iconoAnimado = document.getElementById('icono-animado');
          console.log(recurso.weather[0].main);
          switch (recurso.weather[0].main){

            case 'Thunderstorm':
                      iconoAnimado='animated/thunder.svg'
                      console.log('TORMENTA');
                      break;
                    case 'Drizzle':
                      iconoAnimado='animated/rainy-2.svg'
                      console.log('LLOVIZNA');
                      break;
                    case 'Rain':
                      iconoAnimado='animated/rainy-7.svg'
                      console.log('LLUVIA');
                      break;
                    case 'Snow':
                      iconoAnimado='animated/snowy-6.svg'
                        console.log('NIEVE');
                      break;                        
                    case 'Clear':
                        iconoAnimado='animated/day.svg'
                        let infoIcon = recurso.weather[0].icon;
                        let icn = infoIcon.substring(2,3);
                        if("d" === icn){
                          iconoAnimado='animated/day.svg'
                        } else {
                          iconoAnimado='animated/night.svg'
                        }
                        console.log(infoIcon);
                        console.log(infoIcon.substring(2,3));
                        console.log('LIMPIO');
                      break;
                    case 'Atmosphere':
                      iconoAnimado='animated/weather.svg'
                        console.log('ATMOSFERA');
                        break;  
                    case 'Clouds':
                        iconoAnimado='animated/cloudy-day-1.svg'
                        let infoIcon2 = recurso.weather[0].icon;
                        let icn2 = infoIcon2.substring(2,3);
                        if("d" === icn2){
                          iconoAnimado='animated/cloudy-day-1.svg'
                        } else {
                          iconoAnimado='animated/cloudy-night-1.svg'
                        }
                        console.log('NUBES');
                        break;  
                    default:
                      iconoAnimado='animated/cloudy-day-1.svg'
                      console.log(recurso.weather[0].main);

          }

          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            /* img: recurso.weather[0].icon, */
            icono: iconoAnimado,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            country: recurso.sys.country,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          }
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          swal.fire('','Ciudad no encontrada', 'error');
        }
      })
  };

  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  return (
    <div>
    <div className="App">
      <Route 
      path='/'
      render={() =><Nav onSearch={onSearch}/>}
      />
      <Route
      exact path='/'
      render={() => <Cards cities={cities} onClose={onClose}/>}
      />
      <Route
       path='/about'
       component={About}
      />
      <Route
       path='/ciudad/:ciudadId'
       render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)}/>}
      />
    </div>
    </div>
  );
}

export default App;
