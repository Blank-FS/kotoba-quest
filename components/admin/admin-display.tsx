import React from "react";
import Display from "../displays/display";
import CreateWord from "../admin/create-word";
import Signout from "./signout";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

export default async function AdminDisplay() {
  return (
    <>
      <div className="my-2 flex justify-between items-center w-full">
        <Signout />
        <Button variant="link">Admin Dashboard</Button>
        <CreateWord />
      </div>
      <Separator className="my-4" />
      <Display access="admin" />
    </>
  );
}
