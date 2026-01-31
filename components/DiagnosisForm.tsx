
import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';

interface DiagnosisFormProps {
  onAnalyze: (problem: string) => void;
  onReset: () => void;
  isLoading: boolean;
  lang: Language;
  diagnosis: any;
}

const DiagnosisForm: React.FC<DiagnosisFormProps> = ({ onAnalyze, onReset, isLoading, lang, diagnosis }) => {
  const [input, setInput] = useState('');
  const t = translations[lang];
  
  // Recarregar traduções quando idioma muda
  React.useEffect(() => {
    // Force re-render quando lang muda
  }, [lang]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) onAnalyze(input);
  };

  const handleNewSearch = () => {
    setInput('');
    onReset();
  };

  const isSearching = diagnosis !== null;

  return (
    <div className="bg-white rounded-xl shadow-2xl border border-slate-200 p-8">
      <form onSubmit={isSearching ? (e) => { e.preventDefault(); handleNewSearch(); } : handleSubmit} className="space-y-6">
        <label className="block text-sm font-bold text-slate-900 uppercase tracking-widest">{t.formLabel}</label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={5}
          className="w-full rounded-lg border-slate-200 focus:ring-slate-900 focus:border-slate-900 p-4 transition-all"
          placeholder={t.formPlaceholder}
          required
          disabled={isSearching}
        />
        <button 
          type="submit" 
          disabled={isLoading && !isSearching} 
          className="w-full bg-slate-900 text-white py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-slate-800 transition-all disabled:opacity-50"
        >
          {isLoading && !isSearching ? t.btnAnalyzing : t.btnAnalyze}
        </button>
      </form>
    </div>
  );
};

export default DiagnosisForm;
