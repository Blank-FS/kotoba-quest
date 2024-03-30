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
interface NounType {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  noun: string;
  meaning: string;
  kanji?: string;
  category: string;
}
interface Props {
  nouns: NounType[] | null;
  category: string;
}

export default function UserNounSection({ nouns, category }: Props) {
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
          <Table>
            <TableCaption>List of nouns in the word bank.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Index</TableHead>
                <TableHead>Noun</TableHead>
                <TableHead>Kanji</TableHead>
                <TableHead className="text-right">Meaning</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {nouns?.map((noun: NounType, index: number) => (
                <TableRow key={noun.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{noun.noun}</TableCell>
                  <TableCell>{noun.kanji}</TableCell>
                  <TableCell className="text-right">{noun.meaning}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
