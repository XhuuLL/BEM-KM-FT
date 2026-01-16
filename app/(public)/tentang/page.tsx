"use client";

import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { motion, Variants } from "framer-motion";
import { Eye, Target, Users, Rocket, HeartHandshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function TentangPage() {
  return (
    <section className="py-28">
      <Container className="space-y-20">

        {/* HERO */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="space-y-5 text-center max-w-3xl mx-auto"
        >
          <Badge variant="outline" className="text-blue-600 dark:text-blue-400 px-4 py-1 text-sm">
            Tentang Kami
          </Badge>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            BEM Fakultas Teknik
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            BEM-KM FT adalah organisasi kemahasiswaan di Fakultas Teknik Universitas Muhadi Setiabudi
            yang menjadi wadah aspirasi, kreativitas, serta pengembangan karakter dan kepemimpinan mahasiswa.
          </p>
        </motion.div>

        {/* VISI & MISI */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card className="bg-white/80 dark:bg-slate-800/80 border-l-4 border-blue-500 shadow-md hover:shadow-lg transition">
            <CardContent className="p-7 space-y-4">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                <Eye size={22} />
                <h3 className="font-semibold text-xl">Visi</h3>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Menjadi organisasi kemahasiswaan yang aktif, progresif, dan memberikan dampak positif
                bagi mahasiswa, fakultas, serta masyarakat luas.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 dark:bg-slate-800/80 border-l-4 border-emerald-500 shadow-md hover:shadow-lg transition">
            <CardContent className="p-7 space-y-4">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                <Target size={22} />
                <h3 className="font-semibold text-xl">Misi</h3>
              </div>
              <ul className="list-disc ml-5 text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed">
                <li>Mengembangkan potensi mahasiswa melalui program kerja terstruktur dan berkelanjutan.</li>
                <li>Menjadi penyambung aspirasi mahasiswa kepada pihak fakultas dan universitas.</li>
                <li>Membangun budaya kolaborasi, kepemimpinan, dan profesionalisme.</li>
                <li>Menghadirkan kegiatan sosial, akademik, dan pengabdian masyarakat.</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* NILAI ORGANISASI */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              icon: <Users size={22} />,
              title: "Kebersamaan",
              color: "text-indigo-600 dark:text-indigo-400",
              desc: "Solidaritas dan kerja sama menjadi fondasi utama organisasi.",
            },
            {
              icon: <Rocket size={22} />,
              title: "Inovasi",
              color: "text-rose-600 dark:text-rose-400",
              desc: "Kami mendorong ide kreatif dan solusi baru menghadapi tantangan zaman.",
            },
            {
              icon: <HeartHandshake size={22} />,
              title: "Integritas",
              color: "text-amber-600 dark:text-amber-400",
              desc: "Kejujuran dan tanggung jawab adalah nilai yang kami junjung tinggi.",
            },
            {
              icon: <Target size={22} />,
              title: "Dedikasi",
              color: "text-emerald-600 dark:text-emerald-400",
              desc: "Komitmen penuh dalam setiap langkah pengabdian dan pelayanan.",
            },
          ].map((item, i) => (
            <Card key={i} className="bg-white/80 dark:bg-slate-800/80 shadow hover:shadow-lg transition">
              <CardContent className="p-7 space-y-4">
                <div className={`flex items-center gap-2 ${item.color}`}>
                  {item.icon}
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

      </Container>
    </section>
  );
}
