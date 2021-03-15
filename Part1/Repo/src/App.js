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

  const { totalSum, numberExercises } = (() => {
    let sum = 0;
    let countExercises = 0;
    const key = "exercises";
    parts.forEach((part) => {
      if (part.hasOwnProperty(key)) {
        countExercises++;
        sum += part[key];
      }
    });
    return { totalSum: sum, numberExercises: countExercises };
  })();

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={totalSum} numberExercises={numberExercises} />
    </div>
  );
};

export default App;
