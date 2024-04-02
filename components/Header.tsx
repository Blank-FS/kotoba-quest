import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ModeToggle } from "@/components/mode-toggle";
import { Ballet } from "next/font/google";
import HomeButton from "@/components/home-button";
import Link from "next/link";

const ballet = Ballet({ subsets: ["latin"] });

export default function Header() {
  return (
    <header className="fixed top-0 w-full flex justify-between px-4 py-4 sm:py-6 bg-secondary z-10">
      <div className="flex items-center justify-center">
        <Link
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
        >
          <h1 className={`text-2xl font-bold sm:text-4xl ${ballet.className}`}>
            Kotoba
            <span className="text-transparent bg-clip-text bg-gradient-to-tl from-[#5a2e98] to-[#9159df] px-2">
              Quest
            </span>
          </h1>
        </Link>
      </div>
      <div className="flex gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <HomeButton />
            </TooltipTrigger>
            <TooltipContent>
              <p>Home</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <ModeToggle />
      </div>
    </header>
  );
}
