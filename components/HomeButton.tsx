import React from "react";
import { HomeIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomeButton() {
  return (
    <Link href="/">
      <Button variant="purple" size="icon">
        <HomeIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <HomeIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Navigate to Home Page</span>
      </Button>
    </Link>
  );
}
