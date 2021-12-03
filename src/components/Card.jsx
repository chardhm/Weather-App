import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import '../animated/cloudy-day-1.svg';


export default function Card ({min, max, name, img, onClose, id, country, icono}) {
    return (
      <div className="card">
        <div id="closeIcon" className="row">
            <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
        </div>
        <div className="card-body">
          <Link to={`/ciudad/${id}`}>
          <h5 className="card-title">{name}, {country}</h5>
          </Link>
            <div className="Clima">
              <img className="icono" src={icono}/* src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} */ width="100" height="100" alt="" />
            </div>
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p className="colormin">Min</p>
              <p className="colormin2">{min}ºC</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p className="colormax">Max</p>
              <p className="colormax2">{max}ºC</p>
            </div>
          </div>
        </div>
      </div>
    );
};
