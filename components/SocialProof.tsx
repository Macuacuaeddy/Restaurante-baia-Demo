"use client";

import React from "react";
import { REVIEWS } from "@/data/menuData";
import { Star, Quote, Award } from "lucide-react";

export const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-[#101F1B] text-[#F5F0E6] border-y border-[#B08D57]/20">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        {/* Header Badge */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-14 pb-8 border-b border-white/10">
          <div>
            <p className="font-serif italic text-[#B08D57] text-lg mb-1">reconhecimento & críticas</p>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F5F0E6]">
              O que dizem sobre o Baía
            </h3>
          </div>

          <div className="flex items-center gap-4 bg-[#1B2E28] px-5 py-3 rounded border border-[#B08D57]/30">
            <div className="flex text-[#B08D57]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#B08D57]" />
              ))}
            </div>
            <div className="text-xs">
              <span className="font-bold text-[#F5F0E6]">4.9 / 5.0</span>
              <span className="text-[#F5F0E6]/60 ml-1">(180+ avaliações no Google)</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-6 bg-[#1B2E28]/60 rounded border border-white/10 flex flex-col justify-between hover:border-[#B08D57]/40 transition-colors"
            >
              <div>
                <Quote className="w-6 h-6 text-[#B08D57]/40 mb-3" />
                <p className="text-xs sm:text-sm font-light text-[#F5F0E6]/85 italic leading-relaxed mb-6">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <div>
                  <p className="font-serif font-semibold text-[#F5F0E6]">{rev.author}</p>
                  <p className="text-[#B08D57] text-[11px]">{rev.role || rev.source}</p>
                </div>
                <span className="text-[10px] text-gray-400">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
