"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dish } from "@/types/menu";
import { X, Wine, Flame, Sparkles, Utensils } from "lucide-react";

interface DishModalProps {
  dish: Dish | null;
  onClose: () => void;
  onOpenReservation: () => void;
}

export const DishModal: React.FC<DishModalProps> = ({ dish, onClose, onOpenReservation }) => {
  if (!dish) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl glass-panel rounded-3xl overflow-hidden z-10 shadow-2xl border border-gold-500/30 my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 text-gray-300 hover:text-white hover:bg-gold-500 hover:text-black flex items-center justify-center transition-all shadow-lg"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Image Section */}
            <div className="relative h-64 md:h-full min-h-[300px] bg-neutral-950">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 rounded-full bg-gold-500 text-black text-xs font-bold uppercase tracking-wider">
                  {dish.category}
                </span>
              </div>
            </div>

            {/* Right Details Section */}
            <div className="p-6 md:p-8 flex flex-col justify-between">
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-white leading-tight">
                    {dish.name}
                  </h2>
                  <span className="font-serif text-2xl font-bold text-gold-400 whitespace-nowrap">
                    {dish.price.toLocaleString("pt-MZ")} MT
                  </span>
                </div>

                {/* Dietary Tags */}
                {dish.dietary && dish.dietary.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {dish.dietary.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-xs bg-gold-500/10 text-gold-400 border border-gold-500/20 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Detailed Description */}
                <p className="text-gray-300 text-sm font-light leading-relaxed mb-6">
                  {dish.longDescription || dish.description}
                </p>

                {/* Pairings & Specs */}
                <div className="space-y-3 mb-8 bg-black/40 p-4 rounded-xl border border-white/5">
                  {dish.pairing && (
                    <div className="flex items-center gap-3 text-xs text-gray-300">
                      <Wine className="w-4 h-4 text-gold-400 flex-shrink-0" />
                      <span>
                        <strong className="text-gold-400 font-medium">Sugestão do Sommelier:</strong> {dish.pairing}
                      </span>
                    </div>
                  )}

                  {dish.calories && (
                    <div className="flex items-center gap-3 text-xs text-gray-300">
                      <Flame className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>
                        <strong className="text-gray-200 font-medium">Valor Calórico Estimado:</strong> ~{dish.calories} kcal
                      </span>
                    </div>
                  )}

                  <div className="flex items-center gap-3 text-xs text-gray-300">
                    <Utensils className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    <span>
                      <strong className="text-gray-200 font-medium">Origem dos Ingredientes:</strong> Pescado fresco e produtos locais moçambicanos
                    </span>
                  </div>
                </div>
              </div>

              {/* Modal CTA Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    onClose();
                    onOpenReservation();
                  }}
                  className="flex-1 py-3 px-4 rounded-full bg-gradient-to-r from-gold-500 to-amber-500 text-black font-bold text-sm hover:shadow-lg hover:shadow-gold-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Reservar Mesa Para Degustar</span>
                </button>
                
                <button
                  onClick={onClose}
                  className="py-3 px-5 rounded-full glass-card text-gray-300 text-sm font-medium hover:text-white"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
