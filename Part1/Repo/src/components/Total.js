const Total = (props) => {
  return (
    <>
      <p>
        Parts: {props.countParts} <br />
        Number of exercises: {props.totalExercises}
      </p>
    </>
  );
};

export default Total;
