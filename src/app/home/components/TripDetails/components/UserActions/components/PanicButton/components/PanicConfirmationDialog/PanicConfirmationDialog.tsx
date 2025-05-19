import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "src/designSystem/components";
import { useMutation } from "@tanstack/react-query";
import { postPanicRequest } from "src/app/api/panicRequest/postPanicRequest";
import NextImage from "next/image";
import { Loader2 } from "lucide-react";

type PanicConfirmationDialogProps = {
  isOpen: boolean;
  closeDialog: () => void;
};

// TO-DO: add error state
const PanicConfirmationDialog = ({
  isOpen,
  closeDialog,
}: PanicConfirmationDialogProps) => {
  const [selectedAid, setSelectedAid] = useState<
    "AMBULANCE" | "SECURITY" | "POLICE" | null
  >(null);

  const { mutate: postPanic, isPending: isPostPanicPending } = useMutation({
    mutationFn: postPanicRequest,
    onSuccess: () => {
      setSelectedAid(null);
      closeDialog();
      alert("TO-DO: success confirmation dialog");
    },
    onError: () => {
      setSelectedAid(null);
      alert("TO-DO: error display");
    },
  });

  const handleConfirmation = (
    aidRequired: "AMBULANCE" | "SECURITY" | "POLICE",
  ) => {
    setSelectedAid(aidRequired);
    const currentDateISO = new Date().toISOString();
    postPanic({
      aidRequired,
      timeOfRequest: currentDateISO,
      location: {
        lat: 2.55585, // TO-DO: read from user's device
        lng: 33.50911, // TO-DO: read from user's device
        displayValue: "Fancy Frank's Sunset Beach", // TO-DO: read from user's device
      },
      user: {
        externalId: "guuber-user-1", // TO-DO: read from user's account
        firstName: "Daisy", // TO-DO: read from user's account
        lastName: "Werthan", // TO-DO: read from user's account
        email: "daisy@driving.com", // TO-DO: read from user's account
        contactNumber: "+27-768854000", // TO-DO: read from user's account
        nextOfKinContactNumber: "+27-768854001", // TO-DO: read from user's account
      },
    });
  };

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Request emergency help</AlertDialogTitle>
          <AlertDialogDescription>
            Please confirm the type of aid you need. <br />
            Your personal information will be shared with the nearest available
            unit.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            disabled={isPostPanicPending}
            onClick={closeDialog}
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            disabled={isPostPanicPending}
            onClick={() => {
              handleConfirmation("AMBULANCE");
            }}
          >
            {selectedAid === "AMBULANCE" ? (
              <Loader2 className="h-[28px] w-[28px] animate-spin" />
            ) : (
              <NextImage
                src="/icons/medical-cross.svg"
                alt="Ambulance icon"
                width={512}
                height={512}
                className="h-[28px] w-auto"
              />
            )}
            Ambulance
          </AlertDialogAction>
          <AlertDialogAction
            disabled={isPostPanicPending}
            onClick={() => {
              handleConfirmation("POLICE");
            }}
          >
            {selectedAid === "POLICE" ? (
              <Loader2 className="h-[28px] w-[28px] animate-spin" />
            ) : (
              <NextImage
                src="/icons/police.svg"
                alt="Police icon"
                width={512}
                height={512}
                className="h-[28px] w-auto"
              />
            )}
            Police
          </AlertDialogAction>
          <AlertDialogAction
            disabled={isPostPanicPending}
            onClick={() => {
              handleConfirmation("SECURITY");
            }}
          >
            {selectedAid === "SECURITY" ? (
              <Loader2 className="h-[28px] w-[28px] animate-spin" />
            ) : (
              <NextImage
                src="/icons/shield.svg"
                alt="Security icon"
                width={512}
                height={512}
                className="h-[28px] w-auto"
              />
            )}
            Security
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PanicConfirmationDialog;
