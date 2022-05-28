import ListItem from './ListItem';

export default function List(props) {
  const ListItems = () => {
    const ListComponent = [];
    for (const element of props.info_main_list) {
      ListComponent.push(<ListItem key={element.name} info={element} />);
    }
    return ListComponent;
  };

  return <div className="list">{ListItems()}</div>;
}
