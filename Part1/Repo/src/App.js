import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      title: "Fundamentals of React",
      exercises: 10,
    },
    {
      title: "Using props to pass data",
      exercises: 7,
    },
    {
      title: "State of a component",
      exercises: 14,
    },
  ];

  const { totalExercises, countParts } = (() => {
    let sum = 0;
    let countExercises = 0;
    const key = "exercises";
    parts.forEach((part) => {
      if (part.hasOwnProperty(key)) {
        countExercises++;
        sum += part[key];
      }
    });
    return { totalExercises: sum, countParts: countExercises };
  })();

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total totalExercises={totalExercises} countParts={countParts} />
    </div>
  );
};

export default App;
