import React from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  content: string;
  onClick: (str: string) => void;
  display: string;
  value: string;
}

export default function MenuBadge({
  className,
  content,
  onClick,
  display,
  value,
}: Props) {
  return (
    <Badge
      variant={display === value ? "purple" : "secondary"}
      className={className}
      onClick={() => onClick(value)}
    >
      {content}
    </Badge>
  );
}
