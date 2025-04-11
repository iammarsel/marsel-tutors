import React, { useEffect, useRef } from 'react';
import pinkcover from '../assets/pinkcover.jpg';
import lofi_left from '../assets/lofi1.png';
import lofi_right from '../assets/lofi2.png';
import bonfire from '../assets/bonfire.jpg';
import song from '../assets/song.mp3';

const Shatabdi: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => console.error('Audio playback failed:', error));
    }
  }, []);

  return (
    <div className="w-full h-screen overflow-y-auto text-center bg-pink-200">
      {/* Fullscreen Banner */}
      <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${pinkcover})` }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white">
          <h1 className="text-6xl font-bold">Happy Birthday Shatabdi</h1>
          <p className="text-2xl mt-4 text-pink-200 px-24">My favorite person in this world that I am lucky to share the best life moments with is finally turning 21. Thank you for being the best girlfriend, great person, supportive and loving best friend. I'm looking forward to spending the rest of my life with you!</p>
          <p className="text-2xl mt-8 text-pink-400 px-24">Here is the start of my project for you as a sexy nerd</p>
        </div>
      </div>

      <h1 className="text-6xl font-bold mt-8">Lofi Girl and Lofi Boy</h1>

      {/* Two Images Side by Side */}
      <div className="w-full h-screen flex">
        <div className="w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: `url(${lofi_left})` }}></div>
        <div className="w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: `url(${lofi_right})` }}></div>
      </div>

      <h1 className="text-6xl font-bold mt-8">Bonfire Demo</h1>

      {/* Fullscreen Bonfire Image */}
      
      <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bonfire})` }}></div>

      {/* Background Music */}
      <audio ref={audioRef} src={song} loop autoPlay></audio>
    </div>
  );
};

export default Shatabdi;
