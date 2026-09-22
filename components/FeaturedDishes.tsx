"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export const FeaturedDishes: React.FC = () => {
  const featuredDishes = [
    {
      id: "feat-1",
      name: "Camarão Gigante da Baía à Laurentina",
      category: "Marisco Selvagem",
      price: "1.850 MT",
      image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=1600&q=90",
      size: "large", // 7 cols
    },
    {
      id: "feat-2",
      name: "Matapa Imperial com Lagosta de Pemba",
      category: "Especialidade da Casa",
      price: "3.400 MT",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=90",
      size: "small", // 5 cols top
    },
    {
      id: "feat-3",
      name: "Garoupa Grelhada na Brasa com Castanha",
      category: "Pesca do Dia",
      price: "1.450 MT",
      image: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?auto=format&fit=crop&w=1200&q=90",
      size: "small", // 5 cols bottom
    },
    {
      id: "feat-4",
      name: "Tártaro de Atum, Gengibre & Lima",
      category: "Entrada de Assinatura",
      price: "780 MT",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1400&q=90",
      size: "wide", // 12 cols bottom
    },
  ];

  return (
    <section className="py-20 bg-[#101F1B] border-t border-[#B08D57]/20 text-[#F5F0E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 px-2">
          <div>
            <p className="font-serif italic text-[#B08D57] text-lg sm:text-xl mb-1">
              seleção do chef
            </p>
            <h2 className="font-serif font-normal text-3xl sm:text-5xl text-[#F5F0E6]">
              Pratos em Destaque
            </h2>
          </div>
          
          <Link
            href="/menu"
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-sm font-serif italic text-[#B08D57] hover:text-[#F5F0E6] transition-colors group"
          >
            <span className="border-b border-[#B08D57] group-hover:border-[#F5F0E6] pb-0.5">
              Ver carta gastronómica completa
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Asymmetrical High-Res Photo Grid (80% Image Weight) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          {/* Tile 1: Large Main Hero Dish (7 cols, Tall) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 group flex flex-col"
          >
            <div className="relative h-[420px] sm:h-[500px] w-full rounded overflow-hidden shadow-2xl bg-[#1B2E28]">
              <img
                src={featuredDishes[0].image}
                alt={featuredDishes[0].name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded bg-[#B08D57] text-[#101F1B] font-semibold text-xs shadow-md">
                  {featuredDishes[0].price}
                </span>
              </div>
            </div>

            {/* Dish Name & Category Underneath (20% Text Weight) */}
            <div className="pt-3 px-1 flex items-baseline justify-between">
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#F5F0E6] group-hover:text-[#B08D57] transition-colors">
                {featuredDishes[0].name}
              </h3>
              <span className="text-xs font-mono uppercase text-[#B08D57]/80 tracking-wider">
                {featuredDishes[0].category}
              </span>
            </div>
          </motion.div>

          {/* Right Column Stack (5 cols: 2 Tiles) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            {/* Tile 2: Upper Right Dish */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="group flex flex-col"
            >
              <div className="relative h-[230px] sm:h-[260px] w-full rounded overflow-hidden shadow-2xl bg-[#1B2E28]">
                <img
                  src={featuredDishes[1].image}
                  alt={featuredDishes[1].name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded bg-[#B08D57] text-[#101F1B] font-semibold text-xs">
                    {featuredDishes[1].price}
                  </span>
                </div>
              </div>

              <div className="pt-2 px-1 flex items-baseline justify-between">
                <h3 className="font-serif text-lg font-normal text-[#F5F0E6] group-hover:text-[#B08D57] transition-colors">
                  {featuredDishes[1].name}
                </h3>
                <span className="text-[11px] font-mono uppercase text-[#B08D57]/80">
                  {featuredDishes[1].category}
                </span>
              </div>
            </motion.div>

            {/* Tile 3: Lower Right Dish */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="group flex flex-col"
            >
              <div className="relative h-[230px] sm:h-[260px] w-full rounded overflow-hidden shadow-2xl bg-[#1B2E28]">
                <img
                  src={featuredDishes[2].image}
                  alt={featuredDishes[2].name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded bg-[#B08D57] text-[#101F1B] font-semibold text-xs">
                    {featuredDishes[2].price}
                  </span>
                </div>
              </div>

              <div className="pt-2 px-1 flex items-baseline justify-between">
                <h3 className="font-serif text-lg font-normal text-[#F5F0E6] group-hover:text-[#B08D57] transition-colors">
                  {featuredDishes[2].name}
                </h3>
                <span className="text-[11px] font-mono uppercase text-[#B08D57]/80">
                  {featuredDishes[2].category}
                </span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
