import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Link href="/wordbank">
        <Button
          variant="purple"
          className="w-60 my-4 p-4 borderrounded-xl flex justify-center"
        >
          Word Bank
        </Button>
      </Link>
      <Link href="/practice">
        <Button
          variant="purple"
          className="w-60 my-4 p-4 borderrounded-xl flex justify-center"
        >
          Practice
        </Button>
      </Link>
      <Link href="/admin">
        <Button
          variant="purple"
          className="w-60 my-4 p-4 borderrounded-xl flex justify-center"
        >
          Admin
        </Button>
      </Link>
    </>
  );
}
