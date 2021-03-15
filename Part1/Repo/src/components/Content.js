const Content = (props) => {
  const parts = props.parts;
  console.log("partsparts: ", parts);
  const listItems = parts.map((part) => (
    <p>
      {part.title} - {part.exercises}
    </p>
  ));
  console.log("listItems: ", listItems);
  return <> {listItems} </>;
};

export default Content;
