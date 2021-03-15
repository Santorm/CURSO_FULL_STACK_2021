import Part from "./Part";
const Content = (props) => {
  const items = props.parts;
  const listItems = items.map((item) => (
    <Part title={item.title} exercises={item.exercises} />
  ));
  return <> {listItems} </>;
};

export default Content;
