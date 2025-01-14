import React, { useState, useEffect } from 'react';
import { RiArrowDownSLine } from "@remixicon/react";
import { RiAccountCircleFill } from "@remixicon/react";
import { RiShoppingCartLine } from "@remixicon/react";
import logo from '../assets/logo.jpg';
import englishFlag from '../assets/united-states.png';
import arabicFlag from '../assets/flag.png';

const Header = () => {
  const [language, setLanguage] = useState('English');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectLanguage = (lang) => {
    setLanguage(lang);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      {isTop && (
        <h1 className="text-center py-3 bg-secondary">ORDER DESSERTS FOR LOCAL PICKUP</h1>
      )}
      <nav className="flex justify-between items-center px-20 text-gray-800">
        <div className="relative">
          <button onClick={toggleDropdown} className="flex items-center">
            <img
              src={language === 'English' ? englishFlag : arabicFlag}
              alt={language}
              className="h-5 w-5 mr-2"
            />
            {language} <RiArrowDownSLine size={24} />
          </button>
          {dropdownOpen && (
            <div className="absolute mt-2 w-32 bg-white text-black rounded shadow-lg">
              <button
                onClick={() => selectLanguage('English')}
                className="flex items-center px-4 py-2 w-full text-left"
              >
                <img src={englishFlag} alt="English" className="h-5 w-5 mr-2" />
                English
              </button>
              <button
                onClick={() => selectLanguage('Arabic')}
                className="flex items-center px-4 py-2 w-full text-left"
              >
                <img src={arabicFlag} alt="Arabic" className="h-5 w-5 mr-2" />
                Arabic
              </button>
            </div>
          )}
        </div>
        <div className="flex justify-center">
          <img src={logo} alt="Logo" className="h-24" />
        </div>
        <div className="flex items-center">
          <button className="mr-4 flex items-center">
            <RiAccountCircleFill size={24} className="mr-1" />
            My Account
          </button>
          <button className="text-2xl flex items-center">
            <RiShoppingCartLine size={24} />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;