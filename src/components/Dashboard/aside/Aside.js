import AsideItem from './AsideItem';

export default function Aside(props) {
  const ListItems = () => {
    const ListComponent = [];
    for (const element of props.info_aside) {
      ListComponent.push(<AsideItem key={element.name} info={element} />);
    }
    return ListComponent;
  };

  return (
    <div className="aside">
      <h5 className="aside__title">Alexa-Rank</h5>
      <div className="aside-grid-items">{ListItems()}</div>
      <button className="btn aside__btn">see more</button>
    </div>
  );
}
