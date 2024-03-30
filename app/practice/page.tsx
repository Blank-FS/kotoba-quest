import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const page = () => {
  return (
    <>
      <h1 className="p-4 border rounded-lg">Problem Sets</h1>
      <Table>
        <TableCaption>A list of p-sets.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="sm:w-[70%]">Invoice</TableHead>
            <TableHead className="sm:w-[30%]">Portal</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default page;
