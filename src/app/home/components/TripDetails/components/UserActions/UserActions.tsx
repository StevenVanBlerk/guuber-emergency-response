import NextImage from "next/image";
import { Input } from "src/designSystem/components";
import { Button } from "src/designSystem/components/Inputs/Button";
import PanicButton from "./components/PanicButton";

const UserActions = () => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <Input
          placeholder="Message driver"
          onClick={() => {
            alert("That action is not yet supported.");
          }}
        />
        <Button
          variant="secondary"
          size="icon"
          className="rounded-full p-2" // TO-DO: standardise these stylings in the design system as an IconButton variant
          onClick={() => {
            alert("That action is not yet supported.");
          }}
        >
          <NextImage
            src="/icons/phone.svg"
            alt="Call driver"
            width={32}
            height={32}
            className="h-32 w-auto"
          />
        </Button>
      </div>
      <div className="flex w-fit gap-4">
        <PanicButton />
      </div>
    </div>
  );
};

export default UserActions;
