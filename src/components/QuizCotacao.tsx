import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ShieldCheck,
  MessageCircle,
  ExternalLink,
  Lock,
} from 'lucide-react';
import { CONSULTANT_INFO, OFFICIAL_ADHESION_LINK } from '../constants';
import { QuizData } from '../types';

const INITIAL_QUIZ: QuizData = {
  year: '',
  model: '',
  usage: '',
  concerns: [],
  currentInsurance: '',
  timeline: '',
  fullName: '',
  whatsapp: '',
  email: '',
  city: '',
  lgpdAccepted: false,
};

const YEAR_OPTIONS = ['Até 1999', '2000 a 2009', '2010 a 2017', '2018 ou mais novo'];
const USAGE_OPTIONS = ['Uso pessoal', 'Trabalho/deslocamento', 'App (Uber/99)', 'Táxi'];
const CONCERN_OPTIONS = ['Roubo e furto', 'Colisão', 'Danos a terceiros', 'Vidros e faróis', 'Assistência 24h'];
const INSURANCE_STATUS_OPTIONS = [
  'Tenho e quero economizar',
  'Nunca tive',
  'Tive e cancelei',
  'Fui recusado por outra seguradora',
];
const TIMELINE_OPTIONS = ['Hoje mesmo', 'Nesta semana', 'Neste mês', 'Só pesquisando'];

export function QuizCotacao() {
  const [step, setStep] = useState(1);
  const [quizData, setQuizData] = useState<QuizData>(INITIAL_QUIZ);
  const [errorMsg, setErrorMsg] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  // Phone Mask Helper: (00) 00000-0000
  const formatPhone = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setQuizData((prev) => ({ ...prev, whatsapp: formatted }));
    setErrorMsg('');
  };

  const handleNextStep = () => {
    setErrorMsg('');
    if (step === 1 && !quizData.year) {
      setErrorMsg('Selecione o ano do seu veículo para continuar.');
      return;
    }
    if (step === 2 && !quizData.model.trim()) {
      setErrorMsg('Digite a marca e o modelo do seu veículo.');
      return;
    }
    if (step === 3 && !quizData.usage) {
      setErrorMsg('Selecione como você utiliza o veículo.');
      return;
    }
    if (step === 4 && quizData.concerns.length === 0) {
      setErrorMsg('Selecione pelo menos uma preocupação.');
      return;
    }
    if (step === 5 && !quizData.currentInsurance) {
      setErrorMsg('Selecione sua situação atual de seguro.');
      return;
    }
    if (step === 6 && !quizData.timeline) {
      setErrorMsg('Selecione quando pretende contratar.');
      return;
    }
    if (step === 7) {
      if (!quizData.fullName.trim()) {
        setErrorMsg('Por favor, informe seu nome completo.');
        return;
      }
      const phoneDigits = quizData.whatsapp.replace(/\D/g, '');
      if (phoneDigits.length < 10) {
        setErrorMsg('Informe um número de WhatsApp com DDD válido.');
        return;
      }
      if (!quizData.email.trim() || !quizData.email.includes('@')) {
        setErrorMsg('Informe um endereço de e-mail válido.');
        return;
      }
      if (!quizData.city.trim()) {
        setErrorMsg('Por favor, informe sua cidade e estado.');
        return;
      }
      if (!quizData.lgpdAccepted) {
        setErrorMsg('Você precisa aceitar os termos da política de privacidade para continuar.');
        return;
      }
      setIsCompleted(true);
      return;
    }

    setStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setErrorMsg('');
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  const toggleConcern = (item: string) => {
    setErrorMsg('');
    setQuizData((prev) => {
      const exists = prev.concerns.includes(item);
      if (exists) {
        return { ...prev, concerns: prev.concerns.filter((c) => c !== item) };
      } else {
        return { ...prev, concerns: [...prev.concerns, item] };
      }
    });
  };

  const getFirstName = () => {
    if (!quizData.fullName.trim()) return 'Cliente';
    return quizData.fullName.trim().split(' ')[0];
  };

  const generateWhatsappUrl = () => {
    const textMsg = `*NOVA COTAÇÃO — SITE LOOVI*
Nome: ${quizData.fullName}
WhatsApp: ${quizData.whatsapp}
E-mail: ${quizData.email}
Cidade: ${quizData.city}
Ano do veículo: ${quizData.year}
Marca/Modelo: ${quizData.model}
Uso: ${quizData.usage}
Preocupações: ${quizData.concerns.join(', ')}
Situação atual: ${quizData.currentInsurance}
Prazo: ${quizData.timeline}`;

    return `https://wa.me/${CONSULTANT_INFO.whatsappRaw}?text=${encodeURIComponent(textMsg)}`;
  };

  const totalSteps = 7;
  const progressPercent = Math.round((step / totalSteps) * 100);

  return (
    <section id="simular" className="py-20 lg:py-28 bg-[#3F1568] text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden bg-gradient-to-b from-white/[0.06] to-white/[0.02]">
          {!isCompleted ? (
            <>
              {/* Header & Progress Bar */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#8A4DE8]" />
                    Simulação 100% Gratuita & Sem Compromisso
                  </span>
                  <span>Etapa {step} de {totalSteps}</span>
                </div>

                {/* Progress Bar Track */}
                <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-loovi-gradient transition-all duration-300 ease-out"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Error Alert */}
              {errorMsg && (
                <div className="mb-6 p-4 rounded-xl bg-[#FF4D4D]/15 border border-[#FF4D4D]/30 text-[#FF4D4D] text-xs font-semibold animate-shake">
                  {errorMsg}
                </div>
              )}

              {/* STEP 1: Year */}
              {step === 1 && (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="font-sora font-extrabold text-2xl sm:text-3xl text-white">
                    Seu carro é de qual ano?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {YEAR_OPTIONS.map((yearOption) => (
                      <button
                        key={yearOption}
                        onClick={() => {
                          setQuizData((prev) => ({ ...prev, year: yearOption }));
                          setErrorMsg('');
                        }}
                        className={`min-h-[52px] p-4 rounded-2xl font-sora font-bold text-sm text-left transition-all flex items-center justify-between border ${
                          quizData.year === yearOption
                            ? 'bg-loovi-gradient text-white border-transparent shadow-lg shadow-[#481773]/40'
                            : 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-200'
                        }`}
                      >
                        <span>{yearOption}</span>
                        {quizData.year === yearOption && <Check className="w-5 h-5 text-white" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: Model & Brand */}
              {step === 2 && (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="font-sora font-extrabold text-2xl sm:text-3xl text-white">
                    Qual a marca e o modelo do veículo?
                  </h3>
                  <p className="text-sm text-slate-400">
                    Exemplo: Fiat Argo 1.0, Hyundai HB20, Toyota Corolla, etc.
                  </p>
                  <div>
                    <input
                      type="text"
                      value={quizData.model}
                      onChange={(e) => {
                        setQuizData((prev) => ({ ...prev, model: e.target.value }));
                        setErrorMsg('');
                      }}
                      placeholder="Digite a marca e modelo (ex: Fiat Argo 2021)"
                      className="w-full h-14 px-5 rounded-2xl bg-white/5 border border-white/15 text-white placeholder-slate-500 font-medium text-base focus:outline-none focus:border-[#6D2DBF] focus:ring-2 focus:ring-[#6D2DBF]/30"
                    />
                  </div>
                </div>
              )}

              {/* STEP 3: Usage */}
              {step === 3 && (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="font-sora font-extrabold text-2xl sm:text-3xl text-white">
                    Como você utiliza esse carro?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {USAGE_OPTIONS.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setQuizData((prev) => ({ ...prev, usage: option }));
                          setErrorMsg('');
                        }}
                        className={`min-h-[52px] p-4 rounded-2xl font-sora font-bold text-sm text-left transition-all flex items-center justify-between border ${
                          quizData.usage === option
                            ? 'bg-loovi-gradient text-white border-transparent shadow-lg shadow-[#481773]/40'
                            : 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-200'
                        }`}
                      >
                        <span>{option}</span>
                        {quizData.usage === option && <Check className="w-5 h-5 text-white" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 4: Concerns (Multiple Choice) */}
              {step === 4 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="space-y-1">
                    <h3 className="font-sora font-extrabold text-2xl sm:text-3xl text-white">
                      O que mais te preocupa no trânsito?
                    </h3>
                    <p className="text-xs text-slate-400">Pode selecionar mais de uma opção.</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {CONCERN_OPTIONS.map((option) => {
                      const isSelected = quizData.concerns.includes(option);
                      return (
                        <button
                          key={option}
                          onClick={() => toggleConcern(option)}
                          className={`min-h-[52px] p-4 rounded-2xl font-sora font-bold text-sm text-left transition-all flex items-center justify-between border ${
                            isSelected
                              ? 'bg-[#6D2DBF]/30 border-[#8A4DE8] text-white shadow-md'
                              : 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-200'
                          }`}
                        >
                          <span>{option}</span>
                          <div
                            className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                              isSelected ? 'bg-[#6D2DBF] border-[#8A4DE8] text-white' : 'border-white/30'
                            }`}
                          >
                            {isSelected && <Check className="w-3.5 h-3.5" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 5: Current Insurance */}
              {step === 5 && (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="font-sora font-extrabold text-2xl sm:text-3xl text-white">
                    Qual a sua situação atual sobre seguro?
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {INSURANCE_STATUS_OPTIONS.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setQuizData((prev) => ({ ...prev, currentInsurance: option }));
                          setErrorMsg('');
                        }}
                        className={`min-h-[52px] p-4 rounded-2xl font-sora font-bold text-sm text-left transition-all flex items-center justify-between border ${
                          quizData.currentInsurance === option
                            ? 'bg-loovi-gradient text-white border-transparent shadow-lg shadow-[#481773]/40'
                            : 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-200'
                        }`}
                      >
                        <span>{option}</span>
                        {quizData.currentInsurance === option && <Check className="w-5 h-5 text-white" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 6: Timeline */}
              {step === 6 && (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="font-sora font-extrabold text-2xl sm:text-3xl text-white">
                    Quando pretende ativar a proteção do seu veículo?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {TIMELINE_OPTIONS.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setQuizData((prev) => ({ ...prev, timeline: option }));
                          setErrorMsg('');
                        }}
                        className={`min-h-[52px] p-4 rounded-2xl font-sora font-bold text-sm text-left transition-all flex items-center justify-between border ${
                          quizData.timeline === option
                            ? 'bg-loovi-gradient text-white border-transparent shadow-lg shadow-[#481773]/40'
                            : 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-200'
                        }`}
                      >
                        <span>{option}</span>
                        {quizData.timeline === option && <Check className="w-5 h-5 text-white" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 7: Contact Data */}
              {step === 7 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="space-y-1">
                    <h3 className="font-sora font-extrabold text-2xl sm:text-3xl text-white">
                      Onde devemos enviar a sua cotação?
                    </h3>
                    <p className="text-xs text-slate-400">
                      Preencha os dados abaixo para visualizar sua simulação instantânea.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Nome completo
                      </label>
                      <input
                        type="text"
                        value={quizData.fullName}
                        onChange={(e) => {
                          setQuizData((prev) => ({ ...prev, fullName: e.target.value }));
                          setErrorMsg('');
                        }}
                        placeholder="Seu nome e sobrenome"
                        className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 font-medium text-sm focus:outline-none focus:border-[#6D2DBF]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          WhatsApp (com DDD)
                        </label>
                        <input
                          type="tel"
                          value={quizData.whatsapp}
                          onChange={handlePhoneChange}
                          placeholder="(41) 99999-9999"
                          className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 font-medium text-sm focus:outline-none focus:border-[#6D2DBF]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          E-mail
                        </label>
                        <input
                          type="email"
                          value={quizData.email}
                          onChange={(e) => {
                            setQuizData((prev) => ({ ...prev, email: e.target.value }));
                            setErrorMsg('');
                          }}
                          placeholder="seu.email@exemplo.com"
                          className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 font-medium text-sm focus:outline-none focus:border-[#6D2DBF]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Cidade e Estado
                      </label>
                      <input
                        type="text"
                        value={quizData.city}
                        onChange={(e) => {
                          setQuizData((prev) => ({ ...prev, city: e.target.value }));
                          setErrorMsg('');
                        }}
                        placeholder="Ex: Curitiba / PR"
                        className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 font-medium text-sm focus:outline-none focus:border-[#6D2DBF]"
                      />
                    </div>

                    {/* LGPD Consent Checkbox */}
                    <div className="pt-2">
                      <label className="flex items-start gap-3 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={quizData.lgpdAccepted}
                          onChange={(e) => {
                            setQuizData((prev) => ({ ...prev, lgpdAccepted: e.target.checked }));
                            setErrorMsg('');
                          }}
                          className="mt-1 w-4 h-4 rounded border-white/20 text-[#6D2DBF] focus:ring-[#6D2DBF] bg-white/10"
                        />
                        <span className="text-xs text-slate-400 leading-relaxed">
                          Concordo em receber o contato da consultora autorizada Barbara Duraes referente à minha cotação de seguro veicular, de acordo com a Lei Geral de Proteção de Dados (LGPD).
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between gap-4">
                {step > 1 ? (
                  <button
                    onClick={handlePrevStep}
                    className="px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-sora font-semibold text-xs transition-colors flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Voltar
                  </button>
                ) : (
                  <div />
                )}

                <button
                  onClick={handleNextStep}
                  className="shine-effect px-8 py-3.5 rounded-full bg-loovi-gradient text-white font-sora font-bold text-sm shadow-lg shadow-[#481773]/40 hover:scale-105 transition-all flex items-center gap-2 ml-auto"
                >
                  <span>{step === totalSteps ? 'Gerar minha cotação' : 'Avançar'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </>
          ) : (
            /* FINAL SCREEN UPON QUIZ COMPLETION */
            <div className="py-8 text-center space-y-6 animate-scaleUp">
              {/* Check Circle Animation Icon */}
              <div className="w-20 h-20 rounded-full bg-[#2ED9A0]/20 border-2 border-[#2ED9A0] flex items-center justify-center mx-auto text-[#2ED9A0] animate-pulse-glow">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="font-sora font-extrabold text-3xl sm:text-4xl text-white">
                  Pronto, {getFirstName()}!
                </h3>
                <p className="text-base text-slate-300 max-w-lg mx-auto">
                  Sua cotação personalizada foi montada com sucesso. Escolha abaixo como deseja prosseguir:
                </p>
              </div>

              {/* Summary Preview Box */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 max-w-md mx-auto text-left space-y-2 text-xs text-slate-300">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Veículo:</span>
                  <span className="font-bold text-white">{quizData.model} ({quizData.year})</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Uso:</span>
                  <span className="font-bold text-white">{quizData.usage}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Cidade:</span>
                  <span className="font-bold text-white">{quizData.city}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Consultora:</span>
                  <span className="font-bold text-[#2ED9A0]">Barbara Duraes</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-md mx-auto">
                <a
                  href={generateWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shine-effect w-full px-6 py-4 rounded-full bg-[#2ED9A0] text-black font-sora font-extrabold text-sm shadow-xl shadow-[#2ED9A0]/30 hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Enviar para a Barbara no WhatsApp
                </a>

                <a
                  href={OFFICIAL_ADHESION_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white font-sora font-semibold text-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>Contratar direto no site oficial</span>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>
              </div>

              <div className="pt-2 flex items-center justify-center gap-2 text-xs text-slate-400">
                <Lock className="w-3.5 h-3.5 text-[#2ED9A0]" />
                <span>Atendimento 100% humano e seguro por WhatsApp</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
