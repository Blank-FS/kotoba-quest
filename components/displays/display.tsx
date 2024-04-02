"use client";
import React from "react";
import { useState } from "react";
import MenuBar from "@/components/menu-bar";
import Section from "./section";

interface Props {
  access: string;
}

export default function Display({ access }: Props) {
  const [display, setDisplay] = useState<string>("nouns");

  const switchDisplay = (dis: string) => {
    setDisplay(dis);
  };

  return (
    <>
      <MenuBar switchDisplay={switchDisplay} display={display} />
      {display === "nouns" && (
        <Section className="w-full" type="noun" access={access} />
      )}
      {display === "adjectives" && (
        <Section className="w-full" type="adjective" access={access} />
      )}
      {display === "verbs" && (
        <Section className="w-full" type="verb" access={access} />
      )}
    </>
  );
}
