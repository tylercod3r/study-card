// #region IMPORT
import HomeMainSection from "@/components/home-main-section";
import { QuestionType } from "@/lib/types";
import { getQuestionData } from "@/lib/utils";
import { FC } from "react";
// #endregion

// #region DATA
const getData = (): QuestionType[] => {
  const content = getQuestionData();
  const questions: QuestionType[] = [];

  content.forEach((item: unknown) => {
    const itemKnown = item as QuestionType;
    const question: QuestionType = {
      title: itemKnown.title,
      url: itemKnown.url,
      image: itemKnown.image,

      keywords: itemKnown.keywords,
      subKeywords: itemKnown.subKeywords,

      question: itemKnown.question,
      answer: itemKnown.answer,

      content: itemKnown.content,
    };
    questions.push(question);
  });

  return questions;
};
// #endregion

const HomePage: FC = () => {
  // #region VIEW
  return <HomeMainSection questions={getData()} />;
  // #endregion
};

export default HomePage;
