import { WordQuestion } from "@/constants";
import React from "react";

interface Props {
  type: string;
  className?: string;
  problem: any[];
}

export default function Question({ type, className, problem }: Props) {
  const correctOption: WordQuestion = problem?.find(
    (unit: WordQuestion) => unit.correct
  );
  return (
    <p className={className}>
      {type === "translation" &&
        correctOption &&
        `What is the japanese word for "${correctOption.meaning}" ?`}
      {type === "meaning" &&
        correctOption &&
        `What is the meaning of "${`${correctOption.word}${
          correctOption.kanji ? ` (${correctOption.kanji})` : ""
        }`}" ?`}
      {!correctOption && "Loading..."}
    </p>
  );
}
