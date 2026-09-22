"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Utensils } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-[#101F1B] overflow-hidden flex items-center pt-20 lg:pt-0">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#1B2E28] rounded-full blur-[150px] pointer-events-none opacity-50" />

      <div className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-between">
        
        {/* Left Half: Text Panel (Solid #101F1B Background, Centered Content) */}
        <div className="w-full lg:w-[52%] z-20 px-6 sm:px-12 lg:px-20 py-12 lg:py-24 flex flex-col justify-center">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <span className="font-serif italic text-[#B08D57] text-lg sm:text-xl">
              Maputo, à beira-mar
            </span>
            <span className="w-10 h-[1px] bg-[#B08D57]/40" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-serif font-normal text-4xl sm:text-6xl lg:text-7xl leading-[1.08] text-[#F5F0E6] mb-6"
          >
            Sabores do Índico, com <br className="hidden sm:block" />
            <span className="italic gold-gradient-text">técnica contemporânea</span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="text-[#F5F0E6]/80 text-base sm:text-lg font-light leading-relaxed max-w-xl mb-10"
          >
            Uma mesa onde o peixe da baía encontra temperos de casa — pensada para noites que merecem ser lembradas.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-md"
          >
            <a
              href="https://wa.me/258840000000?text=Ol%C3%A1%2C%20gostaria%20de%20reservar%20uma%20mesa%20no%20Ba%C3%ADa."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded bg-[#B08D57] text-[#101F1B] font-semibold text-sm shadow-xl hover:bg-[#c49e64] transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-[#101F1B]" />
              <span>Reservar via WhatsApp</span>
            </a>

            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded border border-[#F5F0E6]/30 text-[#F5F0E6] text-sm font-light hover:border-[#B08D57] hover:text-[#B08D57] transition-all"
            >
              <Utensils className="w-4 h-4 text-[#B08D57]" />
              <span>Ver Menu Completo</span>
            </Link>
          </motion.div>
        </div>

        {/* Right Half: Full-Bleed Signature Dish Image (No Frame, Flush to Screen Edges, 25-30% Gradient Fade) */}
        <div className="w-full lg:w-[48%] h-[500px] lg:h-screen relative overflow-hidden z-10">
          {/* Ken Burns Animated Dish Image (18s continuous loop scale 1 to 1.08) */}
          <div className="absolute inset-0 overflow-hidden bg-[#101F1B]">
            <motion.img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=90"
              alt="Prato de Assinatura Baía - Camarão da Baía"
              className="w-full h-full object-cover"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{
                duration: 18,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>

          {/* 25-30% Horizontal Gradient Fade-in Overlay from Solid Background (#101F1B) to Transparent */}
          <div className="absolute inset-y-0 left-0 w-[30%] bg-gradient-to-r from-[#101F1B] via-[#101F1B]/80 to-transparent z-10 pointer-events-none" />

          {/* Subtle Top & Bottom Vignette Shadow for Atmospheric Depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#101F1B]/60 via-transparent to-[#101F1B]/70 z-10 pointer-events-none" />

          {/* Minimalist Floating Badge for Signature Dish */}
          <div className="absolute bottom-8 right-8 z-20 bg-[#101F1B]/80 backdrop-blur-md px-4 py-2.5 rounded border border-[#B08D57]/30 shadow-2xl flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#B08D57] animate-pulse" />
            <div>
              <p className="font-serif italic text-sm text-[#F5F0E6] font-medium">Camarões da Baía com Piri-Piri</p>
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#B08D57]">Prato de Assinatura</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
