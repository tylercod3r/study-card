// #region IMPORT
// import Image from "next/image";
import { useState } from "react";
import { QuestionType } from "@/types/types";
// #endregion

// #region TYPE
type Props = {
  question: QuestionType;
};
// #endregion

const QuestionPanel = (props: Props) => {
  // #region HOOK - USE STATE
  const [showAnswer, setShowAnswer] = useState(false);
  // #endregion

  // #region VARIABLE
  // const imagePath = `/images/projects/${props.question.image}`;
  // #endregion

  // #region VIEW
  return (
    <section className="p-5 m-4 border-2 rounded-r-lg border-slate-900">
      <h3>{props.question.title.toUpperCase()}</h3>
      <hr className="border-slate-600"></hr>
      <div>
        {props.question.keywords?.map((keyword: string) => (
          <p key={keyword} className="text-secondary text-cyan-500">
            {keyword.toUpperCase()}
          </p>
        ))}
      </div>

      <div className="text-slate-400">
        {props.question.subKeywords?.map((subKeyword: string) => (
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

      <p className="my-4 text-2xl">{props.question.question}</p>

      <button
        className="bg-blue-800 p-4 w-full my-10"
        onClick={() => {
          // console.log("length: " + props.props.projects.length);
          // const randomIndex = getRandomInteger(0, projectCount);
          // setIndex(randomIndex);
          setShowAnswer(!showAnswer);
          // console.log("rand: " + randomIndex);
        }}
      >
        SHOW
      </button>

      {showAnswer && (
        <p className="text-4xl text-blue-500">{props.question.answer}</p>
      )}
    </section>
  );
  // #endregion
};

export default QuestionPanel;
