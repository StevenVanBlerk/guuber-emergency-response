"use client";

import NextImage from "next/image";
import { Button } from "src/designSystem/components";
import { useState } from "react";
import PanicConfirmationDialog from "./components/PanicConfirmationDialog";

const PanicButton = () => {
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  return (
    <>
      <Button
        variant="code-red"
        size="icon"
        className="rounded-full p-2"
        onClick={() => {
          setIsConfirmationModalOpen(true);
        }}
        disabled={isConfirmationModalOpen}
      >
        <NextImage
          src="/icons/exclamation.svg"
          alt="Request emergency support"
          width={34}
          height={123}
          className="h-[28px] w-auto"
        />
      </Button>
      <PanicConfirmationDialog
        isOpen={isConfirmationModalOpen}
        closeDialog={() => setIsConfirmationModalOpen(false)}
      />
    </>
  );
};

export default PanicButton;
