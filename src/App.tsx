import { Instagram } from 'lucide-react';
import { motion } from 'motion/react';

const videos = [
  {
    id: 'cHq-dBicXKY', // AI Video Production 3 (Quem colore sua alma) - Capa
    start: 35,
  },
  {
    id: 'EWX8o7sN9iU', // AI Video Production 2
    start: 40,
  },
  {
    id: 'ZRaYq9Lsp7I', // Fortalece
    start: 35,
  }
];

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-white selection:text-black relative">
      
      {/* Pill Navigation */}
      <header className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-auto px-4">
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="nav-glass rounded-full px-6 md:px-8 py-3.5 flex items-center gap-4 md:gap-6 whitespace-nowrap"
        >
          <a href="#" className="text-xs md:text-sm font-medium tracking-[0.15em] text-white hover:opacity-80 transition-opacity">
            MΔRCIØ <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 drop-shadow-[0_0_10px_rgba(45,212,191,0.4)]">RØCHΔ</span>
          </a>
          
          <span className="text-[#a1a1a6]/30 font-light text-xs md:text-sm">|</span>
          
          <div className="flex items-center gap-4 md:gap-6 text-[10px] md:text-xs font-light tracking-[0.2em] uppercase text-[#a1a1a6]">
            <a href="#work" className="hover:text-white transition-colors duration-300">Work</a>
            <span className="text-[#a1a1a6]/30 font-light">|</span>
            <a href="#about" className="hover:text-white transition-colors duration-300">About</a>
          </div>
        </motion.nav>
      </header>

      <main className="relative z-10 pt-32 pb-32 px-6 max-w-[90rem] mx-auto">
        
        {/* Hero Title - Compact, Single Line, Neon Gradient */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-2xl md:text-4xl font-extralight tracking-[0.2em] text-white mb-2">
            MΔRCIØ <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 drop-shadow-[0_0_15px_rgba(45,212,191,0.4)]">RØCHΔ</span>
          </h1>
          <div className="w-12 h-[1px] bg-[#a1a1a6]/30 mb-3"></div>
          <p className="text-[10px] md:text-xs text-[#a1a1a6] font-light tracking-[0.4em] uppercase flex items-center justify-center gap-2">
            <svg width="0" height="0" className="absolute">
              <linearGradient id="cyborg-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop stopColor="#2dd4bf" offset="0%" />
                <stop stopColor="#67e8f9" offset="100%" />
              </linearGradient>
            </svg>
            <svg 
              width={18} 
              height={18} 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="url(#cyborg-gradient)" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="drop-shadow-[0_0_10px_rgba(45,212,191,0.6)] -mt-[2px]"
            >
              {/* Helmet Shell */}
              <path d="M12 2a9 9 0 0 0-9 9v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a9 9 0 0 0-9-9Z" />
              {/* Visor */}
              <path d="M3 11c0-2 2-4 9-4s9 2 9 4v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3Z" fill="rgba(45,212,191,0.15)" />
              {/* Glowing Eye Line */}
              <path d="M7 12h10" strokeWidth="2" />
              {/* Chin Detail */}
              <path d="M10 18h4" />
            </svg>
            <span>AI Creator & Producer</span>
            <svg 
              width={18} 
              height={18} 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="url(#cyborg-gradient)" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="drop-shadow-[0_0_10px_rgba(45,212,191,0.6)] -mt-[2px] -scale-x-100"
            >
              {/* Camera Body */}
              <rect x="3" y="10" width="12" height="8" rx="2" />
              {/* Lens */}
              <path d="M15 12l5-2v8l-5-2" fill="rgba(45,212,191,0.15)" />
              {/* Top Reels */}
              <circle cx="6" cy="6" r="2.5" />
              <circle cx="12" cy="6" r="2.5" />
              <path d="M6 8.5v1.5" />
              <path d="M12 8.5v1.5" />
            </svg>
          </p>
        </motion.div>

        {/* Videos Section - Edge to Edge Premium Glass */}
        <section id="work" className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative ${index === 0 ? 'md:col-span-2' : ''}`}
              >
                <div className="premium-glass premium-border rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative">
                  
                  {/* Video Player - Edge to Edge */}
                  <div className="relative w-full aspect-video bg-[#000000]">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                      src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&controls=1&autoplay=1&mute=1&playsinline=1&start=${video.start}&loop=1&playlist=${video.id}`}
                      title="Video Production"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>

                    {/* Subtle Overlay Shine on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Copy Section - Editorial & Sophisticated */}
        <section id="about" className="pt-12 pb-0 max-w-5xl mx-auto">
          <div className="flex flex-col items-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-extralight text-white mb-16 tracking-tighter leading-[1.1] text-center"
            >
              As pessoas não pulam vídeos.<br className="hidden md:block" />
              <span className="relative inline-block mt-2 md:mt-4">
                <span className="relative z-10 font-normal text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 drop-shadow-[0_0_15px_rgba(45,212,191,0.3)]">
                  Elas pulam o tédio.
                </span>
                <svg className="absolute w-[105%] h-3 md:h-5 -bottom-1 md:-bottom-2 -left-[2.5%] opacity-90 pointer-events-none" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M2 7 C 20 4, 40 8, 60 5 C 75 3, 90 6, 98 4" stroke="url(#chalk-gradient)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  <path d="M5 8 C 30 6, 50 9, 70 6 C 85 4, 95 7, 99 5" stroke="url(#chalk-gradient)" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />
                  <defs>
                    <linearGradient id="chalk-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2dd4bf" />
                      <stop offset="100%" stopColor="#67e8f9" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </motion.h2>
            
            <div className="space-y-6 text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-2xl w-full text-left">
              <motion.p
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                Você tem exatamente 3 segundos antes que o seu cliente deslize a tela.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                O roteiro pode ser genial, mas se o visual parecer comum, ninguém vai ouvir a sua mensagem.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                Até pouco tempo atrás, criar algo que fizesse o olho humano "travar" custava milhões e demorava meses. Estúdios, locações caras, equipes gigantes.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="relative inline-block mt-1 md:mt-2">
                  <span className="relative z-10 font-normal text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 drop-shadow-[0_0_15px_rgba(45,212,191,0.3)]">
                    O jogo mudou.
                  </span>
                  <svg className="absolute w-[105%] h-3 md:h-5 -bottom-1 md:-bottom-2 -left-[2.5%] opacity-90 pointer-events-none" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M2 7 C 20 4, 40 8, 60 5 C 75 3, 90 6, 98 4" stroke="url(#chalk-gradient-jogo)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    <path d="M5 8 C 30 6, 50 9, 70 6 C 85 4, 95 7, 99 5" stroke="url(#chalk-gradient-jogo)" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />
                    <defs>
                      <linearGradient id="chalk-gradient-jogo" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2dd4bf" />
                        <stop offset="100%" stopColor="#67e8f9" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                Como AI Creator, eu utilizo Inteligência Artificial para hackear esse processo. Produzo campanhas hiper-realistas e mundos surreais por uma fração do tempo e do custo tradicional.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="pt-8 pb-0 w-full"
              >
                <div className="relative p-6 md:p-8 rounded-3xl overflow-hidden group">
                  {/* Glass Background */}
                  <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-3xl transition-colors duration-500 group-hover:bg-white/[0.06] group-hover:border-teal-500/30"></div>
                  
                  {/* Subtle glowing orb behind the text */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-teal-500/10 to-cyan-500/10 blur-[50px] rounded-full pointer-events-none"></div>

                  {/* Large decorative quote mark */}
                  <div className="absolute -top-4 left-4 text-teal-500/10 font-serif text-[120px] leading-none select-none pointer-events-none">"</div>

                  {/* Content */}
                  <p className="relative z-10 text-white font-light text-xl md:text-2xl leading-relaxed text-center">
                    O resultado não é apenas um vídeo bonito.<br className="hidden md:block" />
                    <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 drop-shadow-[0_0_15px_rgba(45,212,191,0.2)]">
                      {" "}É engenharia de retenção.{" "}
                    </span><br className="hidden md:block" />
                    É fazer o seu projeto parecer injusto com a concorrência.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer / Contact */}
      <footer className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 pt-4 pb-16 flex flex-col items-center text-center">
          <motion.h3 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl font-extralight mb-12 text-white tracking-tighter max-w-2xl leading-tight"
          >
            Vamos fazer o seu próximo projeto <br className="md:hidden" />
            <span className="relative inline-block mt-1 md:mt-2">
              <span className="relative z-10 font-normal text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 drop-shadow-[0_0_15px_rgba(45,212,191,0.3)]">
                impossível de ser ignorado.
              </span>
              <svg className="absolute w-[105%] h-3 md:h-5 -bottom-1 md:-bottom-2 -left-[2.5%] opacity-90 pointer-events-none" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M2 7 C 20 4, 40 8, 60 5 C 75 3, 90 6, 98 4" stroke="url(#chalk-gradient-footer)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M5 8 C 30 6, 50 9, 70 6 C 85 4, 95 7, 99 5" stroke="url(#chalk-gradient-footer)" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />
                <defs>
                  <linearGradient id="chalk-gradient-footer" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2dd4bf" />
                    <stop offset="100%" stopColor="#67e8f9" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </motion.h3>
          
          <motion.a 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            href="https://instagram.com/marciorocha_" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative premium-glass premium-border px-10 py-5 rounded-full flex items-center gap-5 hover:scale-105 transition-all duration-500 overflow-hidden"
          >
            {/* Hover Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 text-white opacity-70 group-hover:text-black group-hover:opacity-100 transition-all duration-300">
              <Instagram size={18} strokeWidth={1.5} />
            </div>
            <span className="relative z-10 font-light tracking-[0.2em] text-white uppercase text-xs opacity-70 group-hover:text-black group-hover:font-medium group-hover:opacity-100 transition-all duration-300">
              @marciorocha_
            </span>
          </motion.a>
          
          <div className="mt-32 text-[10px] font-light tracking-[0.3em] text-[#a1a1a6] uppercase">
            &copy; {new Date().getFullYear()} MΔRCIØ RØCHΔ. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}


