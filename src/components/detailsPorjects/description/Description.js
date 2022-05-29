export default function Description(props) {
  const ListItems = () => {
    const ListComponent = [];
    for (const element of props.info_description) {
      const limitedDescription = element.description.substring(0, 300);
      ListComponent.push(<p key={element.name}>{limitedDescription}</p>);
    }
    return ListComponent;
  };

  return (
    <div className="background-blue  description">
      <h1 className="center">DESCRIPTION</h1>
      <div className="description__wrapper ">{ListItems()}</div>
    </div>
  );
}
