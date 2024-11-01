"use client";

// #region IMPORT
import { FC, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

import QuestionPanel from "./question-panel";
import {
  getNextNumber,
  getPreviousNumber,
  getRandomInteger,
} from "@/utils/math-util";
import { nextQuestionButtonLabel } from "@/libs/labels";
import { QuestionType } from "@/types/types";
import { count } from "console";
// #endregion

// #region TYPE
type QuestionLibraryProps = {
  questions: QuestionType[];
};
// #endregion

const QuestionLibrary: FC<QuestionLibraryProps> = ({ questions }) => {
  // #region HOOK - USE STATE
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  // #endregion

  // #region VARIABLE
  const questionCount = questions.length;
  const question = questions[index];
  // #endregion

  // #region METHOD
  const getNewRandomInt = () => {
    let randomIndex = -1;
    while (randomIndex < 0 || randomIndex == index) {
      randomIndex = getRandomInteger(0, questionCount);
    }

    return randomIndex;
  };

  // onKeyDown handler function
  const keyDownHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.code) {
      case "ArrowLeft":
        setIndex(getNextNumber(0, questionCount - 1, index));
        break;
      case "ArrowRight":
        setIndex(getPreviousNumber(0, questionCount - 1, index));
        break;
      case "Enter":
        setShowAnswer(!showAnswer);
        break;
    }
  };
  // #endregion

  // #region VIEW
  return (
    // <AnimatePresence>
    //   <motion.div
    //     initial={{ opacity: 0, y: 15 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     exit={{ opacity: 0, y: 15 }}
    //     transition={{ delay: 0.25 }}
    //   >
    <div onKeyDown={keyDownHandler} tabIndex={0}>
      <section>
        {/* {props.props.projects?.map((project: any) => ( */}
        <button
          className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-10.5 me-2 mb-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full my-4 p-4"
          onClick={() => {
            setIndex(getNewRandomInt());
          }}
        >
          {nextQuestionButtonLabel}
        </button>
        <QuestionPanel forceShowAnswer={showAnswer} question={question} />
        {/* ))} */}
      </section>
    </div>
    //   </motion.div>
    // </AnimatePresence>
  );
  // #endregion
};

export default QuestionLibrary;
