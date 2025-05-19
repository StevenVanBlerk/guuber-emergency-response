// A simple Google Maps iFrame to mimic an interactive city map
const CityMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13254.450873446294!2d18.510698899999998!3d-33.8480969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sza!4v1747487428767!5m2!1sen!2sza"
      width="600"
      height="450"
      loading="lazy"
      className="fixed top-0 right-0 bottom-0 left-0 -z-10 h-lvh w-lvw border-0"
    />
  );
};

export default CityMap;
