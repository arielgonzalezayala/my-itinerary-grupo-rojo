import Search from '../assets/icon-search.png';

const SearchCities = () => {
  return (
    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[12rem] bg-black rounded-2xl z-10 bg-opacity-50">
      <div className="flex flex-col justify-center items-center h-[10rem]">
        <h1 className="text-white	text-3xl my-8">Cities</h1>
        <div style={{ backgroundColor: 'white' }} className="h-[2rem] w-[30rem] rounded-lg mb-5 flex items-center justify-between">
          <input className='focus:outline-none ml-4' type="text" placeholder='Search your city' />
          <img className='w-6 h-6 mr-4' src={Search} alt="logo search" />
        </div>
      </div>
    </div>
  );
};

export default SearchCities;
