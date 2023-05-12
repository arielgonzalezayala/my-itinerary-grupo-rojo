import { useState } from 'react';
import logo from '../../public/assets/0f58830a95e6da2b8f37904e0910375f.png';
import Search from '../../public/assets/iconmonstr-search-thin-240.png';
import login from '../../public/assets/iconmonstr-user-20-240.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary-950 opacity-1 p-4 flex justify-between">
      <div className="flex items-center ml-4 md:ml-24 gap-8">
        <img className="w-20 h-20" src={logo} alt="" />
        <h3 className="text-primary-900 font-bold text-2xl md:text-4xl">My Tinerary</h3>
      </div>
      <div className="md:hidden">
        <button className="hover:bg-green-700 text-white" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        {isOpen && (
          <div className="flex flex-col gap-2 mt-4">
            <a href="/" className="text-white hover:text-white">Home</a>
            <a href="/cities" className="text-white hover:text-white">Cities</a>
            <div className='flex gap-3 items-center'>
              <a href="/" className="text-white hover:text-white">Search</a> 
              <img className='w-5 h-5 mt-2' src={Search} alt="" />   
            </div>
            <button className="hover:bg-green-700 text-white">
          <img className='w-12 h-12' src={login} alt="" />
        </button>
          </div>
        )}
      </div>
      <div className="hidden md:flex items-center gap-10 mr-24 text-3xl">
        <a href="/" className="text-white hover:text-white">Home</a>
        <a href="/cities" className="text-white hover:text-white">Cities</a>
        <div className='flex gap-3 items-center'>
          <a href="/" className="text-white hover:text-white">Search</a> 
          <img className='w-8 h-8 mt-2' src={Search} alt="" />   
        </div>
        <button className="hover:bg-green-700 text-white">
          <img className='w-12 h-12' src={login} alt="" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
