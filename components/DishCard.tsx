"use client";

import React from "react";
import { motion } from "framer-motion";
import { Dish } from "@/types/menu";
import { Star, Wine, Eye } from "lucide-react";

interface DishCardProps {
  dish: Dish;
  onSelect: (dish: Dish) => void;
}

export const DishCard: React.FC<DishCardProps> = ({ dish, onSelect }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="glass-card rounded-2xl overflow-hidden flex flex-col group relative"
    >
      {/* Image Container with Hover Scale */}
      <div className="relative h-64 overflow-hidden bg-neutral-900 cursor-pointer" onClick={() => onSelect(dish)}>
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          {dish.featured ? (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gold-500 text-black text-xs font-bold shadow-lg">
              <Star className="w-3 h-3 fill-black" />
              <span>Especial do Chef</span>
            </span>
          ) : (
            <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-medium text-gray-300 capitalize">
              {dish.category}
            </span>
          )}

          <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-gold-500/40 text-gold-400 font-serif font-bold text-sm shadow-md">
            {dish.price.toLocaleString("pt-MZ")} MT
          </span>
        </div>

        {/* Quick View Hover Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-500/90 text-black font-semibold text-xs shadow-2xl backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="w-4 h-4" />
            <span>Ver Detalhes do Prato</span>
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Dish Title */}
          <h3
            onClick={() => onSelect(dish)}
            className="font-serif text-xl font-semibold text-white group-hover:text-gold-400 transition-colors cursor-pointer mb-2 line-clamp-1"
          >
            {dish.name}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm font-light leading-relaxed mb-4 line-clamp-2">
            {dish.description}
          </p>
        </div>

        <div>
          {/* Pairing Info if available */}
          {dish.pairing && (
            <div className="flex items-center gap-2 text-xs text-gold-400/90 bg-gold-500/10 px-3 py-1.5 rounded-lg border border-gold-500/20 mb-4">
              <Wine className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="truncate">Harmonização: {dish.pairing}</span>
            </div>
          )}

          {/* Dietary Tags */}
          {dish.dietary && dish.dietary.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
              {dish.dietary.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-[10px] uppercase font-mono tracking-wider bg-white/5 text-gray-300 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
