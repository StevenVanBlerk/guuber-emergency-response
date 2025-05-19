"use client";

import {
  Drawer,
  DrawerContent,
  DrawerTitle,
} from "src/designSystem/components";
import TimeEstimate from "./components/TimeEstimate";
import DriverDetails from "./components/DriverDetails";
import useWindowDimensions from "src/designSystem/utilities/useWindowDimensions";
import UserActions from "./components/UserActions";

const TripDetails = () => {
  const { screenType } = useWindowDimensions();

  return (
    <Drawer
      defaultOpen={true}
      open={true}
      modal={false} // disabling the background overlay
      direction={screenType === "DESKTOP" ? "right" : "bottom"}
      handleOnly // This has a bonus effect of disabling drag on desktop
    >
      <DrawerContent className="min-w-fit p-4">
        <DrawerTitle hidden>Your trip details</DrawerTitle>

        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <div className="text-xl text-nowrap">Abraham is on the way!</div>
            <TimeEstimate />
          </div>
          <DriverDetails />
        </section>

        {/* A divider between the driver details above and the user actions below */}
        <div className="border-accent mt-4 -mr-4 mb-4 -ml-4 border" />

        <section>
          <UserActions />
        </section>
      </DrawerContent>
    </Drawer>
  );
};

export default TripDetails;
