"use client";
import React, { useState } from "react";
// shadcn ui components
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
// Radix ui delete icon
import { TrashIcon } from "@radix-ui/react-icons";
import { Separator } from "../ui/separator";
// Form + Validation
interface Props {
  id: string;
}

export function DeleteWord({ id }: Props) {
  async function handleClick(wid: string) {
    try {
      const response = await fetch("/api/words", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: wid }),
      });
      console.log(wid);
      window.location.reload();
      if (!response.ok) {
        throw new Error("Failed to delete word");
      }
      setValid(true);
    } catch (error) {
      console.error("Error deleting word:", error);
    }
  }
  // useStateLogic
  const [open, setOpen] = useState(false);
  const [valid, setValid] = useState(false);
  const openForm = () => {
    setOpen(true);
  };
  const closeForm = () => {
    if (valid) {
      setOpen(false);
      setValid(false);
    }
  };

  return (
    <AlertDialog open={open}>
      <AlertDialogTrigger asChild onClick={openForm}>
        <Button variant="purple" size="icon">
          <TrashIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <TrashIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Delete Word</span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <Button variant="link">Confirm Deletion?</Button>
        <Separator />
        <AlertDialogFooter>
          <div className="w-full flex justify-between">
            <AlertDialogCancel onClick={() => setOpen(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={() => handleClick(id)}>
              Confirm
            </AlertDialogAction>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
