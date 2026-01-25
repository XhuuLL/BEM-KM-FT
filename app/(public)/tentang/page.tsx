"use client";

import { Container } from "@/components/layout/container";
import { motion, Variants } from "framer-motion";
import { Eye, Target, Users, Rocket, HeartHandshake, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Definisi Animasi
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
    transition: { staggerChildren: 0.2 }
  }
};

export default function TentangPage() {
  return (
    <section className="relative py-24 min-h-screen overflow-hidden bg-slate-50 dark:bg-[#020617]">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] -z-10" />

      <Container className="space-y-28">

        {/* --- HERO SECTION --- */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="space-y-6 text-center max-w-4xl mx-auto px-4"
        >
          {/* Badge dihapus untuk tampilan lebih bersih */}
          
          <h1 className="text-4xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            Visi Misi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">BEM-KM FT</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto font-light">
            BEM-KM FT adalah organisasi kemahasiswaan di Fakultas Teknik Universitas Muhadi Setiabudi
            yang menjadi wadah aspirasi, kreativitas, serta pengembangan karakter dan kepemimpinan mahasiswa.
          </p>
        </motion.div>

        {/* --- VISI & MISI SECTION --- */}
        <motion.div
          className="grid md:grid-cols-2 gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Visi Card */}
          <motion.div variants={fadeInUp}>
            <Card className="relative h-full bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl border-slate-200 dark:border-slate-800 rounded-[2.5rem] overflow-hidden group hover:border-blue-500/50 transition-all duration-500 shadow-xl">
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-500" />
              <CardContent className="p-10 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-500">
                  <Eye size={32} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Visi Kami</h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed italic">
                  Menjadi organisasi kemahasiswaan yang aktif, progresif, dan memberikan dampak positif
                  bagi mahasiswa, fakultas, serta masyarakat luas.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Misi Card */}
          <motion.div variants={fadeInUp}>
            <Card className="relative h-full bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl border-slate-200 dark:border-slate-800 rounded-[2.5rem] overflow-hidden group hover:border-emerald-500/50 transition-all duration-500 shadow-xl">
              <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500" />
              <CardContent className="p-10 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-500">
                  <Target size={32} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Misi Strategis</h3>
                <ul className="space-y-4">
                  {[
                    "Mengembangkan potensi mahasiswa melalui program kerja terstruktur.",
                    "Menjadi penyambung aspirasi kepada pihak fakultas.",
                    "Membangun budaya kolaborasi dan profesionalisme.",
                    "Menghadirkan kegiatan sosial dan akademik bagi masyarakat."
                  ].map((misi, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span className="text-sm md:text-base leading-snug">{misi}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* --- NILAI ORGANISASI SECTION --- */}
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Nilai Inti Organisasi</h2>
            <p className="text-slate-500 dark:text-slate-400">Prinsip yang kami pegang dalam setiap pergerakan.</p>
          </div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Users size={28} />,
                title: "Kebersamaan",
                color: "text-indigo-600 dark:text-indigo-400",
                bgColor: "bg-indigo-500/10",
                desc: "Solidaritas dan kerja sama menjadi fondasi utama organisasi.",
              },
              {
                icon: <Rocket size={28} />,
                title: "Inovasi",
                color: "text-rose-600 dark:text-rose-400",
                bgColor: "bg-rose-500/10",
                desc: "Mendorong ide kreatif dan solusi baru menghadapi tantangan zaman.",
              },
              {
                icon: <Shield size={28} />,
                title: "Integritas",
                color: "text-amber-600 dark:text-amber-400",
                bgColor: "bg-amber-500/10",
                desc: "Kejujuran dan tanggung jawab adalah nilai yang kami junjung tinggi.",
              },
              {
                icon: <HeartHandshake size={28} />,
                title: "Dedikasi",
                color: "text-emerald-600 dark:text-emerald-400",
                bgColor: "bg-emerald-500/10",
                desc: "Komitmen penuh dalam setiap langkah pengabdian dan pelayanan.",
              },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} whileHover={{ y: -10 }}>
                <Card className="h-full bg-white dark:bg-slate-900/30 border-slate-200 dark:border-slate-800 rounded-[2rem] hover:shadow-2xl transition-all duration-300 group">
                  <CardContent className="p-8 space-y-5">
                    <div className={`w-14 h-14 rounded-2xl ${item.bgColor} flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-xl text-slate-900 dark:text-white leading-tight">{item.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </Container>
    </section>
  );
}