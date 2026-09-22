"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu as MenuIcon, X, Calendar, MessageCircle, Anchor } from "lucide-react";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "A Nossa História", href: "/sobre" },
    { name: "Galeria", href: "/galeria" },
    { name: "Eventos VIP", href: "/eventos" },
    { name: "Reservas", href: "/reservas" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#101F1B]/90 backdrop-blur-md py-4 border-b border-[#B08D57]/20 shadow-2xl"
          : "bg-gradient-to-b from-[#101F1B]/90 via-[#101F1B]/50 to-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo - Matching HTML specification */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-[#B08D57]/20 border border-[#B08D57]/40 flex items-center justify-center group-hover:border-[#B08D57] transition-all">
            <Anchor className="w-4 h-4 text-[#B08D57] group-hover:rotate-12 transition-transform" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif italic text-2xl tracking-wide text-[#F5F0E6] group-hover:text-[#B08D57] transition-colors">
              Baía
            </span>
            <span className="text-[9px] tracking-[0.2em] text-[#B08D57]/90 uppercase font-sans font-light">
              Cozinha Contemporânea • Maputo
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-light transition-colors relative py-1 ${
                  isActive ? "text-[#B08D57] font-medium" : "text-[#F5F0E6]/80 hover:text-[#F5F0E6]"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#B08D57]"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://wa.me/258840000000?text=Ol%C3%A1%2C%20gostaria%20de%20reservar%20uma%20mesa%20no%20Ba%C3%ADa."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded border border-[#F5F0E6]/30 text-[#F5F0E6] text-xs font-light hover:border-[#B08D57] hover:text-[#B08D57] transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#B08D57]" />
            <span>WhatsApp</span>
          </a>

          <Link
            href="/reservas"
            className="inline-flex items-center gap-2 px-5 py-2 rounded bg-[#B08D57] text-[#101F1B] font-medium text-xs shadow-md hover:bg-[#c49e64] transition-all"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Reservar Mesa</span>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-[#F5F0E6] p-2 focus:outline-none"
          aria-label="Abrir Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#B08D57]" /> : <MenuIcon className="w-6 h-6 text-[#F5F0E6]" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-[#101F1B]/95 border-b border-[#B08D57]/20 backdrop-blur-xl px-6 py-8"
          >
            <div className="flex flex-col gap-5 items-center text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-serif italic ${
                    pathname === link.href ? "text-[#B08D57]" : "text-[#F5F0E6]/90 hover:text-[#F5F0E6]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="w-full pt-4 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="https://wa.me/258840000000?text=Ol%C3%A1%2C%20gostaria%20de%20reservar%20uma%20mesa%20no%20Ba%C3%ADa."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded border border-[#B08D57]/40 text-[#F5F0E6] font-light text-sm flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#B08D57]" />
                  <span>Contactar via WhatsApp</span>
                </a>

                <Link
                  href="/reservas"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded bg-[#B08D57] text-[#101F1B] font-semibold text-sm shadow-md flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Guarde a Sua Mesa</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
