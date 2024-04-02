import React from "react";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  const psets = [
    { description: "Noun Practice", href: "practice/noun" },
    { description: "Adjective Practice", href: "practice/adjective" },
    { description: "Verb Practice", href: "practice/verb" },
  ];
  return (
    <>
      <Button variant="link">Practices</Button>
      <Table>
        <TableCaption>A list of p-sets.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="sm:w-[70%]">Description</TableHead>
            <TableHead className="sm:w-[30%] text-right">Navigation</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {psets.map((item) => (
            <TableRow>
              <TableCell className="font-medium">{item.description}</TableCell>
              <TableCell className="text-right">
                <Link href={item.href}>
                  <Button size="icon" variant="purple">
                    <PaperPlaneIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <PaperPlaneIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Navigate to practice</span>
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default page;
