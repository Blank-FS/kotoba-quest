import { Button } from "@/components/ui/button";

type Props = {
  onCheck: () => void;
  status: "correct" | "wrong" | "none" | "completed";
  disabled?: boolean;
};

export const Footer = ({ onCheck, status, disabled }: Props) => {
  return (
    <footer className="flex justify-end my-4">
      <Button disabled={disabled} onClick={onCheck} variant="purple">
        {status === "none" && "Confirm"}
        {(status === "correct" || status === "wrong") && "Continue"}
        {status === "completed" && "Return"}
      </Button>
    </footer>
  );
};
