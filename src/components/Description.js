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
    <>
      <h1>DESCRIPTION</h1>
      {ListItems()}
    </>
  );
}
