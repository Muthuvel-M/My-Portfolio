import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// import SplashCursor from './SplashCursor'


export const Home = () => {
  const words = ["DEVELOPER", "DESIGNER", "CREATOR", "VIDEO EDITOR"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayWord, setDisplayWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < words[currentWordIndex].length) {
        setDisplayWord(prev => prev + words[currentWordIndex][charIndex]);
        setCharIndex(prev => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayWord(prev => prev.slice(0, -1));
        setCharIndex(prev => prev - 1);
      } else if (!isDeleting && charIndex === words[currentWordIndex].length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }, isDeleting ? 50 : 50);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentWordIndex, words]);

  return (
    <>

      <section className="relative w-full h-screen bg-black flex items-center justify-center text-white overflow-hidden">
      {/* <SplashCursor /> */}
        {/* Left Content */}
        <div className="absolute left-40 top-1/2 transform -translate-y-1/2">
          <h1 className="text-5xl font-light">
            I'AM <span className=" font-semibold">{displayWord}<span className="animate-blink font-light">|</span></span>
          </h1>
          <p className="mt-2 text-lg text-gray-200">Front-End Developer</p>
        </div>
        
        {/* Profile Image */}
        <div className="absolute right-35 top-1/2 transform -translate-y-1/2">
          <img src="src/assets/images/home-image.png" alt="Profile" className="w-[550px] mt-[180px] h-auto object-cover" />
        </div>
        
        {/* Left Vertical Social Icons */}
        <div className="absolute left-5 top-1/2 transform -translate-y-1/2 space-y-4 text-xl">
          <a href="#" className="block text-white hover:text-blue-400 transition-transform transform hover:scale-125"><FaFacebookF /></a>
          <a href="#" className="block text-white hover:text-white transition-transform transform hover:scale-125"><FaXTwitter /></a>
          <a href="#" className="block text-white hover:text-white transition-transform transform hover:scale-125"><FaInstagram /></a>
          <a href="#" className="block text-white hover:text-white transition-transform transform hover:scale-125"><FaGithub /></a>
        </div>
        
        {/* Right Vertical Learn More */}
        <div className="absolute right-5 bottom-20 rotate-90">
          <a href="#" className="text-gray-500 hover:text-white flex items-center transition-transform transform hover:scale-110">
            LEARN MORE →
          </a>
        </div>
      </section>
      <style>
        {`
          @keyframes blink {
            50% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 0.8s step-start infinite;
          }
        `}
      </style>
    </>
  );
};
