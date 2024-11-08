"use client";
import React, { useState } from "react";
// Shadcn ui components /////////////////////////////////////////////////////////////////////////////////////////////////
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
// Form + Validation ////////////////////////////////////////////////////////////////////////////////////////////////////
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// Zod Schema
const formSchema = z.object({
  noun: z.string().min(2).max(10),
  meaning: z.string().min(2).max(30),
  kanji: z.string().max(10).optional(),
  category: z.string().min(1).max(30),
});

export default function CreateNoun() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      noun: "",
      meaning: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/nouns", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      console.log(values);
      if (!response.ok) {
        throw new Error("Failed to create noun");
      }
      window.location.reload();
    } catch (error) {
      console.error("Error creating noun:", error);
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
        <Button
          variant="purple"
          className="w-60 my-2 p-4 px-24 borderrounded-xl"
        >
          Add Word
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <AlertDialogHeader>
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
                    <FormDescription>
                      Enter meaning of the word.
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
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setOpen(false)}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction type="submit">Create</AlertDialogAction>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
