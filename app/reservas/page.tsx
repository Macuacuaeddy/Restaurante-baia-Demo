"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MessageCircle, Calendar, Clock, MapPin, Phone, Mail, CheckCircle2, ShieldCheck } from "lucide-react";

export default function ReservasPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: new Date().toISOString().split("T")[0],
    time: "19:00",
    guests: 2,
    seating: "Esplanada com Vista para o Mar",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#101F1B] text-[#F5F0E6] relative">
      <Navbar />

      <section className="pt-36 pb-16 bg-[#1B2E28] border-b border-[#B08D57]/20">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <p className="font-serif italic text-[#B08D57] text-lg mb-2">reservas & contactos</p>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#F5F0E6] mb-4">
            Guarde a Sua <span className="italic text-[#B08D57]">Mesa no Baía</span>
          </h1>
          <p className="text-[#F5F0E6]/80 text-base font-light max-w-xl">
            Escolha o seu canal de reserva preferido — resposta imediata via WhatsApp ou através do formulário abaixo.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Left: Quick Channels & Direct WhatsApp */}
            <div className="md:col-span-5 space-y-8">
              <div className="p-8 bg-[#5E1F1F] rounded border border-white/20 text-[#F5F0E6] shadow-xl">
                <h3 className="font-serif italic text-2xl mb-3">Reserva Rápida no WhatsApp</h3>
                <p className="text-xs font-light text-[#F5F0E6]/80 leading-relaxed mb-6">
                  Para confirmação instantânea ou pedidos especiais, fale diretamente com a nossa equipa de receção.
                </p>
                <a
                  href="https://wa.me/258840000000?text=Ol%C3%A1%2C%20gostaria%20de%20reservar%20uma%20mesa%20no%20Ba%C3%ADa."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded bg-[#F5F0E6] text-[#5E1F1F] font-semibold text-sm flex items-center justify-center gap-2 hover:bg-white transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-[#5E1F1F]" />
                  <span>Contactar no WhatsApp (+258)</span>
                </a>
              </div>

              {/* Direct Info Box */}
              <div className="p-6 bg-[#1B2E28] rounded border border-[#B08D57]/30 space-y-4 text-xs font-light">
                <h4 className="font-serif italic text-xl text-[#B08D57]">Informações Importantes</h4>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#B08D57] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#F5F0E6]">Horário de Funcionamento:</p>
                    <p className="text-[#F5F0E6]/70">Terça a Domingo: 18:00 – 23:00</p>
                    <p className="text-[#F5F0E6]/50 italic">Segunda-feira: Encerrado</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#B08D57] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#F5F0E6]">Endereço:</p>
                    <p className="text-[#F5F0E6]/70">Av. Marginal, Maputo, Moçambique</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#B08D57] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#F5F0E6]">Telefone Direto:</p>
                    <p className="text-[#F5F0E6]/70">+258 84 000 0000</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Online Reservation Form */}
            <div className="md:col-span-7 bg-[#1B2E28]/60 p-8 rounded border border-white/10">
              {!submitted ? (
                <div>
                  <h3 className="font-serif italic text-2xl text-[#B08D57] mb-6">Formulário de Reserva</h3>
                  <form onSubmit={handleSubmit} className="space-y-5 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#F5F0E6]/80 mb-2">Número de Pessoas *</label>
                        <select
                          value={formData.guests}
                          onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                          className="w-full bg-[#101F1B] border border-white/15 rounded px-4 py-3 text-[#F5F0E6] focus:outline-none focus:border-[#B08D57]"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((n) => (
                            <option key={n} value={n}>{n} {n === 1 ? "Pessoa" : "Pessoas"}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-[#F5F0E6]/80 mb-2">Preferência de Espaço *</label>
                        <select
                          value={formData.seating}
                          onChange={(e) => setFormData({ ...formData, seating: e.target.value })}
                          className="w-full bg-[#101F1B] border border-white/15 rounded px-4 py-3 text-[#F5F0E6] focus:outline-none focus:border-[#B08D57]"
                        >
                          <option value="Esplanada com Vista para o Mar">Esplanada com Vista para o Mar</option>
                          <option value="Salão Principal">Salão Principal</option>
                          <option value="Mesa do Chef">Mesa do Chef</option>
                          <option value="Sala Privada VIP">Sala Privada VIP</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#F5F0E6]/80 mb-2">Data Pretendida *</label>
                        <input
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full bg-[#101F1B] border border-white/15 rounded px-4 py-3 text-[#F5F0E6] focus:outline-none focus:border-[#B08D57]"
                        />
                      </div>

                      <div>
                        <label className="block text-[#F5F0E6]/80 mb-2">Horário *</label>
                        <select
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="w-full bg-[#101F1B] border border-white/15 rounded px-4 py-3 text-[#F5F0E6] focus:outline-none focus:border-[#B08D57]"
                        >
                          {["18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"].map((t) => (
                            <option key={t} value={t}>{t}h</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Nome Completo *"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-[#101F1B] border border-white/15 rounded px-4 py-3 text-[#F5F0E6] focus:outline-none focus:border-[#B08D57]"
                        />
                      </div>

                      <div>
                        <input
                          type="email"
                          required
                          placeholder="E-mail *"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-[#101F1B] border border-white/15 rounded px-4 py-3 text-[#F5F0E6] focus:outline-none focus:border-[#B08D57]"
                        />
                      </div>
                    </div>

                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="Telefone (+258) *"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#101F1B] border border-white/15 rounded px-4 py-3 text-[#F5F0E6] focus:outline-none focus:border-[#B08D57]"
                      />
                    </div>

                    <div>
                      <textarea
                        rows={3}
                        placeholder="Observações ou Pedidos Especiais (Ex: Aniversário, Alergias)"
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full bg-[#101F1B] border border-white/15 rounded px-4 py-3 text-[#F5F0E6] focus:outline-none focus:border-[#B08D57]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded bg-[#B08D57] text-[#101F1B] font-semibold text-sm hover:bg-[#c49e64] transition-colors"
                    >
                      Enviar Pedido de Reserva
                    </button>
                  </form>
                </div>
              ) : (
                <div className="py-12 text-center flex flex-col items-center">
                  <CheckCircle2 className="w-12 h-12 text-[#B08D57] mb-4" />
                  <h3 className="font-serif italic text-3xl text-[#F5F0E6] mb-2">Reserva Efetuada</h3>
                  <p className="text-xs text-[#F5F0E6]/80 max-w-md font-light mb-6">
                    Obrigado, <strong className="text-[#B08D57]">{formData.name}</strong>. Recebemos o seu pedido para <strong className="text-[#F5F0E6]">{formData.guests} pessoas</strong> no dia <strong className="text-[#B08D57]">{formData.date}</strong> às <strong className="text-[#B08D57]">{formData.time}h</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded bg-[#B08D57] text-[#101F1B] font-semibold text-xs"
                  >
                    Fazer Outra Reserva
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
