"use client";

import React from "react";
import Link from "next/link";
import { Anchor, MapPin, Phone, Mail, Instagram, Facebook, Clock } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#101F1B] text-[#F5F0E6]/50 pt-16 pb-10 border-t border-[#B08D57]/20 text-xs">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Anchor className="w-4 h-4 text-[#B08D57]" />
              <span className="font-serif italic text-2xl text-[#F5F0E6]">Baía</span>
            </div>
            <p className="text-xs font-light text-[#F5F0E6]/60 leading-relaxed mb-4">
              Cozinha Contemporânea · Maputo, à beira-mar. Sabores do Índico com técnica contemporânea.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded border border-white/10 flex items-center justify-center text-[#F5F0E6]/70 hover:text-[#B08D57] hover:border-[#B08D57] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded border border-white/10 flex items-center justify-center text-[#F5F0E6]/70 hover:text-[#B08D57] hover:border-[#B08D57] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif italic text-base text-[#F5F0E6] mb-4">Navegação</h4>
            <ul className="space-y-2.5 font-light">
              <li><Link href="/" className="hover:text-[#B08D57] transition-colors">Início</Link></li>
              <li><Link href="/menu" className="hover:text-[#B08D57] transition-colors">Menu & Vinhos</Link></li>
              <li><Link href="/sobre" className="hover:text-[#B08D57] transition-colors">A Nossa História</Link></li>
              <li><Link href="/galeria" className="hover:text-[#B08D57] transition-colors">Galeria & Espaço</Link></li>
              <li><Link href="/eventos" className="hover:text-[#B08D57] transition-colors">Eventos Privados</Link></li>
              <li><Link href="/reservas" className="hover:text-[#B08D57] transition-colors">Reservas</Link></li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-serif italic text-base text-[#F5F0E6] mb-4">Horário</h4>
            <ul className="space-y-2 font-light text-[#F5F0E6]/70">
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>Terça a Domingo:</span>
                <span className="text-[#B08D57]">18:00 – 23:00</span>
              </li>
              <li className="flex justify-between text-[#F5F0E6]/40 pt-1">
                <span>Segunda-feira:</span>
                <span>Encerrado</span>
              </li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div>
            <h4 className="font-serif italic text-base text-[#F5F0E6] mb-4">Localização</h4>
            <ul className="space-y-2.5 font-light text-[#F5F0E6]/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B08D57] flex-shrink-0 mt-0.5" />
                <span>Av. Marginal, Maputo, Moçambique</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#B08D57] flex-shrink-0" />
                <span>+258 84 000 0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#B08D57] flex-shrink-0" />
                <span>info@baia-maputo.co.mz</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="pt-8 border-t border-white/10 text-center font-light text-[11px] text-[#F5F0E6]/40">
          Baía — Cozinha Contemporânea · Maputo
        </div>
      </div>
    </footer>
  );
};
