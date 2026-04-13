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
      <div className="hex-shadow mb-10">
        <div className="hex-card w-48 h-56 bg-[var(--color-ice-light)] flex items-center justify-center">
          <span className="text-6xl" role="img" aria-label="snowflake">❄️</span>
        </div>
      </div>
      <h1 className="text-5xl md:text-7xl font-light text-slate-800 mb-6 tracking-tight">
        Winter <span className="text-[var(--color-ice-blue)] font-medium">Design</span>
      </h1>
      <p className="text-xl text-slate-500 max-w-2xl font-light leading-relaxed">
        A minimalist, elegant portfolio inspired by the calm and clarity of winter.
      </p>
    </div>
  );
}

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-16">
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-4xl font-light text-slate-800 mb-8">About Me</h2>
        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
          I'm a UI/UX developer who believes in clean, purposeful design. Much like a winter landscape, I strive to remove the unnecessary and highlight the essential.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed">
          My approach combines technical precision with aesthetic elegance, creating digital experiences that are both beautiful and highly functional.
        </p>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="grid grid-cols-2 gap-6">
          {['UI/UX', 'React', 'Tailwind', 'Motion'].map((skill, i) => (
            <div key={i} className="hex-shadow">
              <div className="hex-card w-32 h-36 bg-white flex items-center justify-center text-slate-700 font-medium text-lg hover:bg-[var(--color-ice-light)] hover:text-[var(--color-ice-blue)] transition-colors duration-300">
                {skill}
              </div>
            </div>
          ))}
        </div>
      </div>
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
