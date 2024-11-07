"use client";
import React from "react";
import { useState } from "react";
import MenuBar from "@/components/menu-bar";
import Section from "./section";
import { categoryMap, dataMap } from "@/constants/staticData";
import { WordType, GroupType } from "@/constants";

interface Props {
  access: string;
}

export default function Display({ access }: Props) {
  const initialDisplay = "noun";
  const [display, setDisplay] = useState<string>(initialDisplay);
  const [words, setWords] = useState<WordType[]>(dataMap.get(initialDisplay));
  const [groups, setGroups] = useState<GroupType[]>(
    categoryMap.get(initialDisplay)
  );

  const switchDisplay = (dis: string) => {
    setDisplay(dis);
    setWords(dataMap.get(dis));
    setGroups(categoryMap.get(dis));
    console.log(dis);
  };

  return (
    <>
      <MenuBar switchDisplay={switchDisplay} display={display} />
      <Section
        className="w-full"
        type={display}
        access={access}
        words={words}
        groups={groups}
        error="Error getting data"
      />
    </>
  );
}
