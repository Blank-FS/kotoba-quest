import PracticeDisplay from "@/components/practice/practice-display";
import React from "react";

const page = ({ params }: { params: { type: string } }) => {
  return (
    <>
      <PracticeDisplay amount={5} type={params.type} />
    </>
  );
};

export default page;
