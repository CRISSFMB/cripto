import MainItem from './MainItem';

export default function Main(props) {
  const ListItems = () => {
    const ListComponent = [];
    for (const element of props.info_main) {
      ListComponent.push(<MainItem key={element.name} info={element} />);
    }
    return ListComponent;
  };

  return (
    <>
      <div>{ListItems()}</div>
    </>
  );
}
