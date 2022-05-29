import { Card } from './Card';

export default function Statistics(props) {
  const ListItems = () => {
    const ListComponent = {};
    for (const element of props.info_statistics) {
      ListComponent['forks'] = (
        <span key={element.id + 0}>
          <p>{element.forks}</p>
        </span>
      );
      ListComponent['stars'] = (
        <span key={element.id + 1}>
          <p>{element.stars}</p>
        </span>
      );
      ListComponent['subscribers'] = (
        <span key={element.id + 2}>
          <p>{element.subscribers}</p>
        </span>
      );
      ListComponent['total_issues'] = (
        <span key={element.id + 3}>
          <p>{element.total_issues}</p>
        </span>
      );
      ListComponent['pull_requests_merged'] = (
        <span key={element.id + 4}>
          <p>{element.pull_requests_merged}</p>
        </span>
      );
      ListComponent['pull_request_contributors'] = (
        <span key={element.id + 5}>
          <p>{element.pull_request_contributors}</p>
        </span>
      );
      ListComponent['closed_issues'] = (
        <span key={element.id + 6}>
          <p>{element.closed_issues}</p>
        </span>
      );

      ListComponent['market_cap_rank'] = (
        <span key={element.id + 7}>
          <p>{element.market_cap_rank}</p>
        </span>
      );
      ListComponent['coingecko_rank'] = (
        <span key={element.id + 8}>
          <p>{element.coingecko_rank}</p>
        </span>
      );
      ListComponent['coingecko_score'] = (
        <span key={element.id + 9}>
          <p>{element.coingecko_score}</p>
        </span>
      );
      ListComponent['developer_score'] = (
        <span key={element.id + 10}>
          <p>{element.developer_score}</p>
        </span>
      );
    }
    return ListComponent;
  };

  return (
    <div className="statistics grid-statistics ">
      <Card ListItems={ListItems} subtitle="ITEMS" results="RESULTS" />
    </div>
  );
}
