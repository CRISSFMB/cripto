import MainListItem from './MainListItem';

export default function MainList(props) {
  const ListItems = () => {
    const ListComponent = [];
    for (const element of props.info_main_list) {
      ListComponent.push(<MainListItem key={element.name} info={element} />);
    }
    return ListComponent;
  };

  return (
    <>
      <div>{ListItems()}</div>
    </>
  );
}
