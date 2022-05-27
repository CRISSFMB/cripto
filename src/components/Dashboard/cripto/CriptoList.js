import CriptoItem from './CriptoItem';

export default function CriptoList(props) {
  const ListItems = () => {
    const ListComponent = [];
    for (const element of props.info_main) {
      ListComponent.push(<CriptoItem key={element.name} info={element} />);
    }
    return ListComponent;
  };

  return <div className="cripto-list">{ListItems()}</div>;
}
