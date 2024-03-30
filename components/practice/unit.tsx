import { WordType } from "@/constants";
import React from "react";
import { Button } from "@/components/ui/button";
interface Props {
  unit: WordType;
  disabled?: boolean;
  status: "none" | "correct" | "wrong";
  selected: boolean;
  type: string;
  onClick: () => void;
  showCorrect: boolean;
}
export default function Unit({
  unit,
  disabled,
  status,
  selected,
  type,
  showCorrect,
  onClick,
}: Props) {
  return (
    <div
      onClick={() => {
        onClick();
      }}
      className="bg-gradient-to-br from-cyan-500 via-amber-500 to-violet-700 w-full sm:w-[48%] rounded-xl p-[2px]"
    >
      <Button
        variant="secondary"
        className={`p-8 rounded-xl text-center w-full border-tertiary border-b-2 active:border-b-0 ${
          selected && "bg-secondary/10 hover:bg-secondary/10"
        } ${
          selected &&
          status === "correct" &&
          "bg-gradient-to-br from-lime-300 to-lime-600"
        } ${
          selected &&
          status === "wrong" &&
          "bg-gradient-to-br from-rose-400 to-rose-700"
        } ${disabled && ""} ${
          showCorrect && "bg-gradient-to-br from-lime-300 to-lime-600"
        }`}
      >
        {type === "translation" &&
          `${unit.word}${unit.kanji ? ` (${unit.kanji})` : ""}`}
        {type === "meaning" && `${unit.meaning}`}
      </Button>
    </div>
  );
}
