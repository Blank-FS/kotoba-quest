"use client";
import React from "react";
import { useState, useEffect } from "react";
//import constants
import { NounType, categories } from "@/constants";
import NounSection from "@/components/noun-section";
import CreateNoun from "../admin/create-noun";

interface Props {
  type: string;
}

export default function NounDisplay({ type }: Props) {
  const [nouns, setNouns] = useState<NounType[] | null>(null);

  useEffect(() => {
    fetch("/api/nouns")
      .then((res) => res.json())
      .then((data) => {
        setNouns(data.data);
      });
  }, []);

  return (
    <>
      {type === "admin" && (
        <div className="flex flex-col sm:flex-row justify-end items-center w-full">
          <CreateNoun />
        </div>
      )}
      {categories.map((category: string, index: number) => {
        const section = nouns
          ? nouns.filter((noun) => noun.category === category)
          : null;
        // Sort the array by alphebetical order of the noun's meaning
        section?.sort((a: NounType, b: NounType) => {
          const meaningA = a.meaning.toLowerCase();
          const meaningB = b.meaning.toLowerCase();
          let index = 0;
          while (index < meaningA.length && index < meaningB.length) {
            if (meaningA[index] < meaningB[index]) {
              return -1; // 'a' should come before 'b'
            }
            if (meaningA[index] > meaningB[index]) {
              return 1; // 'a' should come after 'b'
            }
            index++; // Move to the next letter if the current letters are equal
          }
          // If all common letters are equal, shorter meaning comes first
          return meaningA.length - meaningB.length;
        });
        return (
          <NounSection
            key={category}
            nouns={section}
            category={category}
            type={type}
          />
        );
      })}
    </>
  );
}
