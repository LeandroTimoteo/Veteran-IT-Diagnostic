
import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';

interface FooterProps {
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16 border-b border-slate-800 pb-16">
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">Filosofia</h4>
            <p className="text-sm text-slate-400 leading-relaxed italic border-l-2 border-slate-700 pl-4">"Software resiliente, performático e fácil de manter."</p>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">Social</h4>
            <div className="flex flex-col space-y-3 text-sm text-slate-300">
              <a href="https://github.com/LeandroTimoteo">GitHub</a>
              <a href="https://www.linkedin.com/in/leandro-timóteo-ads">LinkedIn</a>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">Contato</h4>
            <p className="text-md font-bold">{t.contactName}</p>
            <a href="tel:5583987830223" className="text-blue-400 font-mono">83 98783-0223</a>
          </div>
        </div>
        <p className="text-[10px] text-slate-600 uppercase tracking-widest text-center">{t.footerCopyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
