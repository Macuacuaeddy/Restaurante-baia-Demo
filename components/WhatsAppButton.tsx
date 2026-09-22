"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

export const WhatsAppButton: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <a
      href="https://wa.me/258840000000?text=Ol%C3%A1%2C%20gostaria%20de%20reservar%20uma%20mesa%20no%20Ba%C3%ADa."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#B08D57] text-[#101F1B] font-semibold text-sm shadow-2xl hover:scale-105 hover:bg-[#c49e64] transition-all duration-300 border border-[#101F1B]/20"
      aria-label="Reservar mesa via WhatsApp"
    >
      <MessageCircle className="w-5 h-5 fill-[#101F1B]" />
      <span>Reservar mesa</span>
    </a>
  );
};
