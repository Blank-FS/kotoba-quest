import React from "react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import MenuBadge from "./menu-badge";

interface Props {
  className?: string;
  switchDisplay: (str: string) => void;
  display: string;
}

export default function MenuBar({ className, switchDisplay, display }: Props) {
  const style = "w-[30%] flex justify-center font-bold p-2";

  return (
    <div
      className={cn(
        "p-2 border border-secondary rounded-full flex justify-between items-center gap-1 w-full sm:w-[50%] sm:h-auto",
        className
      )}
    >
      <MenuBadge
        className={style}
        content="Nouns"
        value="nouns"
        onClick={switchDisplay}
        display={display}
      />
      <Separator orientation="vertical" />
      <MenuBadge
        className={style}
        content="Adjectives"
        value="adjectives"
        onClick={switchDisplay}
        display={display}
      />
      <Separator orientation="vertical" />
      <MenuBadge
        className={style}
        content="Verbs"
        value="verbs"
        onClick={switchDisplay}
        display={display}
      />
    </div>
  );
}
