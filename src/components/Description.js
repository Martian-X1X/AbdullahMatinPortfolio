import React, { useState, useEffect } from 'react';
import myPicture from '../assets/mypicture.png';

const decryptText = (finalText, duration, setDecryptedText) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let iterations = 0;
  const interval = setInterval(() => {
    setDecryptedText((prev) =>
      finalText
        .split("")
        .map((char, i) => {
          if (i < iterations) {
            return char;
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("")
    );
    if (iterations >= finalText.length) clearInterval(interval);
    iterations += 1 / (duration / 100); // Adjust speed based on the duration
  }, 100); // Speed of letter changes
};

const Description = () => {
  const [nameText, setNameText] = useState("");
  const [titleText, setTitleText] = useState("");

  useEffect(() => {
    decryptText("ABDULLAH MATIN", 100, setNameText); // Decrypts in 2 seconds
    decryptText("SOFTWARE ENGINEER", 125, setTitleText); // Decrypts in 2.5 seconds
  }, []);

  return (
    <div id="home" className="flex flex-col md:flex-row items-center justify-center min-h-9 bg-black px-4 sm:px-8 lg:px-20 mt-4 md:mt-0">
      {/* Left Side */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2 p-4 sm:p-6 lg:p-10 mt-7">
        <h1 className="text-red-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Greetings,</h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-red-600 mb-2">{nameText}</h2>
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-amber-300 mb-4">{titleText}</h3>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6">
          I am passionate about building modern web applications and software development. Hands on experience with modern technologies.
        </p>
        <a href="#about" className="px-4 py-2 sm:px-10 sm:py-5 bg-red-700 text-white rounded hover:bg-red-600 transition duration-300">
          About Me
        </a>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 p-4 sm:p-6 lg:p-10 flex justify-center">
        <img
          src={myPicture}
          alt="Abdullah Matin"
          className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-96 lg:h-96 object-cover rounded-lg shadow-lg"
          style={{
            filter: 'brightness(0.9)',
            transition: 'all 0.3s ease-in-out',
          }}
        />
      </div>
    </div>
  );
};

export default Description;
