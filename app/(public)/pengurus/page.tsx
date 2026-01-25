"use client";

import { useState } from "react";
import { ketuaList } from "@/lib/data/ketua";
import { KetuaCard } from "@/components/cards/ketua-card";
import { divisions } from "@/lib/data/divisi";
import { DivisiCard } from "@/components/cards/divisi-card";
import { Container } from "@/components/layout/container";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Users, Calendar, ChevronDown } from "lucide-react";

// Animasi Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function PengurusPage() {
  const [selectedYear, setSelectedYear] = useState(ketuaList[0].year);

  const selectedKetua = ketuaList.find((k) => k.year === selectedYear);
  const currentActiveYear = "2024 / 2025";
  const shouldShowDivisions = selectedYear === currentActiveYear;

  return (
    <section className="relative min-h-screen py-24 overflow-hidden bg-slate-50 dark:bg-[#020617]">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] -z-10" />

      <Container className="space-y-16">
        
        {/* --- HERO SECTION --- */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center space-y-6 max-w-3xl mx-auto"
        >

          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
            Struktur <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Kepengurusan</span>
          </h1>
          
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-light leading-relaxed">
            Mengenal lebih dekat barisan pimpinan dan penggerak di balik setiap inovasi BEM KM FT.
          </p>
        </motion.div>

        {/* --- FILTER TAHUN --- */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-4"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-center gap-3 px-6 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
              <Calendar className="w-5 h-5 text-blue-500" />
              <label htmlFor="year" className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-tighter">
                Tahun Bakti:
              </label>
              <div className="relative flex items-center">
                <select
                  id="year"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="appearance-none bg-transparent pr-8 pl-2 py-1 text-sm font-black text-blue-600 dark:text-blue-400 focus:outline-none cursor-pointer z-10"
                >
                  {ketuaList.map((k) => (
                    <option key={k.year} value={k.year} className="dark:bg-slate-900 text-slate-900 dark:text-white">
                      {k.year}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- SECTION KETUA (GUBERNUR) --- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedYear}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
          >
            <KetuaCard data={selectedKetua!} />
          </motion.div>
        </AnimatePresence>

        {/* --- SECTION DIVISI --- */}
        <AnimatePresence>
          {shouldShowDivisions && (
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-16 pt-12 border-t border-slate-200 dark:border-slate-800"
            >
              <div className="flex flex-col items-center gap-2">
                <Users className="w-8 h-8 text-blue-500 mb-2" />
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Bidang & Divisi</h2>
                <div className="h-1.5 w-20 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full" />
              </div>

              <div className="space-y-24">
                {divisions.map((division, index) => (
                  <motion.div
                    key={division.name}
                    variants={fadeInUp}
                    className="relative"
                  >
                    {/* Background number or ornament for each division if needed */}
                    <div className="absolute -left-10 top-0 text-8xl font-black text-slate-200/20 dark:text-white/5 -z-10 select-none">
                      0{index + 1}
                    </div>
                    <DivisiCard data={division} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </Container>
    </section>
  );
}