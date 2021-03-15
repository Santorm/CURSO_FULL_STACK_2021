const Total = (props) => {
  console.log("total: ", props);
  return (
    <>
      <p>
        Number of exercises: {props.numberExercises} <br />
        Total: {props.total}
      </p>
    </>
  );
};

export default Total;
