"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, Users, Sparkles, CheckCircle2, MapPin } from "lucide-react";
import { ReservationData } from "@/types/menu";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ReservationData>({
    name: "",
    email: "",
    phone: "",
    date: new Date().toISOString().split("T")[0],
    time: "19:00",
    guests: 2,
    specialRequests: "",
  });

  const [seatingArea, setSeatingArea] = useState<string>("Salão Principal Polana");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  const seatingOptions = [
    "Salão Principal Polana",
    "Esplanada com Vista para o Mar",
    "Mesa Exclusiva do Chef",
    "Sala VIP Garrafeira"
  ];
  
  const timeSlots = ["17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetAndClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-lg"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl glass-panel rounded-3xl p-6 sm:p-10 z-10 shadow-2xl border border-gold-500/30 my-8"
        >
          {/* Close Button */}
          <button
            onClick={resetAndClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-gray-400 hover:text-white hover:bg-gold-500 hover:text-black flex items-center justify-center transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 text-gold-400 text-xs font-mono tracking-widest uppercase mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Reserve a Sua Experiência Gastronómica</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                  Reserva de <span className="italic font-normal gold-gradient-text">Mesa em Maputo</span>
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Guests & Seating Area */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Guest Count */}
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-2 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-gold-400" /> Número de Pessoas
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((num) => (
                        <option key={num} value={num} className="bg-neutral-900 text-white">
                          {num} {num === 1 ? "Pessoa" : "Pessoas"}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Seating Area */}
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-2 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-gold-400" /> Preferência de Espaço
                    </label>
                    <select
                      value={seatingArea}
                      onChange={(e) => setSeatingArea(e.target.value)}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors"
                    >
                      {seatingOptions.map((area) => (
                        <option key={area} value={area} className="bg-neutral-900 text-white">
                          {area}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 2: Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-2 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gold-400" /> Data Pretendida
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-2 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-gold-400" /> Horário
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot} className="bg-neutral-900 text-white">
                          {slot}h
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 3: Contact Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Nome Completo *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      required
                      placeholder="E-mail *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Telefone (+258) *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Aniversário / Alergias Alimentares"
                      value={formData.specialRequests}
                      onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 rounded-full bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 text-black font-bold text-base shadow-xl hover:shadow-gold-500/25 transition-all flex items-center justify-center gap-2 mt-4"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Confirmar Pedido de Reserva</span>
                </motion.button>
              </form>
            </div>
          ) : (
            /* Success Screen */
            <div className="text-center py-8 flex flex-col items-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 15 }}
                className="w-16 h-16 rounded-full bg-gold-500/20 border border-gold-500 flex items-center justify-center text-gold-400 mb-6"
              >
                <CheckCircle2 className="w-10 h-10" />
              </motion.div>

              <h3 className="font-serif text-3xl font-bold text-white mb-2">Reserva Solicitada com Sucesso</h3>
              <p className="text-gray-300 text-sm max-w-md font-light mb-6">
                Muito obrigado, <strong className="text-gold-400">{formData.name}</strong>. A sua mesa para{" "}
                <strong className="text-white">{formData.guests} pessoas</strong> foi pré-reservada para o dia{" "}
                <strong className="text-gold-400">{formData.date}</strong> às{" "}
                <strong className="text-gold-400">{formData.time}h</strong> ({seatingArea}).
              </p>

              <div className="bg-black/50 p-4 rounded-2xl border border-white/10 w-full max-w-sm mb-8 text-left text-xs space-y-2">
                <div className="flex justify-between text-gray-400">
                  <span>Código de Reserva:</span>
                  <span className="font-mono text-gold-400 font-bold">#MAPUTO-8924</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>E-mail de Confirmação:</span>
                  <span className="text-white">{formData.email}</span>
                </div>
              </div>

              <button
                onClick={resetAndClose}
                className="px-8 py-3 rounded-full bg-gold-500 text-black font-bold text-sm hover:bg-gold-400 transition-colors"
              >
                Concluído
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
