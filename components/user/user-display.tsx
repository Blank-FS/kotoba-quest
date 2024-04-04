"use client";
import React from "react";
import { useState, useEffect } from "react";
import NounDisplay from "@/components/displays/noun-display";
import MenuBar from "@/components/menu-bar";
import AdjectiveDisplay from "../displays/adjective-display";
import VerbDisplay from "../displays/verb-display";

export default function UserDisplay() {
  const [display, setDisplay] = useState<string>("nouns");

  const switchDisplay = (dis: string) => {
    setDisplay(dis);
  };

  return (
    <>
      <MenuBar switchDisplay={switchDisplay} display={display} />
      {display === "nouns" && <NounDisplay type="user" />}
      {display === "adjectives" && <AdjectiveDisplay />}
      {display === "verbs" && <VerbDisplay />}
    </>
  );
}
