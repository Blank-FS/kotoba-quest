import React from "react";
import { Badge } from "@/components/ui/badge";

interface Props {
  index: number;
  className?: string;
}

export default function ProblemBadge({ index, className }: Props) {
  return (
    <>
      <div className="hidden sm:block">
        <Badge variant="purple" className={className}>
          {`Problem ${index}`}
        </Badge>
      </div>
      <Badge variant="purple" className={`sm:hidden ${className}`}>
        {index}
      </Badge>
    </>
  );
}
