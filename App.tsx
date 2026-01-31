import React, { useState } from 'react';
import Header from './components/Header';
import DiagnosisForm from './components/DiagnosisForm';
import DiagnosisResult from './components/DiagnosisResult';
import Footer from './components/Footer';
import { getVeteranDiagnosis } from './services/geminiService';
import { DiagnosisResponse, LoadingState, Language } from './types';
import { translations } from './translations';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('pt');
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);
  const [diagnosis, setDiagnosis] = useState<DiagnosisResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const t = translations[lang];

  const handleReset = () => {
    setDiagnosis(null);
    setError(null);
    setLoadingState(LoadingState.IDLE);
  };

  const handleAnalyze = async (problem: string) => {
    setLoadingState(LoadingState.LOADING);
    setError(null);
    setDiagnosis(null);

    try {
      const prompt = `Response language: ${
        lang === 'pt' ? 'Portuguese' : 'English'
      }. Technical issue details: ${problem}`;

      const result = await getVeteranDiagnosis(prompt);

      setDiagnosis(result);
      setLoadingState(LoadingState.SUCCESS);

      setTimeout(() => {
        document
          .getElementById('result-section')
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 200);
    } catch (err) {
      console.error('Technical error:', err);
      setError(
        lang === 'pt'
          ? 'Falha na análise. Verifique sua chave de API e conexão.'
          : 'Analysis failed. Please check your API key and connection.'
      );
      setLoadingState(LoadingState.ERROR);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] selection:bg-slate-900 selection:text-white">
      <Header lang={lang} setLang={setLang} />

      <main className="flex-grow">
        {/* HERO */}
        <section className="py-24 md:py-32 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px]" />
          </div>

          <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[1.1]">
              {t.heroTitle}
              <br />
              <span className="text-slate-500">{t.heroTitleSpan}</span>
            </h2>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-12">
              {t.heroDesc}
            </p>

            <button
              onClick={() => {
                handleReset();
                document
                  .getElementById('problem-form')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block bg-white text-slate-900 px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-blue-50 transition-colors shadow-2xl"
            >
              {t.startDiagnosis}
            </button>
          </div>
        </section>

        {/* FORM */}
        <section
          id="problem-form"
          className="max-w-4xl mx-auto px-4 -mt-16 relative z-20"
        >
          <DiagnosisForm
            onAnalyze={handleAnalyze}
            onReset={handleReset}
            isLoading={loadingState === LoadingState.LOADING}
            lang={lang}
            diagnosis={diagnosis}
          />

          {error && (
            <div className="mt-8 p-4 bg-red-50 border border-red-100 text-red-600 rounded-lg text-sm font-medium">
              {error}
            </div>
          )}

          <div id="result-section">
            {loadingState === LoadingState.SUCCESS && diagnosis && (
              <DiagnosisResult data={diagnosis} lang={lang} />
            )}
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className="mt-32 max-w-7xl mx-auto px-4 py-20 border-t border-slate-200">
          <div className="grid md:grid-cols-3 gap-12">
            {[1, 2, 3].map((num) => (
              <div key={num} className="space-y-4">
                <span className="text-4xl font-black text-slate-100">
                  0{num}
                </span>
                <h5 className="font-bold text-slate-900 uppercase text-xs tracking-widest">
                  {(t as any)[`principle${num}Title`]}
                </h5>
                <p className="text-slate-500 text-sm">
                  {(t as any)[`principle${num}Text`]}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  );
};

export default App;
