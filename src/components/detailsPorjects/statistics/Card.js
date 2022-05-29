import React from 'react';

export const Card = ({ ListItems, subtitle, results }) => {
  return (
    <>
      <div className="card background-blue">
        <h2 className="center">DEVELOPER PERFORMANCE</h2>
        <h4 className="center">{subtitle}</h4>
        <h4 className="center">{results}</h4>
        <div className="card__list  grid-list">
          <p>forks :</p>
          {ListItems().forks}
          <p>stars :</p>
          {ListItems().stars}
          <p>subscribers :</p>
          {ListItems().subscribers}
          <p>total issues :</p>
          {ListItems().total_issues}
          <p>PR contributors :</p>
          {ListItems().pull_request_contributors}
          <p>PR merged :</p>
          {ListItems().pull_requests_merged}
          <p>Closed Issues:</p>
          {ListItems().closed_issues}
          proyecto statistics
        </div>
      </div>
      <div className="card background-blue">
        <h2 className="center">PROJECT STATISTICS</h2>
        <h4 className="center">{subtitle}</h4>
        <h4 className="center">{results}</h4>
        <div className="card__list grid-list">
          <p>Market cap rank:</p>
          {ListItems().market_cap_rank}
          <p>Coingecko rank:</p>
          {ListItems().coingecko_rank}
          <p>Coingecko score:</p>
          {ListItems().coingecko_score}
          <p>Developer score:</p>
          {ListItems().developer_score}
        </div>
      </div>
    </>
  );
};
