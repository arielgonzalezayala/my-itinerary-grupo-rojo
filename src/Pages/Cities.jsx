import Carrusel from "../Components/Carrusel";
import Navbar from "../Components/Navbar";
import SearchCities from "../Components/SearchCities";

function Cities() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center w-screen">
        <Carrusel />
        <SearchCities />
        
      </div>
    </>
  );
}

export default Cities;
