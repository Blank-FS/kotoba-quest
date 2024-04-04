"use client";
import React, { useState } from "react";
// shadcn
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
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
///////////////////////////////////////////////////////////////////////////
import { Pencil2Icon } from "@radix-ui/react-icons";
// Form + Validation ////////////////////////////////////////////////////////////////////////////////////////////////////
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// Zod Schema
const formSchema = z.object({
  id: z.string(),
  noun: z.string().min(2).max(10),
  meaning: z.string().min(2).max(30),
  kanji: z.string().max(10).optional(),
  category: z.string().min(1).max(30),
});

interface NounProps {
  id: string;
  noun: string;
  kanji?: string;
  meaning: string;
  category: string;
}

export function EditNoun({ id, noun, kanji, meaning, category }: NounProps) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: id,
      noun: noun,
      meaning: meaning,
      kanji: kanji,
      category: category,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/nouns", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      console.log(values);
      if (!response.ok) {
        throw new Error("Failed to edit noun");
      }
      setValid(true);
      window.location.reload();
    } catch (error) {
      console.error("Error editing noun:", error);
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
          <span className="sr-only">Edit Noun</span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="noun"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Noun</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. くるま" {...field} />
                  </FormControl>
                  <FormDescription>Enter the noun.</FormDescription>
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
                  <FormLabel>Kanji (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. 車" {...field} />
                  </FormControl>
                  <FormDescription>
                    Enter kanji for noun if applicable.
                  </FormDescription>
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
                    <Input placeholder="e.g. car" {...field} />
                  </FormControl>
                  <FormDescription>Enter meaning of the word.</FormDescription>
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
                        <SelectValue placeholder="Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="food">Food</SelectItem>
                        <SelectItem value="occupation">Occupation</SelectItem>
                        <SelectItem value="transportation">
                          Transportation
                        </SelectItem>
                        <SelectItem value="relationship">
                          Relationship
                        </SelectItem>
                        <SelectItem value="academics">Academics</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>Select noun category.</FormDescription>
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
