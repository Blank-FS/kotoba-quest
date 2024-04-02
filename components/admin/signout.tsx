import React from "react";
import { auth, signOut } from "@/auth";
import { Button } from "../ui/button";
import { ExitIcon } from "@radix-ui/react-icons";
const Signout = async () => {
  const session = await auth();
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button type="submit" variant="purple" size="icon" className="">
        <ExitIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <ExitIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Sign out</span>
      </Button>
    </form>
  );
};

export default Signout;
