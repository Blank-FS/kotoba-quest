import { WordQuestion } from "@/constants";
import React from "react";
import Unit from "./unit";
interface Props {
  problem: WordQuestion[];
  onSelect: (id: string) => void;
  status: "correct" | "wrong" | "none";
  selectedOption?: string;
  disabled?: boolean;
  type: string;
}

export default function Choices({
  problem,
  onSelect,
  status,
  selectedOption,
  disabled,
  type,
}: Props) {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-between w-full">
      {problem.map((unit: WordQuestion, index: number) => {
        return (
          <Unit
            unit={unit}
            key={unit.id}
            selected={selectedOption === unit.id}
            status={status}
            type={type}
            disabled={disabled}
            onClick={() => onSelect(unit.id)}
            showCorrect={status === "wrong" ? unit.correct : false}
          />
        );
      })}
    </div>
  );
}
