"use client";

import React, { useState, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MENU_DISHES } from "@/data/menuData";
import { Category, Dish } from "@/types/menu";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, Check, Wine, Utensils, X, MessageCircle } from "lucide-react";

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDietary, setSelectedDietary] = useState<string[]>([]);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  const categories: { id: Category; label: string }[] = [
    { id: "todos", label: "Todos os Pratos" },
    { id: "entradas", label: "Para Começar" },
    { id: "principais", label: "Pratos Principais" },
    { id: "sobremesas", label: "Sobremesas" },
    { id: "coqueteis", label: "Cocktails & Vinhos" },
  ];

  const dietaryOptions = ["Especial do Chef", "Marisco Fresco", "Sem Glúten", "Produção Própria"];

  const toggleDietary = (option: string) => {
    setSelectedDietary((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  const filteredDishes = useMemo(() => {
    return MENU_DISHES.filter((dish) => {
      if (selectedCategory !== "todos" && dish.category !== selectedCategory) {
        return false;
      }
      if (
        searchQuery &&
        !dish.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !dish.description.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }
      if (selectedDietary.length > 0) {
        const dishTags = dish.dietary || [];
        const matchesAll = selectedDietary.every((tag) => dishTags.includes(tag as any));
        if (!matchesAll) return false;
      }
      return true;
    });
  }, [selectedCategory, searchQuery, selectedDietary]);

  return (
    <main className="min-h-screen bg-[#101F1B] text-[#F5F0E6] relative">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-36 pb-16 bg-[#1B2E28] border-b border-[#B08D57]/20">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 text-center sm:text-left">
          <p className="font-serif italic text-[#B08D57] text-lg mb-2">menu & garrafeira</p>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#F5F0E6] mb-4">
            Carta Gastronómica <span className="italic text-[#B08D57]">Completa</span>
          </h1>
          <p className="text-[#F5F0E6]/80 text-base font-light max-w-2xl leading-relaxed">
            Uma viagem sensorial pelos frutos do mar do Canal de Moçambique, carnes selecionadas da região e vinhos de prestígio internacional.
          </p>
        </div>
      </section>

      {/* Main Menu Content Area */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 bg-[#1B2E28]/60 p-4 rounded border border-white/10">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Pesquisar camarão, garoupa, cabrito..."
                className="w-full bg-[#101F1B] border border-white/10 rounded-full pl-11 pr-4 py-2.5 text-sm text-[#F5F0E6] placeholder-gray-500 focus:outline-none focus:border-[#B08D57] transition-colors"
              />
            </div>

            {/* Dietary Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              <span className="text-xs text-gray-400 flex items-center gap-1 mr-2 flex-shrink-0">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#B08D57]" /> Filtrar:
              </span>
              {dietaryOptions.map((option) => {
                const active = selectedDietary.includes(option);
                return (
                  <button
                    key={option}
                    onClick={() => toggleDietary(option)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap ${
                      active
                        ? "bg-[#B08D57] text-[#101F1B] font-semibold"
                        : "bg-[#101F1B] text-[#F5F0E6]/80 border border-white/10 hover:border-[#B08D57]/40"
                    }`}
                  >
                    {active && <Check className="w-3 h-3 stroke-[3]" />}
                    <span>{option}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center sm:justify-start mb-12 overflow-x-auto pb-2 scrollbar-none">
            <div className="inline-flex p-1 bg-[#1B2E28] rounded border border-[#B08D57]/30">
              {categories.map((cat) => {
                const active = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`relative px-5 py-2.5 rounded text-sm font-serif italic transition-colors whitespace-nowrap ${
                      active ? "bg-[#B08D57] text-[#101F1B] font-medium" : "text-[#F5F0E6]/70 hover:text-[#F5F0E6]"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dishes List */}
          <div className="space-y-6">
            {filteredDishes.map((dish) => (
              <div
                key={dish.id}
                onClick={() => setSelectedDish(dish)}
                className="p-6 bg-[#1B2E28]/40 border border-white/10 rounded hover:border-[#B08D57]/50 transition-all cursor-pointer group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-serif text-2xl font-normal text-[#F5F0E6] group-hover:text-[#B08D57] transition-colors">
                        {dish.name}
                      </h3>
                      {dish.featured && (
                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#B08D57]/20 text-[#B08D57] border border-[#B08D57]/30">
                          Especial
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-[#F5F0E6]/70 font-light leading-relaxed mb-4">
                      {dish.description}
                    </p>

                    {dish.pairing && (
                      <div className="inline-flex items-center gap-2 text-xs text-[#B08D57] bg-[#101F1B] px-3 py-1 rounded border border-[#B08D57]/20">
                        <Wine className="w-3.5 h-3.5" />
                        <span>Harmonização: {dish.pairing}</span>
                      </div>
                    )}
                  </div>

                  <div className="font-serif text-2xl text-[#B08D57] font-semibold whitespace-nowrap">
                    {dish.price.toLocaleString("pt-MZ")} MT
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dish Lightbox Modal */}
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
                <div className="relative h-60 rounded overflow-hidden">
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
                  <p className="font-serif text-2xl text-[#B08D57] font-bold mb-4">
                    {selectedDish.price.toLocaleString("pt-MZ")} MT
                  </p>
                  <p className="text-xs text-[#F5F0E6]/80 font-light leading-relaxed mb-6">
                    {selectedDish.longDescription || selectedDish.description}
                  </p>

                  <a
                    href={`https://wa.me/258840000000?text=Ol%C3%A1%2C%20gostaria%20de%20reservar%20uma%20mesa%20para%20experimentar%20o%20prato%3A%20${encodeURIComponent(selectedDish.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded bg-[#B08D57] text-[#101F1B] font-semibold text-xs flex items-center justify-center gap-2 hover:bg-[#c49e64] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Reservar Mesa Para Degustar</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
