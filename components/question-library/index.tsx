"use client";

// #region IMPORT
import { FC, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

import QuestionPanel from "./question-panel";
import { getRandomInteger } from "@/utils/math-utils";
import { nextButtonLabel } from "@/libs/texts";
import { QuestionType } from "@/types/types";
// import { questionType } from "@/types/types";
// #endregion

// #region TYPE
type QuestionLibraryProps = {
  questions: QuestionType[];
};
// #endregion

const QuestionLibrary: FC<QuestionLibraryProps> = ({ questions }) => {
  // #region HOOK - USE STATE
  const [index, setIndex] = useState(0);
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
    <section>
      {/* {props.props.projects?.map((project: any) => ( */}
      <button
        className="bg-green-800 p-4 w-full"
        onClick={() => {
          setIndex(getNewRandomInt());
        }}
      >
        {nextButtonLabel}
      </button>
      <QuestionPanel key={question.title} question={question} />
      {/* ))} */}
    </section>
    //   </motion.div>
    // </AnimatePresence>
  );
  // #endregion
};

export default QuestionLibrary;
