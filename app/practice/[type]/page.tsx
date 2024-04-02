import PracticeDisplay from "@/components/practice/practice-display";
import React from "react";

const page = ({ params }: { params: { type: string } }) => {
  return (
    <>
      <PracticeDisplay amount={10} type={params.type} />
    </>
  );
};

export default page;
