
import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ lang, setLang }) => {
  const t = translations[lang];

  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-slate-900 flex items-center justify-center rounded shadow-lg transform rotate-3">
             <span className="text-white font-bold text-xs">LT</span>
          </div>
          <h1 className="text-lg font-bold tracking-tighter text-slate-900 uppercase">
            Leandro <span className="font-light text-slate-500">Timóteo Software Engineering</span>
          </h1>
        </div>
        
        <div className="flex items-center space-x-3 md:space-x-6">
          <div className="hidden sm:flex items-center space-x-2 md:space-x-4">
            <a href="https://www.linkedin.com/in/leandro-timóteo-ads" target="_blank" rel="noopener noreferrer" className="bg-[#0077b5] text-white px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-widest flex items-center shadow-sm">LinkedIn</a>
            <a href="https://github.com/LeandroTimoteo" target="_blank" rel="noopener noreferrer" className="bg-slate-800 text-white px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-widest shadow-sm">GitHub</a>
          </div>
          <div className="flex items-center border border-slate-200 rounded p-0.5 bg-slate-50">
            <button onClick={() => setLang('pt')} className={`px-2 py-0.5 text-[10px] font-bold rounded ${lang === 'pt' ? 'bg-slate-900 text-white' : 'text-slate-400'}`}>PT</button>
            <button onClick={() => setLang('en')} className={`px-2 py-0.5 text-[10px] font-bold rounded ${lang === 'en' ? 'bg-slate-900 text-white' : 'text-slate-400'}`}>EN</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
