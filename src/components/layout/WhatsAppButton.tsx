'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const HREF = 'https://wa.me/5595981075842?text=' + encodeURIComponent('¡Hola! Vine desde el sitio y quiero saber más sobre los servicios de Arvex.');

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const check = () => setVisible(window.scrollY > 500);
    check();
    window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={HREF}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Hablar por WhatsApp"
          initial={{ opacity: 0, scale: 0.7, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 16 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
        >
          {/* Label hover */}
          <span className="hidden md:block font-mono text-[10px] uppercase tracking-widest text-paper bg-ink-2 border border-white/[0.08] px-3 py-2 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
            Hablar ahora
          </span>

          {/* Botón */}
          <div className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_4px_24px_rgb(37_211_102_/_0.35)]">
            <span
              className="absolute inset-0 rounded-full bg-[#25D366]"
              style={{ animation: 'wa-pulse 2.2s ease-out infinite' }}
            />
            <svg
              width="28" height="28" viewBox="0 0 32 32"
              fill="white" aria-hidden="true" className="relative z-10"
            >
              <path d="M16 2C8.268 2 2 8.268 2 16c0 2.47.67 4.784 1.836 6.773L2 30l7.418-1.808A13.93 13.93 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.54 11.54 0 01-5.898-1.612l-.424-.25-4.4 1.072 1.1-4.28-.278-.44A11.558 11.558 0 014.4 16c0-6.396 5.204-11.6 11.6-11.6S27.6 9.604 27.6 16 22.396 27.6 16 27.6zm6.354-8.668c-.348-.174-2.058-1.016-2.378-1.132-.32-.116-.552-.174-.784.174-.232.348-.9 1.132-1.102 1.364-.202.232-.406.26-.754.086-.348-.174-1.47-.542-2.8-1.726-1.034-.922-1.732-2.062-1.934-2.41-.202-.348-.022-.536.152-.708.156-.156.348-.406.522-.61.174-.202.232-.348.348-.58.116-.232.058-.436-.028-.61-.086-.174-.784-1.888-1.074-2.588-.282-.68-.57-.588-.784-.598l-.668-.012c-.232 0-.61.086-.928.434-.32.348-1.218 1.19-1.218 2.9s1.246 3.364 1.42 3.596c.174.232 2.452 3.744 5.942 5.252.83.358 1.478.572 1.982.732.832.264 1.59.226 2.188.138.668-.1 2.058-.842 2.348-1.654.29-.812.29-1.508.204-1.654-.086-.146-.32-.232-.668-.406z" />
            </svg>
          </div>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
