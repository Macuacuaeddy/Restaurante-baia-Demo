"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { GALLERY_ITEMS } from "@/data/menuData";
import { GalleryItem } from "@/types/menu";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";

export default function GaleriaPage() {
  const [activeTab, setActiveTab] = useState<string>("todos");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    { id: "todos", label: "Todas as Fotos" },
    { id: "ambiente", label: "Ambiente & Vista Mar" },
    { id: "pratos", label: "Gastronomia & Vinhos" },
    { id: "cozinha", label: "Cozinha Aberta" },
  ];

  const filteredItems = activeTab === "todos"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  return (
    <main className="min-h-screen bg-[#101F1B] text-[#F5F0E6] relative">
      <Navbar />

      <section className="pt-36 pb-16 bg-[#1B2E28] border-b border-[#B08D57]/20">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <p className="font-serif italic text-[#B08D57] text-lg mb-2">galeria fotográfica</p>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#F5F0E6] mb-4">
            Uma Noite à Beira da <span className="italic text-[#B08D57]">Baía de Maputo</span>
          </h1>
          <p className="text-[#F5F0E6]/80 text-base font-light max-w-xl">
            Explore o nosso espaço acolhedor, a vista sobre o Oceano Índico e os detalhes da nossa cozinha artesanal.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          {/* Category Tabs */}
          <div className="flex justify-center sm:justify-start mb-12 overflow-x-auto pb-2 scrollbar-none">
            <div className="inline-flex p-1 bg-[#1B2E28] rounded border border-[#B08D57]/30">
              {categories.map((cat) => {
                const active = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`px-5 py-2 rounded text-sm font-serif italic transition-colors whitespace-nowrap ${
                      active ? "bg-[#B08D57] text-[#101F1B] font-medium" : "text-[#F5F0E6]/70 hover:text-[#F5F0E6]"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImage(item)}
                className="h-72 rounded overflow-hidden relative group cursor-pointer border border-white/10 shadow-xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-[#F5F0E6]">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-[#B08D57]">{item.category}</span>
                    <p className="font-serif italic text-lg leading-tight">{item.title}</p>
                  </div>
                  <Maximize2 className="w-4 h-4 text-[#B08D57]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl max-h-[85vh] rounded overflow-hidden z-10"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-[#B08D57] hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain max-h-[80vh]"
              />
              <div className="bg-[#101F1B] p-4 text-[#F5F0E6] text-center">
                <p className="font-serif italic text-xl text-[#B08D57]">{selectedImage.title}</p>
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
