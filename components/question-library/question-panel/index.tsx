// #region IMPORT
// import Image from "next/image";
import { FC, useState } from "react";
import { QuestionType } from "@/types/types";
import Link from "next/link";
import { answerLabel } from "@/libs/labels";

// #endregion

// #region TYPE
type Props = {
  question: QuestionType;
  forceShowAnswer: boolean;
};
// #endregion

const QuestionPanel: FC<Props> = ({ question, forceShowAnswer }) => {
  // #region HOOK - USE STATE
  const [showAnswer, setShowAnswer] = useState(false);
  // #endregion

  // #region VARIABLE
  // const imagePath = `/images/projects/${props.question.image}`;
  // #endregion

  // #region VIEW
  return (
    <section className="p-5 m-4 border-2 rounded-r-lg border-slate-900">
      <h3>{question.title.toUpperCase()}</h3>
      <hr className="border-slate-600"></hr>
      <div>
        {question.keywords?.map((keyword: string) => (
          <p key={keyword} className="text-secondary text-cyan-500">
            {keyword.toUpperCase()}
          </p>
        ))}
      </div>

      <div className="text-slate-400">
        {question.subKeywords?.map((subKeyword: string) => (
          <p key={subKeyword}>{subKeyword.toUpperCase()}</p>
        ))}
      </div>

      {/* <a
        className="px-3 shadow-lg"
        href={props.project.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="rounded-lg shadow-lg"
          src={imagePath}
          width="270"
          height="230"
          alt={props.project.title}
        />
      </a> */}

      <p className="my-4 text-2xl">{question.question}</p>

      <button
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-10 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-full my-4"
        onClick={() => {
          setShowAnswer(!showAnswer);
        }}
      >
        {answerLabel}
      </button>

      {(showAnswer || forceShowAnswer) && (
        <section
          className="list-disc marker:text-blue-600"
          dangerouslySetInnerHTML={{ __html: question.content }}
        />
      )}
    </section>
  );
  // #endregion
};

export default QuestionPanel;
