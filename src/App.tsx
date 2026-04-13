import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Snowflakes } from './components/Snowflakes';
import { HexButton } from './components/HexButton';
import { HexCard } from './components/HexCard';

type Screen = 'home' | 'about' | 'projects' | 'contact';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col font-sans">
      <Snowflakes />

      {/* Navigation */}
      <nav className="relative z-20 w-full p-6 pt-8 flex justify-center gap-2 sm:gap-4 flex-wrap">
        <HexButton active={currentScreen === 'home'} onClick={() => setCurrentScreen('home')}>Home</HexButton>
        <HexButton active={currentScreen === 'about'} onClick={() => setCurrentScreen('about')}>About</HexButton>
        <HexButton active={currentScreen === 'projects'} onClick={() => setCurrentScreen('projects')}>Projects</HexButton>
        <HexButton active={currentScreen === 'contact'} onClick={() => setCurrentScreen('contact')}>Contact</HexButton>
      </nav>

      {/* Main Content Area */}
      <main className="relative z-10 flex-grow flex items-center justify-center p-6 sm:p-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full max-w-5xl"
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

// Subcomponents for screens
function Home() {
  return (
    <div className="flex flex-col items-center text-center">
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative mb-16"
      >
        {/* Soft Color Blur (Aura) */}
        <div className="absolute inset-0 bg-[var(--color-ice-blue)] opacity-20 blur-[80px] rounded-full scale-150 -z-10 animate-pulse"></div>

        {/* Elegant Hexagon Container */}
        <div className="hex-shadow">
          <div className="hex-card w-64 h-72 bg-white/10 backdrop-blur-sm shadow-inner flex items-center justify-center overflow-hidden">
            <img
              src="/assets/mountain.png"
              alt="Winter Mountain"
              className="w-full h-full object-cover scale-110"
            />
          </div>
        </div>
      </motion.div>
      <h1 className="text-5xl md:text-7xl font-light text-slate-800 mb-6 tracking-tight">
        Winter <span className="text-[var(--color-ice-blue)] font-medium">Design</span>
      </h1>
      <p className="text-xl text-slate-500 max-w-2xl font-light leading-relaxed">
        inspired by the calm and clarity of winter.
      </p>
    </div>
  );
}

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-16">
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-4xl font-light text-slate-800 mb-8">Jhonn Condori</h2>
        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
          I'm a UI/UX developer who believes in clean, purposeful design. Much like a winter landscape, I strive to remove the unnecessary and highlight the essential.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed">
          One of my goals is to expand my technical and cognitive skills.
        </p>

        {/* Elegant Quote Block */}
        <div className="mt-10 relative">
          <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[var(--color-ice-blue)] to-transparent opacity-50" />
          <blockquote className="pl-6">
            <p className="text-xl text-slate-700 font-light italic leading-relaxed">
              "The color of spring is in the flowers; that of winter, in the imagination"
            </p>
            <cite className="block mt-3 text-xs uppercase tracking-[0.2em] text-[var(--color-ice-blue)] font-semibold not-italic">
              — Terri Guillemets
            </cite>
          </blockquote>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center py-4 scale-75 sm:scale-100">
        {/* Strictly alternating rows for perfect honeycomb fit */}
        {renderHexRow(['', '', '', '', '', ''], "-mt-0")}
        {renderHexRow(['', '', 'UX', '', ''], "-mt-6")}
        {renderHexRow(['', 'Code', 'React', 'Vite', '', ''], "-mt-6")}
        {renderHexRow(['', 'Types', 'Node', 'Clean', ''], "-mt-6")}
        {renderHexRow(['', '', 'Style', '', '', ''], "-mt-6")}
        {renderHexRow(['', '', '', '', ''], "-mt-6")}
      </div>
    </div>
  );
}

// Helper to render rows of the honeycomb
function renderHexRow(items: string[], marginTop: string) {
  return (
    <div className={`flex justify-center gap-1 ${marginTop}`}>
      {items.map((skill, i) => (
        <div key={i} className={`hex-shadow ${skill === '' ? 'opacity-20' : 'opacity-100'}`}>
          <div className={`hex-card w-20 h-24 bg-white flex items-center justify-center transition-all duration-300 ${skill !== '' ? 'hover:bg-[var(--color-ice-light)]' : ''}`}>
            {skill !== '' && (
              <span className="text-[10px] uppercase tracking-widest font-bold text-slate-600">
                {skill}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}



function Projects() {
  const projects = [
    { title: 'Glacier App', description: 'A clean, minimalist task manager designed to reduce cognitive load and improve focus.', tags: ['React', 'UX'] },
    { title: 'Frost Analytics', description: 'Data visualization dashboard with a cool, highly readable color palette.', tags: ['D3.js', 'UI'] },
    { title: 'Aurora E-commerce', description: 'Elegant shopping experience with smooth, flowing transitions and micro-interactions.', tags: ['Next.js', 'Motion'] },
  ];

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl font-light text-slate-800 mb-16">Selected Work</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {projects.map((p, i) => (
          <HexCard key={i} title={p.title} description={p.description} tags={p.tags} />
        ))}
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="flex flex-col items-center text-center max-w-xl mx-auto">
      <h2 className="text-4xl font-light text-slate-800 mb-6">Get in Touch</h2>
      <p className="text-lg text-slate-600 mb-12">
        Interested in collaborating? Let's build something beautiful together.
      </p>

      <form className="w-full flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-6 py-4 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-[var(--color-ice-blue)] focus:ring-2 focus:ring-[var(--color-ice-light)] transition-all"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-6 py-4 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-[var(--color-ice-blue)] focus:ring-2 focus:ring-[var(--color-ice-light)] transition-all"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full px-6 py-4 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-[var(--color-ice-blue)] focus:ring-2 focus:ring-[var(--color-ice-light)] transition-all resize-none"
        ></textarea>

        <div className="mt-6 flex justify-center">
          <HexButton type="submit" className="w-48">Send Message</HexButton>
        </div>
      </form>
    </div>
  );
}
