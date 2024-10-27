import React from 'react';
import Link from 'next/link';
import Image  from 'next/image'

export default function Navbar () {
  return (
    <nav className="text-white flex justify-between items-center p-6 pt-2">
      
      <div className="pl-12">
        <h3 className="font-montserrat font-bold text-2xl leading-8 tracking-wide pl-8">
          BrandName
        </h3>
      </div>

      
      <div className="flex pr-52 text-sm font-bold gap-5 text-white">
        <Link href="#" className="text-white hover:text-gray-400 font-montserrat">
          Home
        </Link>
        <Link href="#" className="text-white hover:text-gray-400 font-montserrat">
          Product
        </Link>
        <Link href="#" className="text-white hover:text-gray-400 font-montserrat">
          Pricing
        </Link>
        <Link href="#" className="text-white hover:text-gray-400 font-montserrat">
          Contact
        </Link>
      </div>

      
      <div className="flex space-x-4 pr-20">
        
        <button className="text-white font-bold text-sm py-3 px-5 hover:text-gray-400 font-montserrat">
          Login
        </button>
        
       
        <button className="bg-[#23A6F0] text-white font-bold text-sm py-3 px-5 hover:bg-blue-600 transition-all rounded-md font-montserrat">
          JOIN US
        </button>
      </div>
    </nav>
  );
};
