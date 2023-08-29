"use client";

import { NextPage } from "next";
import QuizSlide from "@/components/QuizSlide";
import { teacherData } from "@/data/teachers";
import { useEffect, useState } from "react";
import {
  slide0,
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
} from "@/data/questions/slides";
import FinishCard from "@/components/FinishCard";
const teacherList: any = {};

teacherData.map((teacher) => {
  teacherList[teacher.id] = 0;
});

const questionSlides = [slide0, slide1, slide2, slide3, slide4, slide5];

const Quiz: NextPage = () => {
  const [teacherState, setTeacherState] = useState(teacherList);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [resultTeacher, setResultTeacher] = useState({});
  const handleQuestionClicked = (teacherId: string, value: number) => {
    const newValue = teacherState[teacherId] + value;
    setTeacherState({ ...teacherState, [teacherId]: newValue });
    setCurrentSlide(currentSlide + 1);
  };

  useEffect(() => {
    if (currentSlide >= questionSlides.length - 1) {
      let max = 0;
      teacherData.map((teacher) => {
        if (teacherState[teacher.id] > max) {
          max = teacherState[teacher.id];
          setResultTeacher(teacher);
        }
      });
      setIsFinished(true);
    }
  }, [currentSlide]);
  return (
    <div className="p-8 text-3xl flex flex-col items-center justify-center">
      <div className="flex justify-center">
        <h1>Melyik tanár lennél?</h1>
      </div>
      <div className="md:w-2/3 py-16">
        {isFinished ? (
          <div className="flex justify-center items-center flex-col">
            <FinishCard
              teacher={
                resultTeacher as {
                  id: string;
                  name: string;
                  message: string;
                }
              }
            />
          </div>
        ) : (
          <QuizSlide
            question={questionSlides[currentSlide].question}
            options={questionSlides[currentSlide].options}
            stateUpdater={handleQuestionClicked}
          />
        )}
      </div>
    </div>
  );
};

export default Quiz;
