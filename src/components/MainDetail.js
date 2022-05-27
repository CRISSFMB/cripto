import MainItemDetails from './MainItemDetails';

export default function MainDetail(props) {
  const ListItems = () => {
    const ListComponent = [];
    for (const element of props.info_main) {
      ListComponent.push(<MainItemDetails key={element.name} info={element} />);
    }
    return ListComponent;
  };

  return (
    <>
      <div>{ListItems()}</div>
    </>
  );
}
