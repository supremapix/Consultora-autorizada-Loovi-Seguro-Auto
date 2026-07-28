import React, { useState } from 'react';
import { MessageCircle, Send, CheckCircle2, Phone, Mail, MapPin, FileText } from 'lucide-react';
import { CONSULTANT_INFO } from '../constants';
import { ContactFormData } from '../types';

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    whatsapp: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  // Phone Mask Helper
  const formatPhone = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, whatsapp: formatPhone(e.target.value) }));
    setErrors((prev) => ({ ...prev, whatsapp: '' }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Por favor, informe seu nome completo.';
    }

    const phoneDigits = formData.whatsapp.replace(/\D/g, '');
    if (!formData.whatsapp.trim() || phoneDigits.length < 10) {
      newErrors.whatsapp = 'Informe um WhatsApp com DDD (mínimo 10 dígitos).';
    }

    if (formData.email.trim() && !formData.email.includes('@')) {
      newErrors.email = 'Informe um endereço de e-mail válido.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const textMsg = `*CONTATO — SITE LOOVI*
Nome: ${formData.name}
WhatsApp: ${formData.whatsapp}
E-mail: ${formData.email || 'Não informado'}
Mensagem: ${formData.message || 'Desejo receber informações sobre o seguro Loovi.'}`;

    const waUrl = `https://wa.me/${CONSULTANT_INFO.whatsappRaw}?text=${encodeURIComponent(textMsg)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-[#3F1568] text-white relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6D2DBF]/10 border border-[#6D2DBF]/30 text-[#8A4DE8] text-xs font-bold uppercase tracking-widest">
              <MessageCircle className="w-4 h-4" />
              <span>Fale direto comigo</span>
            </div>

            <h2 className="font-sora font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Ainda tem dúvidas? Fale com a consultora Barbara
            </h2>

            <p className="text-base text-slate-300 leading-relaxed font-normal">
              Se você prefere tirar dúvidas específicas antes de simular, envie uma mensagem direta. O atendimento é rápido, sem robôs e 100% humanizado.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#2ED9A0]/20 flex items-center justify-center text-[#2ED9A0] shrink-0">
                  <MessageCircle className="w-5 h-5 text-[#2ED9A0]" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">WhatsApp Direct</span>
                  <a
                    href={`https://wa.me/${CONSULTANT_INFO.whatsappRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sora font-bold text-white text-base hover:text-[#2ED9A0] transition-colors"
                  >
                    {CONSULTANT_INFO.whatsapp}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#8A4DE8]/20 flex items-center justify-center text-[#8A4DE8] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Atendimento por Telefone / Ligação (2 Números)</span>
                  <div className="flex flex-col gap-1.5 mt-1.5">
                    <a
                      href={`tel:+${CONSULTANT_INFO.phone1Raw}`}
                      className="font-sora font-bold text-white text-sm sm:text-base hover:text-[#2ED9A0] transition-colors flex items-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#2ED9A0]"></span>
                      <span>{CONSULTANT_INFO.phone1}</span>
                      <span className="text-xs text-slate-400 font-normal">(Curitiba/PR)</span>
                    </a>
                    <a
                      href={`tel:+${CONSULTANT_INFO.phone2Raw}`}
                      className="font-sora font-bold text-white text-sm sm:text-base hover:text-[#2ED9A0] transition-colors flex items-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#8A4DE8]"></span>
                      <span>{CONSULTANT_INFO.phone2}</span>
                      <span className="text-xs text-slate-400 font-normal">(Belo Horizonte/MG)</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#8A4DE8]/20 flex items-center justify-center text-[#8A4DE8]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">E-mail Profissional</span>
                  <a
                    href={`mailto:${CONSULTANT_INFO.email}`}
                    className="font-sora font-bold text-white text-sm hover:text-[#8A4DE8] transition-colors"
                  >
                    {CONSULTANT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#8A4DE8]/20 flex items-center justify-center text-[#8A4DE8]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Localização</span>
                  <span className="font-sora font-semibold text-white text-xs">
                    Curitiba / PR — Atendimento para todo o Brasil
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Fast Contact Form */}
          <div className="lg:col-span-7">
            {/* Form Visual Identification Badge for Seniors */}
            <div className="text-center lg:text-left mb-4">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-[#FFE600] text-[#131522] font-extrabold text-sm sm:text-base shadow-md border-2 border-black">
                <FileText className="w-5 h-5 text-black" />
                <span>📝 FORMULÁRIO DE CONTATO - PREENCHA ABAIXO</span>
              </div>
            </div>

            {/* High-Contrast Senior-Friendly Form Container */}
            <div className="bg-white text-[#131522] rounded-3xl p-6 sm:p-10 border-4 border-[#6D2DBF] shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-sora font-extrabold text-2xl sm:text-3xl text-[#131522] mb-2">
                    Enviar mensagem rápida
                  </h3>

                  <div>
                    <label className="block text-sm font-extrabold text-[#131522] mb-1.5">
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData((prev) => ({ ...prev, name: e.target.value }));
                        setErrors((prev) => ({ ...prev, name: '' }));
                      }}
                      placeholder="Digite seu nome completo"
                      className="w-full h-14 px-4 rounded-2xl bg-[#F6F5FB] border-2 border-[#2B304C]/40 text-[#131522] placeholder-slate-400 font-bold text-base sm:text-lg focus:outline-none focus:border-[#6D2DBF] focus:bg-white focus:ring-4 focus:ring-[#6D2DBF]/20"
                    />
                    {errors.name && <p className="text-sm text-[#D32F2F] mt-1 font-extrabold">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-extrabold text-[#131522] mb-1.5">
                        WhatsApp (com DDD) *
                      </label>
                      <input
                        type="tel"
                        value={formData.whatsapp}
                        onChange={handlePhoneChange}
                        placeholder="(41) 99999-9999"
                        className="w-full h-14 px-4 rounded-2xl bg-[#F6F5FB] border-2 border-[#2B304C]/40 text-[#131522] placeholder-slate-400 font-bold text-base sm:text-lg focus:outline-none focus:border-[#6D2DBF] focus:bg-white focus:ring-4 focus:ring-[#6D2DBF]/20"
                      />
                      {errors.whatsapp && (
                        <p className="text-sm text-[#D32F2F] mt-1 font-extrabold">{errors.whatsapp}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-extrabold text-[#131522] mb-1.5">
                        E-mail (opcional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, email: e.target.value }));
                          setErrors((prev) => ({ ...prev, email: '' }));
                        }}
                        placeholder="seu@email.com"
                        className="w-full h-14 px-4 rounded-2xl bg-[#F6F5FB] border-2 border-[#2B304C]/40 text-[#131522] placeholder-slate-400 font-bold text-base sm:text-lg focus:outline-none focus:border-[#6D2DBF] focus:bg-white focus:ring-4 focus:ring-[#6D2DBF]/20"
                      />
                      {errors.email && <p className="text-sm text-[#D32F2F] mt-1 font-extrabold">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-extrabold text-[#131522] mb-1.5">
                      Sua mensagem ou dúvida
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                      placeholder="Olá Bárbara, gostaria de tirar uma dúvida..."
                      className="w-full p-4 rounded-2xl bg-[#F6F5FB] border-2 border-[#2B304C]/40 text-[#131522] placeholder-slate-400 font-bold text-base sm:text-lg focus:outline-none focus:border-[#6D2DBF] focus:bg-white focus:ring-4 focus:ring-[#6D2DBF]/20 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-16 rounded-2xl bg-[#2ED9A0] hover:bg-[#25b886] text-[#0B0B18] font-sora font-extrabold text-lg sm:text-xl shadow-xl transition-all hover:scale-[1.01] flex items-center justify-center gap-3 border-2 border-emerald-600 cursor-pointer"
                  >
                    <Send className="w-6 h-6 text-[#0B0B18]" />
                    <span>ENVIAR FORMULÁRIO NO WHATSAPP</span>
                  </button>
                </form>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#2ED9A0]/20 text-[#2ED9A0] border-2 border-[#2ED9A0] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-sora font-extrabold text-2xl sm:text-3xl text-[#131522]">
                    Mensagem enviada com sucesso!
                  </h3>
                  <p className="text-base text-slate-700 font-medium">
                    Sua conversa foi iniciada no WhatsApp. A executiva Bárbara Durães responderá em instantes.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 rounded-2xl bg-[#6D2DBF] hover:bg-[#3F1568] text-sm font-extrabold text-white transition-colors"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
