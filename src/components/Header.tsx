import React, { useState } from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';

const Header: React.FC = () => {
  const [selected, setSelected] = useState('HOME'); // Default selected item

  const navItems = ['HOME', 'ITEM 1', 'ITEM 2', 'ITEM 3', 'ITEM 4', 'ITEM 5'];

  return (
    <header>
      {/* Top Green Bar with Promotional Message */}
      <div className="bg-[#70925B] text-white text-center py-1 text-sm">
        30% OFF ALL ORDERS UNTIL 4/27
      </div>
      
      {/* Navigation Bar */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Hamburger Menu for Mobile */}
          <div className="text-[#70925B] md:hidden">
            <HiMenu size={24} />
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-9 text-[#7AA65A] text-sm md:text-base list-none">
              {navItems.map((item) => (
                <li key={item} className="relative">
                  <a
                    href="#"
                    onClick={() => setSelected(item)}
                    className={`${
                      selected === item
                        ? 'font-bold'
                        : 'hover:text-[#4B7A44]'
                    }`}
                  >
                    {item}
                  </a>
                  {selected === item && (
                    <div className="absolute left-0 right-0 h-1 bg-[#7AA65A] rounded-full mt-1" />
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Cart Icon */}
          <div className="text-[#70925B]">
            <FaShoppingBag size={24} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
