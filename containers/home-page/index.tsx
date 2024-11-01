// #region IMPORT
import QuestionLibrary from "@/components/question-library";
import { getQuestionData } from "@/utils/content-utils";
import { FC } from "react";
// #endregion

const HomePage: FC = () => {
  // #region VIEW
  return (
    <section>
      <QuestionLibrary questions={getQuestionData()} />
    </section>
  );
  // #endregion
};

export default HomePage;
