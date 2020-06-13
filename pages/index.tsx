import React, { FC } from "react";
import Answer from "@/components/Answer";
import Question from "@/components/Question";

const IndexPage: FC = () => (
  <div className="flex h-screen">
    <div className="m-auto text-center sm:text-left">
      <div className="sm:max-w-2xl">
        <p className="italic font-light mx-3 sm:mx-auto">
          Guys I figured it out, after countless of hours farming carrots 🥕 in
          my backyard, ive finally found the answer to the biggest question that
          has boggled mankind since its creation...
        </p>
      </div>
      <Question />
      <Answer />
    </div>
  </div>
);

export default IndexPage;
