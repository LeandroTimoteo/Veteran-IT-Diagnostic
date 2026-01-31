
import React from 'react';
import { DiagnosisResponse, Language } from '../types';
import { translations } from '../translations';

interface DiagnosisResultProps {
  data: DiagnosisResponse;
  lang: Language;
}

const DiagnosisResult: React.FC<DiagnosisResultProps> = ({ data, lang }) => {
  const t = translations[lang];

  return (
    <div className="mt-12 bg-white p-8 rounded-xl shadow-xl border-l-8 border-slate-900 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{t.reportTitle}</h3>
      <p className="text-slate-800 text-lg mb-8 leading-relaxed font-light">{data.analysis}</p>
      <div className="space-y-4">
        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">{t.recTitle}</h4>
        <ul className="space-y-2">
          {data.recommendations.map((rec, i) => (
            <li key={i} className="flex text-sm text-slate-600"><span className="mr-3 font-bold text-slate-900">{i+1}.</span> {rec}</li>
          ))}
        </ul>
      </div>
      <div className="mt-10 pt-6 border-t border-slate-100 italic text-slate-500">"{data.principles}"</div>
    </div>
  );
};

export default DiagnosisResult;
