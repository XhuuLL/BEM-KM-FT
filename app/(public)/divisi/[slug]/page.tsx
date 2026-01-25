"use client";

import { divisions } from "@/lib/data/divisi";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { motion, Variants } from "framer-motion";
import { User, Users, ShieldCheck } from "lucide-react";

// Animasi Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 20 } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function DetailDivisiPage({ params }: { params: { slug: string } }) {
  const divisi = divisions.find((d) => d.slug === params.slug);
  if (!divisi) return notFound();

  return (
    <section className="relative py-24 min-h-screen overflow-hidden bg-slate-50 dark:bg-[#020617]">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] -z-10" />

      <Container className="space-y-24">
        
        {/* --- HERO SECTION (Banner dengan Judul di Dalam) --- */}
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative h-[350px] md:h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20 dark:border-slate-800"
          >
            <Image 
              src={divisi.image} 
              alt={divisi.name} 
              fill 
              className="object-cover scale-105" 
              priority
            />
            {/* Overlay Gradient yang lebih pekat di bawah untuk teks */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-8 md:p-14 w-full">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-3"
              >
                <span className="px-4 py-1 rounded-full text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase bg-blue-600 text-white w-fit block mb-4">
                  DIVISI BEM KM FT
                </span>
                <h1 className="text-4xl md:text-7xl font-black text-white tracking-tight leading-none">
                  {divisi.name}
                </h1>
                <p className="text-slate-300 text-base md:text-xl max-w-2xl font-light leading-relaxed">
                  {divisi.description}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* --- KOORDINATOR SECTION --- */}
        <div className="space-y-12">
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] flex-grow max-w-[100px] bg-gradient-to-r from-transparent to-slate-300 dark:to-slate-700" />
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
              <ShieldCheck className="text-blue-500 w-6 h-6" /> Koordinator Divisi
            </h3>
            <div className="h-[1px] flex-grow max-w-[100px] bg-gradient-to-l from-transparent to-slate-300 dark:to-slate-700" />
          </div>

          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-sm mx-auto group"
          >
            <div className="relative bg-white dark:bg-slate-900/40 backdrop-blur-xl p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl text-center transition-all duration-500 group-hover:border-blue-500/50 group-hover:shadow-blue-500/10">
              <div className="relative w-36 h-36 mx-auto mb-8">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                  <Image 
                    src={divisi.coordinator.pictureUrl} 
                    alt={divisi.coordinator.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>
              </div>
              <h4 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {divisi.coordinator.name}
              </h4>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mt-2 uppercase tracking-widest text-[10px]">
                Leader & Coordinator
              </p>
            </div>
          </motion.div>
        </div>

        {/* --- ANGGOTA SECTION --- */}
        <div className="space-y-12">
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] flex-grow max-w-[100px] bg-gradient-to-r from-transparent to-slate-300 dark:to-slate-700" />
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
              <Users className="text-blue-500 w-6 h-6" /> Anggota Divisi
            </h3>
            <div className="h-[1px] flex-grow max-w-[100px] bg-gradient-to-l from-transparent to-slate-300 dark:to-slate-700" />
          </div>

          {/* Penggunaan Flex Wrap dengan Justify Center agar 3 atau 4 anggota selalu rapi di tengah */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 md:gap-10"
          >
            {divisi.members.map((m, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="w-full sm:w-[calc(50%-2rem)] md:w-[calc(33.33%-2.5rem)] lg:w-[calc(25%-2.5rem)] max-w-[280px] bg-white/40 dark:bg-slate-900/30 backdrop-blur-md p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 text-center hover:shadow-2xl transition-all group hover:border-blue-500/30"
              >
                <div className="relative w-28 h-28 mx-auto mb-6 rounded-2xl overflow-hidden shadow-inner group-hover:shadow-blue-500/20 transition-all duration-500">
                  {m.pictureUrl ? (
                    <Image 
                      src={m.pictureUrl} 
                      alt={m.name} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                      <User className="w-12 h-12 text-slate-400" />
                    </div>
                  )}
                </div>
                <h4 className="font-bold text-lg text-slate-900 dark:text-white line-clamp-2 leading-snug">
                  {m.name}
                </h4>
                <div className="mt-3 inline-block px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/50 text-[10px] font-medium text-slate-500 dark:text-slate-400 group-hover:text-blue-500 transition-colors">
                  {m.role || "Anggota"}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </Container>
    </section>
  );
}