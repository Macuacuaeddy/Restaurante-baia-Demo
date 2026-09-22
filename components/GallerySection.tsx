"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_ITEMS } from "@/data/menuData";
import { GalleryItem } from "@/types/menu";
import { Maximize2, X, ArrowRight } from "lucide-react";

export const GallerySection: React.FC = () => {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  return (
    <section className="py-24 bg-[#F5F0E6] text-[#161E1B]">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="mb-10">
          <p className="font-serif italic text-[#B08D57] text-lg mb-2">o ambiente</p>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#161E1B]">
            Uma noite à beira da baía
          </h2>
        </div>

        {/* Gallery Grid - Matching user's HTML grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Tile 1: Main Large Feature */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            onClick={() => setActiveImage(GALLERY_ITEMS[0])}
            className="md:col-span-7 h-[380px] rounded overflow-hidden relative group cursor-pointer shadow-lg"
          >
            <img
              src={GALLERY_ITEMS[0].image}
              alt={GALLERY_ITEMS[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-[#F5F0E6]">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#B08D57]">
                  {GALLERY_ITEMS[0].category}
                </span>
                <p className="font-serif italic text-xl">{GALLERY_ITEMS[0].title}</p>
              </div>
              <Maximize2 className="w-4 h-4 text-[#B08D57] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>

          {/* Tiles 2 & 3: Right Stack */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <motion.div
              whileHover={{ scale: 1.01 }}
              onClick={() => setActiveImage(GALLERY_ITEMS[1])}
              className="h-[182px] rounded overflow-hidden relative group cursor-pointer shadow-lg"
            >
              <img
                src={GALLERY_ITEMS[1].image}
                alt={GALLERY_ITEMS[1].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-[#F5F0E6]">
                <p className="font-serif italic text-base">{GALLERY_ITEMS[1].title}</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              onClick={() => setActiveImage(GALLERY_ITEMS[2])}
              className="h-[182px] rounded overflow-hidden relative group cursor-pointer shadow-lg"
            >
              <img
                src={GALLERY_ITEMS[2].image}
                alt={GALLERY_ITEMS[2].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-[#F5F0E6]">
                <p className="font-serif italic text-base">{GALLERY_ITEMS[2].title}</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Link to Full Gallery */}
        <div className="mt-8 text-right">
          <Link
            href="/galeria"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#161E1B] hover:text-[#B08D57] transition-colors group"
          >
            <span className="border-b border-[#161E1B] group-hover:border-[#B08D57] pb-0.5">
              Ver galeria completa do restaurante
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImage(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl max-h-[85vh] rounded overflow-hidden z-10"
            >
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-[#B08D57] hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="w-full h-full object-contain max-h-[80vh]"
              />
              <div className="bg-[#101F1B] p-4 text-[#F5F0E6] text-center">
                <p className="font-serif italic text-xl text-[#B08D57]">{activeImage.title}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
