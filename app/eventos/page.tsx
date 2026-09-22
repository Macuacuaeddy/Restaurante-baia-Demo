"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MessageCircle, CheckCircle2, Award, Users, Utensils } from "lucide-react";

export default function EventosPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-[#101F1B] text-[#F5F0E6] relative">
      <Navbar />

      <section className="pt-36 pb-16 bg-[#1B2E28] border-b border-[#B08D57]/20">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <p className="font-serif italic text-[#B08D57] text-lg mb-2">eventos privados & exclusividade</p>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#F5F0E6] mb-4">
            Celebrações Inesquecíveis <span className="italic text-[#B08D57]">à Beira-Mar</span>
          </h1>
          <p className="text-[#F5F0E6]/80 text-base font-light max-w-xl">
            Dos jantares corporativos mais exigentes aos aniversários privados e recepções VIP na esplanada.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            <div className="p-6 bg-[#1B2E28] rounded border border-white/10">
              <Users className="w-6 h-6 text-[#B08D57] mb-3" />
              <h3 className="font-serif italic text-xl text-[#F5F0E6] mb-2">Jantares Corporativos</h3>
              <p className="text-xs font-light text-[#F5F0E6]/70 leading-relaxed">
                Menus personalizados de degustação com harmonização de vinhos para reuniões executivas e jantares de empresa.
              </p>
            </div>

            <div className="p-6 bg-[#1B2E28] rounded border border-white/10">
              <Utensils className="w-6 h-6 text-[#B08D57] mb-3" />
              <h3 className="font-serif italic text-xl text-[#F5F0E6] mb-2">Aluguer Exclusivo do Espaço</h3>
              <p className="text-xs font-light text-[#F5F0E6]/70 leading-relaxed">
                Reserva total ou parcial do restaurante e esplanada com serviço privado de chef e barman.
              </p>
            </div>

            <div className="p-6 bg-[#1B2E28] rounded border border-white/10">
              <Award className="w-6 h-6 text-[#B08D57] mb-3" />
              <h3 className="font-serif italic text-xl text-[#F5F0E6] mb-2">Celebrações VIP</h3>
              <p className="text-xs font-light text-[#F5F0E6]/70 leading-relaxed">
                Aniversários e datas especiais com decoração personalizada, bolo artesanal e cocktails de assinatura.
              </p>
            </div>
          </div>

          {/* Event Inquiry Form */}
          <div className="bg-[#1B2E28]/60 p-8 rounded border border-white/10 max-w-2xl mx-auto">
            {!submitted ? (
              <div>
                <h3 className="font-serif italic text-2xl text-[#B08D57] mb-4 text-center">Solicitar Proposta para Evento</h3>
                <p className="text-xs text-[#F5F0E6]/70 text-center font-light mb-8">
                  Preencha os dados do seu evento para receber a nossa brochura com opções de menu e valores.
                </p>

                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="Nome Completo / Empresa *"
                      className="w-full bg-[#101F1B] border border-white/15 rounded px-4 py-3 text-[#F5F0E6] focus:outline-none focus:border-[#B08D57]"
                    />
                    <input
                      type="email"
                      required
                      placeholder="E-mail de Contacto *"
                      className="w-full bg-[#101F1B] border border-white/15 rounded px-4 py-3 text-[#F5F0E6] focus:outline-none focus:border-[#B08D57]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      required
                      placeholder="Telefone (+258) *"
                      className="w-full bg-[#101F1B] border border-white/15 rounded px-4 py-3 text-[#F5F0E6] focus:outline-none focus:border-[#B08D57]"
                    />
                    <select className="w-full bg-[#101F1B] border border-white/15 rounded px-4 py-3 text-[#F5F0E6] focus:outline-none focus:border-[#B08D57]">
                      <option value="Jantar Corporativo">Jantar Corporativo</option>
                      <option value="Aniversário VIP">Aniversário VIP</option>
                      <option value="Aluguer Exclusivo do Restaurante">Aluguer Exclusivo do Restaurante</option>
                    </select>
                  </div>

                  <textarea
                    rows={3}
                    placeholder="Número estimado de convidados, data pretendida e detalhes do evento..."
                    className="w-full bg-[#101F1B] border border-white/15 rounded px-4 py-3 text-[#F5F0E6] focus:outline-none focus:border-[#B08D57]"
                  />

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded bg-[#B08D57] text-[#101F1B] font-semibold text-sm hover:bg-[#c49e64] transition-colors"
                  >
                    Solicitar Proposta de Evento
                  </button>
                </form>
              </div>
            ) : (
              <div className="py-10 text-center flex flex-col items-center">
                <CheckCircle2 className="w-12 h-12 text-[#B08D57] mb-4" />
                <h3 className="font-serif italic text-2xl text-[#F5F0E6] mb-2">Solicitação Enviada</h3>
                <p className="text-xs text-[#F5F0E6]/80 font-light mb-6">
                  A nossa equipa de eventos entrará em contacto dentro de 24 horas.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 rounded bg-[#B08D57] text-[#101F1B] font-semibold text-xs"
                >
                  Enviar Outro Pedido
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
