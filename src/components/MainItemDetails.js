import React from 'react';
export default function MainItemDetails(props) {
  return (
    <div>
      <div>
        <h2>Project:</h2>
        <h1>{props.info.name}</h1>
        <img src={props.info.image} alt="uniswap icon" />
      </div>
    </div>
  );
}
