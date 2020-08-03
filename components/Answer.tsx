import React, { FC, useState } from "react";

const Answer: FC = () => {
  const [answer, toggleAnswer] = useState(false);
  return (
    <div className="mx-auto">
      {answer ? (
        <h1 className="text-6xl capitalize">{([]+[]+[][[]])[(+!+[])]+(typeof ![])[(+!+[])]+`.`}</h1>
      ) : (
        <button
          onClick={() => toggleAnswer(true)}
          className="p-3 uppercase font-semibold border-2 border-primary hover:bg-primary hover:text-secondary"
        >
          reveal answer
        </button>
      )}
    </div>
  );
};

export default Answer;
