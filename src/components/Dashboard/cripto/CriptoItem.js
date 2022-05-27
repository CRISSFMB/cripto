import React from 'react';

export default function CriptoItem(props) {
  return (
    <div className="cripto-item">
      <h2 className="cripto-item__title">Project:</h2>
      <h1 className="cripto-item__name">{props.info.name}</h1>
      <img
        className="cripto-item__image"
        src={props.info.image}
        alt="uniswap icon"
      />
    </div>
  );
}
