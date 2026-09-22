"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, Calendar, Phone, MapPin, Clock } from "lucide-react";

export const ReservationSection: React.FC = () => {
  return (
    <section id="reservar" className="py-20 bg-[#5E1F1F] text-[#F5F0E6]">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Left Column: Copy & WhatsApp Button */}
          <div className="md:col-span-7">
            <p className="font-serif italic text-[#F5F0E6]/70 text-lg mb-2">reservas</p>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F5F0E6] mb-4">
              Guarde a sua mesa
            </h2>

            <p className="text-[#F5F0E6]/85 text-base font-light leading-relaxed mb-8 max-w-xl">
              Aberto de terça a domingo, das 18h às 23h. Recomendamos reserva com antecedência, especialmente à sexta e sábado.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="https://wa.me/258840000000?text=Ol%C3%A1%2C%20gostaria%20de%20reservar%20uma%20mesa."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded bg-[#F5F0E6] text-[#5E1F1F] font-semibold text-base shadow-xl hover:bg-white transition-all"
              >
                <MessageCircle className="w-5 h-5 text-[#5E1F1F]" />
                <span>Reservar via WhatsApp</span>
              </a>

              <Link
                href="/reservas"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded border border-[#F5F0E6]/40 text-[#F5F0E6] text-sm font-medium hover:border-[#F5F0E6] hover:bg-white/10 transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Formulário Online</span>
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-2 text-xs text-[#F5F0E6]/60">
              <MapPin className="w-4 h-4 text-[#B08D57]" />
              <span>Av. Marginal, Maputo · +258 84 000 0000</span>
            </div>
          </div>

          {/* Right Column: Quick Practical Details Box */}
          <div className="md:col-span-5 bg-[#101F1B]/40 backdrop-blur-md p-6 rounded border border-white/15 text-xs text-[#F5F0E6]/90 space-y-4">
            <h4 className="font-serif italic text-xl text-[#B08D57]">Informações Práticas</h4>
            
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-[#B08D57] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Horário de Jantar:</p>
                <p className="text-[#F5F0E6]/70">Terça a Domingo: 18:00 – 23:00</p>
                <p className="text-[#F5F0E6]/50 italic">Segunda-feira: Encerrado</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-[#B08D57] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Contacto Direto:</p>
                <p className="text-[#F5F0E6]/70">+258 84 000 0000 / +258 82 000 0000</p>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 text-[11px] text-[#F5F0E6]/60">
              Dress code recomendado: Esporte fino / Elegante.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
