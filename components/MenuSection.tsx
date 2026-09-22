"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MENU_DISHES } from "@/data/menuData";
import { Dish } from "@/types/menu";
import { ArrowRight, Utensils, Sparkles, Eye, X, Wine } from "lucide-react";

export const MenuSection: React.FC = () => {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  const starters = MENU_DISHES.filter((d) => d.category === "entradas");
  const mains = MENU_DISHES.filter((d) => d.category === "principais");

  return (
    <section id="menu" className="py-24 bg-[#1B2E28] text-[#F5F0E6] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="mb-14 text-center sm:text-left">
          <p className="font-serif italic text-[#B08D57] text-lg mb-2">degustação</p>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F5F0E6]">
            Uma seleção do menu
          </h2>
        </div>

        {/* Group 1: Para Começar */}
        <div className="mb-12">
          <h3 className="font-serif italic text-[#B08D57] text-lg font-normal mb-4 border-b border-[#F5F0E6]/15 pb-2 uppercase tracking-wider">
            para começar
          </h3>
          <div className="divide-y divide-[#F5F0E6]/15">
            {starters.map((dish) => (
              <div
                key={dish.id}
                onClick={() => setSelectedDish(dish)}
                className="py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 cursor-pointer group hover:bg-[#101F1B]/40 px-3 rounded transition-colors"
              >
                <div className="flex-1">
                  <div className="font-serif text-xl font-medium text-[#F5F0E6] group-hover:text-[#B08D57] transition-colors flex items-center gap-2">
                    <span>{dish.name}</span>
                    {dish.featured && (
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#B08D57]/20 text-[#B08D57] border border-[#B08D57]/30">
                        Destaque
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-[#F5F0E6]/60 font-light mt-1 max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-300">
                    {dish.description}
                  </div>
                </div>
                <div className="font-serif text-lg text-[#B08D57] whitespace-nowrap">
                  {dish.price.toLocaleString("pt-MZ")} MT
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Group 2: Pratos Principais */}
        <div className="mb-14">
          <h3 className="font-serif italic text-[#B08D57] text-lg font-normal mb-4 border-b border-[#F5F0E6]/15 pb-2 uppercase tracking-wider">
            pratos principais
          </h3>
          <div className="divide-y divide-[#F5F0E6]/15">
            {mains.map((dish) => (
              <div
                key={dish.id}
                onClick={() => setSelectedDish(dish)}
                className="py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 cursor-pointer group hover:bg-[#101F1B]/40 px-3 rounded transition-colors"
              >
                <div className="flex-1">
                  <div className="font-serif text-xl font-medium text-[#F5F0E6] group-hover:text-[#B08D57] transition-colors flex items-center gap-2">
                    <span>{dish.name}</span>
                    {dish.featured && (
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#B08D57]/20 text-[#B08D57] border border-[#B08D57]/30">
                        Especial
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-[#F5F0E6]/60 font-light mt-1 max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-300">
                    {dish.description}
                  </div>
                </div>
                <div className="font-serif text-lg text-[#B08D57] whitespace-nowrap">
                  {dish.price.toLocaleString("pt-MZ")} MT
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Link to Full Menu */}
        <div className="text-center sm:text-left">
          <Link
            href="/menu"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded bg-[#B08D57] text-[#101F1B] font-medium text-sm shadow-xl hover:bg-[#c49e64] transition-all"
          >
            <Utensils className="w-4 h-4" />
            <span>Ver Carta Completa & Vinhos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Dish Story Modal */}
      <AnimatePresence>
        {selectedDish && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDish(null)}
              className="fixed inset-0 bg-[#101F1B]/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#101F1B] border border-[#B08D57]/40 rounded-xl p-6 sm:p-8 text-[#F5F0E6] z-10 shadow-2xl"
            >
              <button
                onClick={() => setSelectedDish(null)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-[#B08D57]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <div className="relative h-56 rounded overflow-hidden">
                  <img
                    src={selectedDish.image}
                    alt={selectedDish.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-normal text-[#F5F0E6] mb-2">
                    {selectedDish.name}
                  </h3>
                  <p className="font-serif text-xl text-[#B08D57] mb-4">
                    {selectedDish.price.toLocaleString("pt-MZ")} MT
                  </p>
                  <p className="text-xs text-[#F5F0E6]/80 font-light leading-relaxed mb-4">
                    {selectedDish.longDescription || selectedDish.description}
                  </p>

                  {selectedDish.pairing && (
                    <div className="flex items-center gap-2 text-xs text-[#B08D57] bg-[#1B2E28] p-2.5 rounded border border-[#B08D57]/20">
                      <Wine className="w-4 h-4 flex-shrink-0" />
                      <span>{selectedDish.pairing}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
