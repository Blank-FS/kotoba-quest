import React from "react";
//Shadcn ui components
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EditNoun } from "@/components/admin/edit-noun";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
// Interfaces
import { NounType } from "@/constants";
interface Props {
  nouns: NounType[] | null;
  category: string;
  type: string;
}

export default function NounSection({ nouns, category, type }: Props) {
  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <Accordion className="w-full" type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="flex justify-end gap-4 w-full px-4 bg-secondary my-2 rounded-2xl">
          <h1 className="mr-auto">{capitalizeFirstLetter(category)}</h1>
          <Badge variant="purple">{nouns ? nouns.length : 0}</Badge>
        </AccordionTrigger>
        <AccordionContent>
          <div className="border border-secondary rounded-xl w-full h-60 px-2 overflow-auto">
            <Table className="relative w-full">
              <TableCaption>
                List of Nouns from {capitalizeFirstLetter(category)} Category
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Index</TableHead>
                  <TableHead>Noun</TableHead>
                  <TableHead>Meaning</TableHead>
                  <TableHead className={type === "user" ? "text-right" : ""}>
                    Kanji
                  </TableHead>
                  {type === "admin" && (
                    <TableHead className="flex justify-center items-center">
                      Actions
                    </TableHead>
                  )}
                </TableRow>
              </TableHeader>
              <TableBody>
                {nouns?.map((noun: NounType, index: number) => (
                  <TableRow key={noun.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{noun.meaning}</TableCell>
                    <TableCell>{noun.noun}</TableCell>
                    <TableCell className={type === "user" ? "text-right" : ""}>
                      {noun.kanji ? noun.kanji : "N/A"}
                    </TableCell>
                    {type === "admin" && (
                      <TableCell className="flex justify-center items-center">
                        <EditNoun
                          noun={noun.noun}
                          kanji={noun.kanji}
                          id={noun.id}
                          meaning={noun.meaning}
                          category={noun.category}
                        />
                      </TableCell>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
