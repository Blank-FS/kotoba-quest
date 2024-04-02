"use client";
import React, { useState } from "react";
// shadcn ui components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
// Radix ui edit icon
import { Pencil2Icon } from "@radix-ui/react-icons";
// Form + Validation
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// Zod Schema
const formSchema = z.object({
  id: z.string().min(1),
  word: z.string().min(2).max(30),
  meaning: z.string().min(2).max(30),
  kanji: z.string().max(10).optional(),
  type: z.string().min(1).max(30),
  category: z.string().min(1).max(30),
});
// Interface
import { WordType, GroupType } from "@/constants";
interface Props {
  groups: GroupType[];
  word: WordType;
  type: string;
}

export function EditWord({ word, groups, type }: Props) {
  // Capitalize first letter function
  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  // Group of current word
  const group: GroupType = groups.filter((obj) => obj.id === word.groupId)[0];
  // 1. Define form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: word.id,
      word: word.word,
      meaning: word.meaning,
      kanji: word.kanji ? word.kanji : undefined,
      type: type,
      category: group.category,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/words", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      console.log(values);
      if (!response.ok) {
        throw new Error("Failed to edit word");
      }
      setValid(true);
      window.location.reload();
    } catch (error) {
      console.error("Error editing word:", error);
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
          <Pencil2Icon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Pencil2Icon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Edit Word</span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="word"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Word</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. car" {...field} />
                  </FormControl>
                  <FormDescription>Enter the word.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Separator className="my-4" />
            <FormField
              control={form.control}
              name="meaning"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Meaning</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. くるま" {...field} />
                  </FormControl>
                  <FormDescription>Enter meaning of the word.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Separator className="my-4" />
            <FormField
              control={form.control}
              name="kanji"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{"Kanji (Optional)"}</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. 車" {...field} />
                  </FormControl>
                  <FormDescription>
                    Enter kanji for word if applicable.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Separator className="my-4" />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Category..." />
                      </SelectTrigger>
                      <SelectContent>
                        {groups.map((group: GroupType) => (
                          <SelectItem
                            key={`${group.category}-edit`}
                            value={group.category}
                          >
                            {capitalizeFirstLetter(group.category)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>Select word category.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Separator className="my-4" />
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setOpen(false)}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction type="submit">Confirm</AlertDialogAction>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
