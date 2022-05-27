import React from 'react';

export default function AsideItem(props) {
  return (
    <div>
      <img src={props.info.image} alt=" its an icon" />
      <div>
        <h4>{props.info.name}</h4>
        <p>{props.info.alexa_rank}</p>
      </div>
    </div>
  );
}
