"use client";

// #region IMPORT
import { FC, useState, useRef, useEffect } from "react";
import QuestionPanel from "./question-panel";
import {
  getNextNumber,
  getPreviousNumber,
  getRandomInteger,
} from "@/lib/utils-math";
import { nextQuestionButtonLabel } from "@/lib/labels";
import { QuestionType } from "@/lib/types";
// #endregion

// #region TYPE
type QuestionLibraryProps = {
  questions: QuestionType[];
};
// #endregion

const HomeMainSection: FC<QuestionLibraryProps> = ({ questions }) => {
  // #region HOOK - USE STATE
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  // #endregion

  // #region VARIABLE
  const questionCount = questions.length;
  const question = questions[index];

  const buttonRef = useRef<HTMLButtonElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  // #endregion

  // #region HOOK - USE EFFECT
  useEffect(() => {
    divRef.current?.focus();
  }, []);
  // #endregion

  // #region METHOD
  const getNewRandomInt = () => {
    let randomIndex = -1;
    while (randomIndex < 0 || randomIndex == index) {
      randomIndex = getRandomInteger(0, questionCount);
    }

    return randomIndex;
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    divRef.current?.focus();

    switch (event.code) {
      case "ArrowLeft":
        setIndex(getNextNumber(0, questionCount - 1, index));
        break;
      case "ArrowRight":
        setIndex(getPreviousNumber(0, questionCount - 1, index));
        break;
      case "Space":
        setShowAnswer(!showAnswer);
        break;
      case "Enter":
        setIndex(getNewRandomInt());
        break;
    }
  };
  // #endregion

  // #region VIEW
  return (
    <main onKeyDown={keyDownHandler} tabIndex={0} ref={divRef}>
      <button
        ref={buttonRef}
        className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-10.5 me-2 mb-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full my-4 p-4"
        onClick={() => {
          setIndex(getNewRandomInt());
        }}
      >
        {nextQuestionButtonLabel}
      </button>
      <QuestionPanel forceShowAnswer={showAnswer} question={question} />
    </main>
  );
  // #endregion
};

export default HomeMainSection;
