"use client";
import React from "react";
import { useState, useEffect } from "react";
//import constants
import { NounType, categories } from "@/constants";
//
import CreateNoun from "@/components/admin/create-noun";
import Display from "../displays/display";

export default function AdminDisplay() {
  const [nouns, setNouns] = useState<NounType[] | null>(null);

  useEffect(() => {
    fetch("/api/nouns")
      .then((res) => res.json())
      .then((data) => {
        setNouns(data.data);
      });
  }, []);

  return <Display type="admin" />;
}
