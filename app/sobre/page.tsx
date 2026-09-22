"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Anchor, ShieldCheck, HeartHandshake, Award, MapPin } from "lucide-react";

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-[#101F1B] text-[#F5F0E6] relative">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-36 pb-20 bg-[#1B2E28] border-b border-[#B08D57]/20">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <p className="font-serif italic text-[#B08D57] text-lg mb-2">a nossa história</p>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#F5F0E6] mb-6">
            Onde o Índico Encontra a <span className="italic text-[#B08D57]">Alta Gastronomia</span>
          </h1>
          <p className="text-[#F5F0E6]/80 text-base sm:text-lg font-light max-w-2xl leading-relaxed">
            O Baía nasceu de uma paixão profunda pelos produtos extraordinários da costa moçambicana e pelo desejo de criar uma experiência gastronómica inesquecível à beira-mar em Maputo.
          </p>
        </div>
      </section>

      {/* Story Narrative Section */}
      <section className="py-20 bg-[#F5F0E6] text-[#161E1B]">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-20">
            <div className="md:col-span-6">
              <span className="font-serif italic text-[#B08D57] text-lg mb-2 block">origem dos ingredientes</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#161E1B] mb-6">
                Respeito absoluto pelo produto artesanal
              </h2>
              <p className="text-[#161E1B]/80 text-sm sm:text-base font-light leading-relaxed mb-4">
                Em Moçambique, a riqueza do mar e da terra é incomparável. Todos os dias, às primeiras horas da manhã, recebemos mariscos frescos trazidos pelos pescadores locais da Baía de Maputo e de Inhambane.
              </p>
              <p className="text-[#161E1B]/70 text-sm font-light leading-relaxed">
                As nossas castanhas de caju vêm dos pomares de Nampula, as ervas e vegetais de produtores sustentáveis de Chókwè e a malagueta do nosso próprio cultivo biológico.
              </p>
            </div>

            <div className="md:col-span-6 rounded overflow-hidden shadow-2xl border border-[#B08D57]/30">
              <img
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80"
                alt="Equipa de Cozinha do Baía"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Sourcing Locations Grid */}
          <div className="pt-12 border-t border-[#161E1B]/15">
            <h3 className="font-serif italic text-2xl text-[#161E1B] mb-8 text-center sm:text-left">
              Origem dos Nossos Ingredientes Emblemáticos
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded border border-[#161E1B]/10 shadow-sm">
                <MapPin className="w-5 h-5 text-[#B08D57] mb-3" />
                <h4 className="font-serif text-xl font-medium text-[#161E1B] mb-2">Baía de Maputo & Inhambane</h4>
                <p className="text-xs text-[#161E1B]/70 font-light leading-relaxed">
                  Camarão gigante selvagem, atum fresco laminado e caranguejo de mangal apanhado à mão.
                </p>
              </div>

              <div className="p-6 bg-white rounded border border-[#161E1B]/10 shadow-sm">
                <MapPin className="w-5 h-5 text-[#B08D57] mb-3" />
                <h4 className="font-serif text-xl font-medium text-[#161E1B] mb-2">Nampula & Manica</h4>
                <p className="text-xs text-[#161E1B]/70 font-light leading-relaxed">
                  Castanha de caju torrada artesanalmente e cacau selvagem combinado com café de Manica.
                </p>
              </div>

              <div className="p-6 bg-white rounded border border-[#161E1B]/10 shadow-sm">
                <MapPin className="w-5 h-5 text-[#B08D57] mb-3" />
                <h4 className="font-serif text-xl font-medium text-[#161E1B] mb-2">Chókwè & Moamba</h4>
                <p className="text-xs text-[#161E1B]/70 font-light leading-relaxed">
                  Novilho criado em pastagens naturais e mangas doces colhidas no ponto perfeito de maturação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
