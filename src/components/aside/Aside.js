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
    <>
      <div>
        <h5>Alexa-Rank</h5>
        {ListItems()}
        <button>see more</button>
      </div>
    </>
  );
}
