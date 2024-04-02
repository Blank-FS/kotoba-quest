"use client";
import React, { useState, useEffect } from "react";
import { GroupType, TypeType } from "@/constants";
import { PlusIcon } from "@radix-ui/react-icons";
// Shadcn ui components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
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
// Form + Validation
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// Zod Schema
const formSchema = z.object({
  word: z.string().min(2).max(30),
  meaning: z.string().min(2).max(30),
  kanji: z.string().max(10).optional(),
  type: z.string().min(1).max(30),
  category: z.string().min(1).max(30),
});

export default function CreateWord() {
  const [groups, setGroups] = useState<GroupType[]>([]);
  const [types, setTypes] = useState<TypeType[]>([]);

  useEffect(() => {
    fetch(`/api/public/groups`)
      .then((res) => res.json())
      .then((data) => {
        setGroups(data.arr);
      });
    fetch(`/api/public/types`)
      .then((res) => res.json())
      .then((data) => {
        setTypes(data.arr);
      });
  }, []);

  // 1. Define form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: undefined,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch(`/api/words`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      console.log(values);
      if (!response.ok) {
        throw new Error("Failed to create word");
      }
      window.location.reload();
    } catch (error) {
      console.error("Error creating word:", error);
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

  useEffect(() => {
    form.resetField("category", { defaultValue: "Lmao" });
  }, [form.watch("type")]);

  return (
    <AlertDialog open={open}>
      <AlertDialogTrigger asChild onClick={openForm}>
        <Button variant="purple" size="icon" className="">
          <PlusIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <PlusIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Add Word</span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <AlertDialogHeader>
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
                name="kanji"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Kanji (Optional)</FormLabel>
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
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="type..." />
                        </SelectTrigger>
                        <SelectContent>
                          {types.map((item) => (
                            <SelectItem key={item.id} value={item.type}>
                              {item.type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormDescription>Select word type.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {form.watch("type") && (
                <>
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
                              <SelectValue placeholder="category..." />
                            </SelectTrigger>
                            <SelectContent>
                              {groups
                                .filter(
                                  (obj) =>
                                    obj.typeId ===
                                    types.filter(
                                      (temp) => temp.type === form.watch("type")
                                    )[0].id
                                )
                                .map((item) => (
                                  <SelectItem
                                    key={item.id}
                                    value={item.category}
                                  >
                                    {item.category}
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
                </>
              )}
              <Separator className="my-4" />
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel
                onClick={() => {
                  setOpen(false);
                  form.reset();
                }}
              >
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
