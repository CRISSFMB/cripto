import AsideItem from '../../Dashboard/aside/AsideItem';

export default function AsideDetail(props) {
  const ListItems = () => {
    const ListComponent = [];
    for (const element of props.info_aside) {
      ListComponent.push(<AsideItem key={element.name} info={element} />);
    }
    return ListComponent;
  };

  return (
    <div className="asideDetail background-blue">
      <h5 className="asideDetail__title center">Alexa-Rank</h5>
      <div className="asideDetail__items">{ListItems()}</div>
      <button className="asideDetail__btn btn">see more</button>
    </div>
  );
}
