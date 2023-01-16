"use client";

import ctl from "@netlify/classnames-template-literals";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { TestDataType } from "../../types";

type Props = {
  testData: TestDataType;
};
interface OptionType {
  answer: string;
  correct: boolean;
}
interface QuestionType {
  question: string;
  options: OptionType[];
}

export default function TestQuiz({ testData }: Props) {
  // ---- HOOKS
  const [showQuiz, setShowQuiz] = useState<boolean>(false);
  const [question, setQuestion] = useState<QuestionType | null>(null);
  const [usedQuestions, setUsedQuestions] = useState<string[]>([]);
  const [optionSelected, setOptionSelected] = useState<boolean | null>(null);
  const [score, setScore] = useState<number>(0);
  const [yell, setYell] = useState<boolean>(false);

  // ---- FUNCTIONS
  const startQuiz = () => {
    pickQuestion();
    setShowQuiz(true);
  };
  const closeQuiz = () => {
    setShowQuiz(false);
  };

  const selectOption = (answer: boolean) => {
    setOptionSelected(answer);
    if (!answer && score > 0) {
      setScore((curr) => curr - 1);
      setYell(true);
    }

    if (answer) {
      setScore((curr) => curr + 1);
      setYell(false);
      pickQuestion();
    }
  };

  const generateQuestion =
    testData?.testData[Math.floor(Math.random() * testData?.testData.length)];

  const pickQuestion = () => {
    setQuestion(generateQuestion);
    setOptionSelected(null);
  };

  // ---- STYLES
  const s = {
    testBtn: ctl(`
        p-4
        w-full
        rounded
        shadow-md
        bg-gradient-to-r
        from-pink-600
        to-pink-400
        text-white
        text-lg
    `),
    quizContainer: ctl(`
        fixed
        z-50
        inset-0
        bg-pink-50
        px-4
        pt-12
        pb-20
        text-white
        flex
        flex-col
        items-center
        space-y-4
        
    `),
    closeBtn: ctl(`
        absolute
        top-6
        right-6
        text-pink-700
    `),
    questionSection: ctl(`
        relative
        bg-gradient-to-br
        from-indigo-700
        to-purple-500
        w-full
        text-center
        h-3/5
        rounded-xl
        grid
        place-items-center
        text-4xl
        font-bold
        tracking-wide
        capitalize
        shadow-xl
        ${yell && "shadow-red-500"}
    `),
    answersSection: ctl(`
        h-2/5
        w-full
        pt-12
        space-y-4
    `),
    optionBtn: ctl(`
        w-full
        p-4
        rounded
        text-lg
        font-semibold
        tracking-wider
    `),
    nextBtn: ctl(`
        disabled:bg-gray-500
        p-4
        absolute
        bottom-2
        right-4
        bg-indigo-600
    `),
    score: ctl(`
      absolute
      top-8
      left-1/2
      -translate-x-1/2
    `),
  };

  // ---- JSX
  return (
    <>
      <button
        className={s.testBtn}
        onClick={startQuiz}
        disabled={!testData || testData?.testData.length === 0}
      >
        {"Start test ( "}
        {testData?.pronombreTitle}
        {" )"}
      </button>

      {/* ----THE QUIZ---- */}
      {showQuiz && (
        <div className={s.quizContainer}>
          <button className={s.closeBtn} onClick={closeQuiz}>
            <MdClose size={"24px"} />
          </button>

          {/* ----QUESTION---- */}
          <section className={s.questionSection}>
            <h2 className={s.score}>{score}</h2>
            <h2>{question?.question}</h2>
          </section>

          {/* ----ANSWERS---- */}
          <section className={s.answersSection}>
            {question?.options.map((option) => {
              const answer = optionSelected && option.correct;
              return (
                <button
                  key={option.answer}
                  className={
                    s.optionBtn +
                    ` ${
                      answer
                        ? "bg-green-500"
                        : "bg-gradient-to-r from-pink-700 to-orange-700"
                    }`
                  }
                  onClick={() => selectOption(option.correct)}
                >
                  {option.answer}
                </button>
              );
            })}
          </section>

          {/* ----NEXT BUTTON---- */}
          {/* <button
            onClick={pickQuestion}
            className={s.nextBtn}
            disabled={!optionSelected}
          >
            Next
          </button> */}
        </div>
      )}
    </>
  );
}
