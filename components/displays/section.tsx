"use client";
import React from "react";
import { useState, useEffect } from "react";
import { WordType, GroupType } from "@/constants";
import Category from "./category";

interface Props {
  type: string;
  className?: string;
  access: string;
}

export default function Section({ type, className, access }: Props) {
  const [words, setWords] = useState<WordType[]>([]);
  const [groups, setGroups] = useState<GroupType[]>([]);

  useEffect(() => {
    fetch(`/api/public/words?type=${type}`)
      .then((res) => res.json())
      .then((data) => {
        setWords(data.arr);
      });
    fetch(`/api/public/groups?type=${type}`)
      .then((res) => res.json())
      .then((data) => {
        setGroups(data.arr);
      });
  }, []);

  return (
    <div className={className}>
      {groups.map((group: GroupType) => {
        // Filter words to be of the group
        const arr = words.filter((obj) => obj.groupId === group.id);
        return (
          <Category
            key={group.id}
            type={type}
            category={group.category}
            arr={arr}
            access={access}
            groups={groups}
          />
        );
      })}
    </div>
  );
}
