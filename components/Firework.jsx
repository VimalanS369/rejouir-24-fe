// components/Firework.js

import { useEffect } from 'react';
import '../styles/firework.css';
const Firework = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const fireworks = document.querySelectorAll('.firework');
      fireworks.forEach((firework) => {
        const deg = Math.floor(Math.random() * 360);
        firework.style.setProperty('--deg', `${deg}deg`);
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <article className="flex justify-center items-center min-h-screen bg-antique relative">
      <div className="grid grid-cols-10 grid-rows-15 gap-4 justify-center p-8 rounded-lg bg-black">
        {[...Array(36)].map((_, index) => (
          <b key={index} className="firework" />
        ))}
      </div>
      <s
        className="firework a"
        style={{ '--_cp': 'var(--inset)', '--_is': '12cqi', '--del': '100ms' }}
      />
      <s
        className="firework a"
        style={{
          '--_gc': '9',
          '--_gr': '1',
          '--_cp': 'var(--inset)',
          '--_bg': 'var(--blue-grad)',
          '--_is': '30cqi',
          '--_gs': '4',
          '--_rs': '4',
          '--del': '500ms',
        }}
      />
      <s className="firework c" style={{ '--_gc': '9', '--_gr': '9', '--del': '300ms' }} />
      <s
        className="firework a"
        style={{ '--_gc': '3', '--_gr': '10', '--_is': '14cqi', '--_cp': 'var(--inset)', '--del': '300ms', '--dur': '4s' }}
      />
      <s className="firework c" style={{ '--_gc': '4', '--_gr': '11', '--_is': '14cqi' }} />
      <s className="firework c" style={{ '--_gc': '2', '--_gr': '11', '--del': '200ms' }} />
      <s className="firework c" style={{ '--_gc': '3', '--_gr': '12', '--_is': '10cqi', '--del': '1s' }} />
      <s
        className="firework a"
        style={{
          '--_gc': '7',
          '--_gr': '11',
          '--_cp': 'var(--inset)',
          '--_bg': 'var(--blue-grad)',
          '--_is': '30cqi',
          '--_gs': '4',
          '--_rs': '4',
        }}
      />
      <s className="firework c" style={{ '--_gc': '2', '--_gr': '14', '--_is': '10cqi', '--del': '800ms' }} />
      <s
        className="firework a"
        style={{ '--_gc': '4', '--_gr': '14', '--_is': '14cqi', '--_cp': 'var(--inset)', '--del': '200ms' }}
      />
      <h2 className="bg-antique rounded-lg text-black font-bold text-xl p-2 absolute bottom-0 left-1/2 transform -translate-x-1/2">
        Preview
      </h2>
    </article>
  );
};

export default Firework;
