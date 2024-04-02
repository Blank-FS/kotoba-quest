"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useAudio } from "react-use";
import ProblemBadge from "./problem-badge";
import { Noun } from "@/constants";
import Choices from "./problem";
import Question from "./question";
// shadcn ui components
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Footer } from "@/components/practice/footer";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
//
import Link from "next/link";
import CircleProgressBar from "../circular-progress-bar";

interface PracticeDisplayProps {
  amount: number;
  type: string;
}

export default function PracticeDisplay({
  amount,
  type,
}: PracticeDisplayProps) {
  // Random type of question
  const modes: string[] = ["translation", "meaning"];
  function randomMode() {
    return modes[Math.floor(Math.random() * modes.length)];
  }
  // Sound Effects
  const [finishAudio] = useAudio({ src: "/finish.mp3", autoPlay: true });
  const [correctAudio, _c, correctControls] = useAudio({
    src: "/correct.wav",
  });
  const [incorrectAudio, _i, incorrectControls] = useAudio({
    src: "/incorrect.wav",
  });

  //States
  const [pset, setPset] = useState<any[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [correct, setCorrect] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string>();
  const [status, setStatus] = useState<"correct" | "wrong" | "none">("none");
  const [mode, setMode] = useState<string>(randomMode());

  useEffect(() => {
    fetch(`/api/public/pset?amount=${amount}&type=${type}`)
      .then((res) => res.json())
      .then((data) => {
        setPset(data.pset);
      });
  }, []);

  useEffect(() => {
    console.log(pset); // Log pset whenever it changes
  }, [pset]);

  const onNext = () => {
    pset && index < pset.length && setIndex(index + 1);
  };
  const onSelect = (id: string) => {
    if (status !== "none") return;

    setSelectedOption(id);
  };
  const onContinue = () => {
    // Don't continue if there is no option selected
    if (!selectedOption) return;
    // Continue to next problem if answer is status is already updated
    if (status !== "none") {
      onNext();
      setMode(randomMode());
      setStatus("none");
      setSelectedOption(undefined);
      return;
    }

    const correctOption: Noun = pset[index].find((unit: Noun) => unit.correct);

    if (correctOption && correctOption.id === selectedOption) {
      setStatus("correct");
      setCorrect((current) => current + 1);
      correctControls.play();
    } else {
      setStatus("wrong");
      incorrectControls.play();
    }
  };
  if (index >= amount)
    return (
      <>
        {" "}
        {finishAudio}
        <Card className="w-full sm:w-[400px] flex flex-col items-center my-4">
          <CardHeader>
            <CardTitle className="text-6xl">
              <Button variant="link">Score:</Button>
              <Separator className="my-4" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
              <CircleProgressBar
                percentage={(100 * correct) / amount}
                circleWidth={200}
              ></CircleProgressBar>
              <p className="text-6xl mt-4">{`${correct}/${amount}`}</p>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex flex-col items-center">
              {" "}
              <Separator className="my-4" />
              <Button
                variant="purple"
                className="w-60 my-4 p-4 borderrounded-xl flex justify-center"
              >
                <Link href="/practice">Return</Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </>
    );

  return (
    <>
      {incorrectAudio}
      {correctAudio}
      <div className="w-full border border-secondary p-4 rounded-xl">
        {pset && index >= 0 && index < pset.length ? (
          <>
            <div className="flex items-center justify-center gap-4 my-4">
              <Progress
                color="bg-gradient-to-r from-cyan-400 from-[30%] to-lime-500"
                className="sm:w-[60%] sm:justify-self-center"
                value={
                  pset.length === 0 ? 100 : ((index + 1) / pset.length) * 100
                }
              />
            </div>
            <Separator className="my-2" />
            <ProblemBadge className="my-4 p-2 px-4" index={index + 1} />
            <Question
              type={mode}
              className="flex justify-center p-4 sm:text-2xl font-bold"
              problem={pset[index]}
            />
            <Separator className="my-4" />
            <Choices
              problem={pset[index]}
              onSelect={onSelect}
              status={status}
              selectedOption={selectedOption}
              disabled={false}
              type={mode}
            />
          </>
        ) : (
          <div className="flex justify-center sm:text-2xl font-bold">
            Loading...
          </div>
        )}
        {/*<div className="flex justify-between">
        <Button
          onClick={() => {
            index > 0 ? setIndex(index - 1) : setIndex(0);
          }}
          variant="purple"
          className="my-4"
        >
          Prev
        </Button>
        <Button
          onClick={() => {
            pset && index < pset.length - 1
              ? setIndex(index + 1)
              : setIndex(pset ? pset.length - 1 : 0);
          }}
          variant="purple"
          className="my-4"
        >
          Next
        </Button>
        </div>*/}
        <Separator className="my-4" />
        <Footer
          disabled={!selectedOption}
          status={status}
          onCheck={onContinue}
        />
      </div>
    </>
  );
}
