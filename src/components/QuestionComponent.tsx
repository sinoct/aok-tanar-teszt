import { FunctionComponent } from "react";

interface QuestionComponentProp {
  text: string;
  teacherId: string;
  value: number;
  clickEvent: any;
}

const QuestionComponent: FunctionComponent<QuestionComponentProp> = ({
  text,
  teacherId,
  value,
  clickEvent,
}) => {
  return (
    <div
      className="cursor-pointer text-base md:text-l"
      onClick={() => {
        clickEvent(teacherId, value);
      }}
    >
      {text}
    </div>
  );
};
export default QuestionComponent;
