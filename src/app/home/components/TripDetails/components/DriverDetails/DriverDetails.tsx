import NextImage from "next/image";

const DriverDetails = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex">
          <NextImage
            src="/icons/person-2.svg"
            alt="Driver photo"
            width={512}
            height={512}
            className="bg-void-background h-[100px] w-[100px] rounded-full"
          />
        </div>
        <div className="text-right">
          <NextImage
            src="/placeholder-car.png"
            alt="Image of driver's car"
            width={2200}
            height={1100}
            className="my-auto ml-auto h-[50px] w-[100px] object-cover"
          />
          <div className="text-xl">CY12AB3</div>
          <div className="text-sm">Yellow Toyota Suzuki</div>
        </div>
      </div>
    </div>
  );
};

export default DriverDetails;
