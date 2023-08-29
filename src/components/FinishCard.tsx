import { FunctionComponent } from "react";

interface FinisCard {
  teacher: {
    id: string;
    name: string;
    message: string;
  };
}

const FinishCard: FunctionComponent<FinisCard> = ({ teacher }) => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center text-center">
      <h1 className="text-l md:text-2xl">{`Gratulálok, te ${teacher.name} lennél!`}</h1>
      <h1 className="text-base md:text-xl">{teacher.message}</h1>
    </div>
  );
};

export default FinishCard;
