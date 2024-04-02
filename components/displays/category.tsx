import React from "react";
import { WordType, GroupType } from "@/constants";
import { cn } from "@/lib/utils";
import { EditWord } from "../admin/edit-word";
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { DeleteWord } from "../admin/delete-word";
// Props
interface Props {
  arr: WordType[];
  groups: GroupType[];
  category: string;
  type: string;
  access: string;
}

export default function Category({
  category,
  arr,
  type,
  access,
  groups,
}: Props) {
  function capitalizeFirstLetter(str: string) {
    return str?.charAt(0).toUpperCase() + str?.slice(1);
  }

  return (
    <Accordion className="w-full" type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="flex justify-end gap-4 w-full px-4 bg-secondary my-2 rounded-2xl">
          <h1 className="mr-auto">{capitalizeFirstLetter(category)}</h1>
          <Badge variant="purple">{arr.length}</Badge>
        </AccordionTrigger>
        <AccordionContent>
          <div className="border border-secondary rounded-xl w-full h-60 px-2 overflow-auto">
            <Table className="relative w-full">
              <TableCaption>{cn("List of ", category)}</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Index</TableHead>
                  <TableHead>Word</TableHead>
                  <TableHead>Meaning</TableHead>
                  <TableHead className={access === "user" ? "text-right" : ""}>
                    Kanji
                  </TableHead>
                  {access === "admin" && (
                    <TableHead className="flex justify-center items-center">
                      Actions
                    </TableHead>
                  )}
                </TableRow>
              </TableHeader>
              <TableBody>
                {arr.map((item: WordType, index: number) => (
                  <TableRow key={item.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{item.word}</TableCell>
                    <TableCell>{item.meaning}</TableCell>
                    <TableCell
                      className={access === "user" ? "text-right" : ""}
                    >
                      {item.kanji ? item.kanji : "N/A"}
                    </TableCell>
                    {access === "admin" && (
                      <TableCell className="flex justify-center items-center gap-2">
                        <EditWord word={item} groups={groups} type={type} />
                        <DeleteWord id={item.id} />
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
