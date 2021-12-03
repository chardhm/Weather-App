import React from 'react';
import './Cards.css';

import Card from './Card.jsx';

export default function Cards({cities, onClose}) {
  return (
    <div className='cards'>
      {cities.map(c => <Card
          key={c.id}
          id={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          /* img={c.icon} */
          icono={c.icono}
          weather={c.main}
          country={c.country}
          onClose={() => onClose(c.id)}
        /> )}
    </div>
  );
}
