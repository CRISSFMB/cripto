import React from 'react';

export default function AsideItem(props) {
  return (
    <div className="AsideItem">
      <img
        className="AsideItem__image"
        src={props.info.image}
        alt=" its an icon"
      />
      <div>
        <h4 className="AsideItem__name">{props.info.name}</h4>
        <p className="AsideItem__rank">{props.info.alexa_rank}</p>
      </div>
    </div>
  );
}
