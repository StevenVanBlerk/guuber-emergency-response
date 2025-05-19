import CityMap from "./components/CityMap";
import TripDetails from "./components/TripDetails";

const HomePage = () => {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col justify-between">
        <CityMap />
        <TripDetails />
      </div>
    </main>
  );
};

export default HomePage;
