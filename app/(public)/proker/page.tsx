"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { LayoutGrid } from "lucide-react";

const divisions = ["All", "BPH", "PSDM", "Minat Bakat", "HUMAS", "IMFOKOM"];


const prokerData = [
  {
    slug: "Enginering-Competition",
    title: "Engineering Competition",
    divisi: "PSDM",
    image: "/images/proker/dekancup.jpg",
    short: "Innovation, Achievement, And Collaboration Of The Young Generation Of Engineering."
  },
  {
    slug: "sidang",
    title: "Pelatihan Persidangan",
    divisi: "BPH",
    image: "/images/proker/sidang.png",
    short: "Belajar berbicara, berpendapat, dan bermusyawarah dengan bijak — karena setiap suara punya makna."
  },
  {
    slug: "healing",
    title: "Healing WIth Teknik",
    divisi: "Minat Bakat",
    image: "/images/proker/healing.png",
    short: "Healing bareng anak Teknik."
  },
  {
    slug: "wisuda",
    title: "Parade Wisuda Teknik",
    divisi: "PSDM",
    image: "/images/proker/wisuda.png",
    short: "Parade wisuda untuk kelulusan mahasiswa teknik."
  },
  {
    slug: "gapsi",
    title: "Pertandingan GAPSI",
    divisi: "Minat Bakat",
    image: "/images/proker/gapsi.png",
    short: "Kejuaraan gapsi."
  },
  {
    slug: "sosmed",
    title: "Sosial Media",
    divisi: "IMFOKOM",
    image: "/images/proker/sosmed.png",
    short: "Pengaktifan akun seosial media BEM-KM-FT."
  },
  {
    slug: "bem-fest",
    title: "Partisipasi BEM CHAMPIONSHIP 2025",
    divisi: "HUMAS",
    image: "/images/proker/bem.png",
    short: "Berpartisipasi dalam event BEM Championship."
  },
  {
    slug: "bukber",
    title: "Buka Bersama",
    divisi: "HUMAS",
    image: "/images/proker/bukber.png",
    short: "Buka Bersama di bulan Ramadhan."
  },
  {
    slug: "informasi",
    title: "Informasi Akademik",
    divisi: "IMFOKOM",
    image: "/images/proker/informasi.png",
    short: "Memberikan informasi akademik kepada seluruh mahasiswa."
  },
  {
    slug: "lkmm",
    title: "LKMM-TD",
    divisi: "BPH",
    image: "/images/proker/lkmm.png",
    short: "LKMM tingkat dasar yang dilakukan paada Makrab Teknik 2025."
  },
  {
    slug: "maba",
    title: "Penyambutan Mahasiswa Baru",
    divisi: "PSDM",
    image: "/images/proker/maba.png",
    short: "Penyambutan mahasiswa baru oleh seluruh mahasiswa teknik."
  },
  {
    slug: "website",
    title: "Website BEM FT",
    divisi: "IMFOKOM",
    image: "/images/proker/web.png",
    short: "Pengembangan website Badan Eksekutif Mahasiswa Keluarga Mahasiswa Teknik."
  },
  {
    slug: "semarak",
    title: "Semarak Ramadhan",
    divisi: "HUMAS",
    image: "/images/proker/semarak.png",
    short: "Semarak Ramadhan oleh mahasiswa teknik."
  }
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function ProkerPage() {
  const [activeDiv, setActiveDiv] = useState("All");

  const filteredData =
    activeDiv === "All"
      ? prokerData
      : prokerData.filter(item => item.divisi === activeDiv);

  return (
    <section className="relative min-h-screen py-24 overflow-hidden bg-slate-50 dark:bg-[#020617]">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-[120px] -z-10" />

      <Container>
        {/* --- HEADER --- */}
        <div className="text-center space-y-6 mb-16">
          
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight"
          >
            Program <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Kerja</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-light"
          >
            Rencana strategis dan pergerakan nyata BEM KM FT untuk menciptakan kebermanfaatan bagi seluruh mahasiswa Teknik.
          </motion.p>
        </div>

        {/* --- FILTER BUTTONS --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center flex-wrap gap-3 mb-16"
        >
          {divisions.map(div => (
            <button
              key={div}
              onClick={() => setActiveDiv(div)}
              className={`relative px-6 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-300 overflow-hidden
                ${activeDiv === div
                  ? "bg-blue-600 text-white shadow-[0_10px_20px_-5px_rgba(37,99,235,0.4)]"
                  : "bg-white dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 hover:text-blue-600"
                }
              `}
            >
              {div}
              {activeDiv === div && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute inset-0 bg-blue-600 -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* --- PROKER GRID WITH ANIMATION --- */}
        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredData.map((item) => (
              <motion.div
                key={item.slug}
                layout
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <Link
                  href={`/proker/${item.slug}`}
                  className="group block h-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:border-blue-500/40"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Badge Category on Image */}
                    <div className="absolute top-4 right-4">
                      <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white uppercase tracking-wider shadow-xl">
                        {item.divisi}
                      </div>
                    </div>
                  </div>

                  <div className="p-8 space-y-4">
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                      <LayoutGrid size={14} />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Project Detail</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300 line-clamp-1">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-2 font-light">
                      {item.short}
                    </p>

                    <div className="pt-4 flex items-center text-xs font-bold text-slate-400 dark:text-slate-500 group-hover:text-blue-500 transition-colors">
                      Eksplorasi Program 
                      <motion.span className="ml-2 transition-transform group-hover:translate-x-1"> → </motion.span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredData.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-slate-500">Belum ada program kerja untuk kategori ini.</p>
          </motion.div>
        )}
      </Container>
    </section>
  );
}