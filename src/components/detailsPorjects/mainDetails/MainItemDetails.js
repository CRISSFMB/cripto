import React from 'react';
export default function MainItemDetails(props) {
  return (
    <div className="main-detail">
      <div className="background-blue main-detail__wrapper ">
        <h2 className="center">Project:</h2>
        <h1 className="center">{props.info.name}</h1>
        <img src={props.info.image} alt="uniswap icon" />
      </div>
    </div>
  );
}
