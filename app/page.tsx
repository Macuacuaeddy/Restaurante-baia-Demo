"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedDishes } from "@/components/FeaturedDishes";
import { AboutSection } from "@/components/AboutSection";
import { MenuSection } from "@/components/MenuSection";
import { GallerySection } from "@/components/GallerySection";
import { SocialProof } from "@/components/SocialProof";
import { ReservationSection } from "@/components/ReservationSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#101F1B] text-[#F5F0E6] relative">
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Pratos em Destaque (80% Imagem, Grelha Assimétrica) */}
      <FeaturedDishes />

      {/* A Nossa Cozinha / História */}
      <AboutSection />

      {/* Degustação / Menu Sample */}
      <MenuSection />

      {/* Avaliações & Críticas */}
      <SocialProof />

      {/* Galeria de Fotos */}
      <GallerySection />

      {/* Reservas */}
      <ReservationSection />

      {/* Rodapé */}
      <Footer />

      {/* Botão Flutuante WhatsApp */}
      <WhatsAppButton />
    </main>
  );
}
