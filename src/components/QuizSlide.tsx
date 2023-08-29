import { FunctionComponent } from "react";

import QuestionComponent from "./QuestionComponent";

interface QuizSlideProps {
  question: string;
  options: {
    teacherId: string;
    text: string;
    value: number;
  }[];
  stateUpdater: any;
}

const QuizSlide: FunctionComponent<QuizSlideProps> = ({
  question,
  options,
  stateUpdater,
}) => {
  return (
    <div className="flex gap-4 flex-col">
      <h1 className="flex justify-center text-l md:text-xl text-center">
        {question}
      </h1>
      {options.map((option) => (
        <div
          key={option.teacherId}
          className="border-2 border-white p-2 rounded-xl"
        >
          <QuestionComponent
            text={option.text}
            teacherId={option.teacherId}
            value={option.value}
            clickEvent={(teacherId: string, value: number) => {
              stateUpdater(teacherId, value);
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default QuizSlide;
