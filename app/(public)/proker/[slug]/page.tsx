"use client";

import React from "react"; // Tambahkan import React
import { Container } from "@/components/layout/container";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Tag, Info, Users } from "lucide-react";
import Link from "next/link";

// Konfigurasi Animasi
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  },
};

// Data Proker
const prokerData = {
  "Enginering-Competition": {
    title: "Engineering Competition",
    divisi: "PSDM",
    image: "/images/proker/detail/dekancup.jpg",
    full: "Engineering Competition 2025 adalah ajang prestisius yang menggabungkan kecanggihan strategi digital dengan semangat sportivitas fisik dalam satu panggung kompetisi yang dinamis..."
  },
  "sidang": {
    title: "Pelatihan Persidangan",
    divisi: "BPH",
    image: "/images/proker/detail/sidang.png",
    full: "Pelatihan Sidang Musyawarah Besar ini hadir sebagai sarana edukasi strategis untuk membekali para kader organisasi..."
  },
  "healing": {
    title: "Healing With Teknik",
    divisi: "Minat Bakat",
    image: "/images/proker/detail/healing.png",
    full: "Healing with Teknik hadir sebagai wadah penyegaran bagi mahasiswa teknik di tengah padatnya rutinitas akademik..."
  },
  "bem-fest": {
    title: "Partisipasi BEM CHAMPIONSHIP 2025",
    divisi: "HUMAS",
    image: "/images/proker/detail/bem.png",
    full: "Partisipasi BEM Championship merupakan wujud dedikasi dan keterlibatan aktif organisasi..."
  },
  "bukber": {
    title: "Buka Bersama",
    divisi: "HUMAS",
    image: "/images/proker/detail/bukber.png",
    full: "Buka Bersama di bulan Ramadhan adalah momen istimewa yang dirayakan dengan penuh kehangatan..."
  },
  "informasi": {
    title: "Informasi Akademik",
    divisi: "IMFOKOM",
    image: "/images/proker/detail/informasi.png",
    full: "Penyebaran Informasi Akademik secara efektif merupakan aspek krusial..."
  },
  "gapsi": {
    title: "Pertandingan GAPSI",
    divisi: "Minat Bakat",
    image: "/images/proker/detail/gapsi.png",
    full: "Pertandingan GAPSI (Gelar Apresiasi Prestasi Seni dan Olahraga) adalah ajang kompetisi..."
  },
  "sosmed": {
    title: "Sosial Media",
    divisi: "IMFOKOM",
    image: "/images/proker/detail/sosmed.png",
    full: "Pengaktifan akun sosial media BEM-KM-FT merupakan langkah strategis..."
  },
  "wisuda": {
    title: "Parade Wisuda Teknik",
    divisi: "PSDM",
    image: "/images/proker/detail/wisuda.png",
    full: "Parade Wisuda Teknik adalah sebuah perayaan istimewa..."
  },
  "maba": {
    title: "Maba Teknik Orientation",
    divisi: "PSDM",
    image: "/images/proker/detail/maba.png",
    full: "Maba Teknik Orientation adalah program pengenalan yang dirancang khusus..."
  },
  "lkmm": {
    title: "LKMM-TD",
    divisi: "BPH",
    image: "/images/proker/detail/lkmm.png",
    full: "LKMM-TD (Latihan Keterampilan Manajemen Mahasiswa Tingkat Dasar)..."
  },
  "website": {
    title: "Pengembangan Website BEM FT",
    divisi: "IMFOKOM",
    image: "/images/proker/detail/web.png",
    full: "Pengembangan Website BEM FT merupakan inisiatif strategis..."
  },
  "semarak": {
    title: "Semarak Ramadhan",
    divisi: "HUMAS",
    image: "/images/proker/detail/semarak.png",
    full: "Semarak Ramadhan adalah sebuah inisiatif yang dirancang untuk merayakan..."
  }
};

// Next.js 15: params harus di-unwrap (biasanya dengan React.use() di Client Component)
export default function DetailProker({ params }: { params: Promise<{ slug: string }> }) {
  // Unwrap params menggunakan React.use()
  const resolvedParams = React.use(params);
  const slug = resolvedParams.slug;

  const data = prokerData[slug as keyof typeof prokerData];

  if (!data) {
    notFound();
  }

  return (
    <section className="relative min-h-screen py-24 overflow-hidden bg-slate-50 dark:bg-[#020617]">
      {/* Dekorasi Latar Belakang */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] -z-10" />

      <Container>
        {/* Tombol Kembali */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link 
            href="/proker" 
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors group"
          >
            <div className="p-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group-hover:border-blue-500/50 group-hover:shadow-lg transition-all">
              <ArrowLeft size={16} />
            </div>
            Kembali ke Daftar Proker
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Kolom Kiri: Visual & Metadata */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-8"
          >
            <div className="relative h-[300px] md:h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20 dark:border-slate-800 group">
              <Image 
                src={data.image} 
                alt={data.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <Tag size={16} className="text-blue-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  {data.divisi}
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <Calendar size={16} className="text-emerald-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Periode 2025
                </span>
              </div>
            </div>
          </motion.div>

          {/* Kolom Kanan: Detail Konten */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">
                {data.title}
              </h1>
              <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full" />
            </div>

            <div className="relative p-8 rounded-[2rem] bg-white dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-xl">
              <div className="flex items-center gap-2 mb-6 text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-widest">
                <Info size={18} /> Deskripsi Program
              </div>
              
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 font-light">
                {data.full}
              </p>
            </div>

            {/* CTA Section */}
            <div className="p-6 rounded-3xl bg-blue-600/5 border border-blue-500/10 flex items-center justify-between group cursor-pointer hover:bg-blue-600/10 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Ingin Berkolaborasi?</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Hubungi kami</p>
                </div>
              </div>
              <Link href="/kontak" className="p-2 rounded-full bg-white dark:bg-slate-800 group-hover:translate-x-1 transition-transform">
                <ArrowLeft size={16} className="rotate-180" />
              </Link>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}