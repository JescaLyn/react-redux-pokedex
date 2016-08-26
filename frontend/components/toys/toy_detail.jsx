import React from 'react';

export default ({ toy }) => (
  <section className="toys">
    <ul>
      <img src={toy.image_url} alt=""/>
      <li><h2>{toy.name}</h2></li>
      <li>Happiness: {toy.happiness}</li>
      <li>Price: {toy.price}</li>
    </ul>
  </section>
);
