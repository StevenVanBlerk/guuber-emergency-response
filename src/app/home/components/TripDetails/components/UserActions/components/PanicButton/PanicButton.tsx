"use client";

import NextImage from "next/image";
import { useMutation } from "@tanstack/react-query";
import { Button } from "src/designSystem/components";
import { postPanicRequest } from "src/app/api/panicRequest/postPanicRequest";

// TO-DO: add loading state
// TO-DO: add error state
// TO-DO: confirmation modal

const PanicButton = () => {
  const {
    mutate: postPanic,
    isPending: isPostPanicPending,
    isSuccess: isPostPanicSuccess,
    isError: isPostPanicErrored,
    data: postPanicData, // TO-DO: inform user that a request has been made via a modal
    error: postPanicError, // TO-DO: display API's error to the user via a modal
  } = useMutation({
    mutationFn: postPanicRequest,
    onSuccess: () => {}, // TO-DO: Update state of the success modal
    onError: () => {}, // TO-DO: update state of the error modal
  });

  const handleClick = () => {
    const payload = {
      deviceId: "device-123", // TO-DO: use user's Guuber credentials to populate this field
      location: { lat: 40.7128, lng: -74.006 }, // TO-DO: read or request user's actual location
    };
    postPanic(payload);
  };

  return (
    <Button
      variant="code-red"
      size="icon"
      className="rounded-full p-2"
      onClick={handleClick}
      disabled={isPostPanicPending}
    >
      <NextImage
        src="/icons/exclamation.svg"
        alt="Request emergency support"
        width={34}
        height={123}
        className="h-[28px] w-auto"
      />
    </Button>
  );
};

export default PanicButton;
