import React, { FC, useState } from "react";

const Answer: FC = () => {
  const [answer, toggleAnswer] = useState(false);
  const theme = {
    light: "border-black hover:bg-black hover:text-white",
  };
  return (
    <div className="mx-auto">
      {answer ? (
        <h1 className="text-6xl">No.</h1>
      ) : (
        <button
          onClick={() => toggleAnswer(true)}
          className={`p-3 uppercase font-semibold border-2 ${theme.light}`}
        >
          reveal answer
        </button>
      )}
    </div>
  );
};

export default Answer;
