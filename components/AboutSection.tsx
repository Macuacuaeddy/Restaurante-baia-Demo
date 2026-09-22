"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Award, HeartHandshake } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F5F0E6] text-[#161E1B]">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Main Story Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7"
          >
            <p className="font-serif italic text-[#B08D57] text-lg mb-3">a nossa cozinha</p>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-tight text-[#161E1B] mb-6">
              Ingredientes locais, <br />
              <span className="italic text-[#5E1F1F]">atenção internacional</span>
            </h2>

            <p className="text-[#161E1B]/80 text-base sm:text-lg font-light leading-relaxed mb-6">
              Trabalhamos diretamente com pescadores e produtores da região para trazer à mesa o que há de mais fresco em cada estação — reinterpretado com técnicas que aprendemos a viajar.
            </p>

            <p className="text-[#161E1B]/70 text-sm font-light leading-relaxed mb-8">
              Do camarão tigrado da Baía de Maputo ao amendoim e castanha torrada de Nampula, cada prato é uma ponte entre as nossas raízes e a alta gastronomia contemporânea.
            </p>

            <Link
              href="/sobre"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#161E1B] hover:text-[#B08D57] transition-colors group"
            >
              <span className="border-b border-[#161E1B] group-hover:border-[#B08D57] pb-0.5">
                Conheça a história do Chef & Filosofia
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Side Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-5 flex flex-col gap-4"
          >
            <div className="p-6 bg-[#101F1B] text-[#F5F0E6] rounded border border-[#B08D57]/30 shadow-xl">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="w-5 h-5 text-[#B08D57]" />
                <h4 className="font-serif italic text-xl text-[#F5F0E6]">Pescado Diário</h4>
              </div>
              <p className="text-xs font-light text-[#F5F0E6]/70 leading-relaxed">
                Seleção artesanal dos melhores peixes e mariscos capturados diariamente nas águas de Maputo e Inhambane.
              </p>
            </div>

            <div className="p-6 bg-[#1B2E28] text-[#F5F0E6] rounded border border-[#B08D57]/30 shadow-xl">
              <div className="flex items-center gap-3 mb-2">
                <HeartHandshake className="w-5 h-5 text-[#B08D57]" />
                <h4 className="font-serif italic text-xl text-[#F5F0E6]">Produtores Locais</h4>
              </div>
              <p className="text-xs font-light text-[#F5F0E6]/70 leading-relaxed">
                Parceria direta com agricultores da Moamba e Chókwè para vegetais, ervas e hortaliças 100% biológicos.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
