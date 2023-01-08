"use client";

import ctl from "@netlify/classnames-template-literals";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import data from "../../utils/pronombres/test_data.json";

interface OptionType {
  answer: string;
  correct: boolean;
}
interface QuestionType {
  question: string;
  options: OptionType[];
}

export default function TestQuiz() {
  // ---- HOOKS
  const [showQuiz, setShowQuiz] = useState<boolean>(false);
  const [question, setQuestion] = useState<QuestionType | null>(null);
  const [usedQuestions, setUsedQuestions] = useState<string[]>([]);
  const [optionSelected, setOptionSelected] = useState<boolean | null>(null);

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
  };

  const testQuestions = data.data[0].testData;
  const generateQuestion = testQuestions[Math.floor(Math.random() * 6)];

  const pickQuestion = () => {
    setQuestion(generateQuestion);
    setOptionSelected(null);
  };

  console.log(optionSelected);

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
        bg-gradient-to-br
        from-indigo-700
        to-purple-500
        w-full
        h-3/5
        rounded-xl
        grid
        place-items-center
        text-4xl
        font-bold
        tracking-wide
        capitalize
        shadow-xl
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
  };

  // ---- JSX
  return (
    <>
      <button className={s.testBtn} onClick={startQuiz}>
        Start test
      </button>
      {showQuiz && (
        <div className={s.quizContainer}>
          <button className={s.closeBtn} onClick={closeQuiz}>
            <MdClose size={"24px"} />
          </button>
          <section title="QUESTION" className={s.questionSection}>
            <p>{question?.question}</p>
          </section>
          <section title="ANSWERS" className={s.answersSection}>
            {question?.options.map((option) => {
              const answer = optionSelected && option.correct;
              return (
                <button
                  key={option.answer}
                  className={
                    s.optionBtn + ` ${answer ? "bg-green-500" : "bg-pink-700"}`
                  }
                  onClick={() => selectOption(option.correct)}
                >
                  {option.answer}
                </button>
              );
            })}
          </section>
          <button
            onClick={pickQuestion}
            className={s.nextBtn}
            disabled={!optionSelected}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}
