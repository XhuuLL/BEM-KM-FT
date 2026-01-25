"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquareMore, 
  Sparkles, 
  ExternalLink, 
  Instagram 
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { campusInfo } from "@/lib/constants/info";

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

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(res => setTimeout(res, 1500));
    alert("Pesan berhasil dikirim!");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setLoading(false);
  };

  return (
    <section className="relative py-24 min-h-screen overflow-hidden bg-slate-50 dark:bg-[#020617]">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] -z-10" />

      <Container>
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center space-y-6 mb-20">
          <div className="flex justify-center">
            <span className="px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20">
              <Sparkles className="inline-block w-3 h-3 mr-2 mb-0.5" /> Jalin Komunikasi
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
            Hubungi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Kami</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            Punya pertanyaan atau ingin berkolaborasi? Kami siap mendengarkan aspirasi Anda melalui berbagai saluran resmi kami.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Kolom Kiri: Info & Saluran */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-5 space-y-6">
            <motion.div variants={fadeInUp}>
              <Card className="bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl border-slate-200 dark:border-slate-800 rounded-[2rem] shadow-xl">
                <CardContent className="p-8 space-y-8">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Informasi Kontak</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 group">
                      <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-600 group-hover:scale-110 transition-transform">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email</p>
                        <p className="text-slate-700 dark:text-slate-200 font-medium">{campusInfo.contact.email}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 group">
                      <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 group-hover:scale-110 transition-transform">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Telepon</p>
                        <p className="text-slate-700 dark:text-slate-200 font-medium">{campusInfo.contact.phone}</p>
                      </div>
                    </div>
                    {/* PENGGUNAAN MapPin */}
                    <div className="flex items-start gap-4 group">
                      <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-600 group-hover:scale-110 transition-transform">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Sekretariat</p>
                        <p className="text-slate-700 dark:text-slate-200 font-medium leading-relaxed mb-1">{campusInfo.contact.address}</p>
                        {/* PENGGUNAAN ExternalLink */}
                        <Link href={campusInfo.contact.mapsUrl || "#"} target="_blank" className="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1 hover:underline">
                          Buka Google Maps <ExternalLink size={12} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* WhatsApp Card */}
            <motion.div variants={fadeInUp}>
              <div className="relative group overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-500 to-teal-600 p-6 text-white shadow-xl">
                <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-125 transition-transform duration-700">
                  <MessageSquareMore size={100} />
                </div>
                <div className="relative z-10 space-y-3">
                  <h3 className="text-xl font-bold flex items-center gap-2">Saluran WhatsApp</h3>
                  <p className="text-xs text-emerald-50 font-light leading-relaxed">Update kegiatan tercepat langsung di ponsel Anda.</p>
                  <Button asChild variant="secondary" className="w-full bg-white/20 hover:bg-white/30 border-white/20 text-white backdrop-blur-md rounded-xl font-bold transition-all">
                    <Link href="https://whatsapp.com/channel/0029Vb5v7j72ZjCipsg2n820" target="_blank">Gabung Saluran</Link>
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Instagram Card */}
            <motion.div variants={fadeInUp}>
              <div className="relative group overflow-hidden rounded-[2rem] bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-6 text-white shadow-xl">
                <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:rotate-12 group-hover:scale-125 transition-transform duration-700">
                  <Instagram size={100} />
                </div>
                <div className="relative z-10 space-y-3">
                  <h3 className="text-xl font-bold flex items-center gap-2">Saluran Instagram</h3>
                  <p className="text-xs text-purple-50 font-light leading-relaxed">Momen seru dan pengumuman visual kami.</p>
                  <Button asChild variant="secondary" className="w-full bg-white/20 hover:bg-white/30 border-white/20 text-white backdrop-blur-md rounded-xl font-bold transition-all">
                    <Link href="https://www.instagram.com/channel/AbZIB6e6tdJ9Ja6x/" target="_blank">Ikuti Saluran</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Form Kirim Pesan */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-7">
            <Card className="bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-xl">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Kirim Pesan</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 text-left">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Nama Lengkap</label>
                      <input name="name" value={formData.name} onChange={handleChange} placeholder="Nama Anda" required className="w-full bg-slate-100 dark:bg-slate-800/50 border-none rounded-2xl px-5 py-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all outline-none" />
                    </div>
                    <div className="space-y-2 text-left">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Email</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email@gmail.com" required className="w-full bg-slate-100 dark:bg-slate-800/50 border-none rounded-2xl px-5 py-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all outline-none" />
                    </div>
                  </div>
                  <div className="space-y-2 text-left">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Subjek</label>
                    <input name="subject" value={formData.subject} onChange={handleChange} placeholder="Subjek pesan" required className="w-full bg-slate-100 dark:bg-slate-800/50 border-none rounded-2xl px-5 py-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all outline-none" />
                  </div>
                  <div className="space-y-2 text-left">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Pesan</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tuliskan aspirasi Anda..." rows={4} required className="w-full bg-slate-100 dark:bg-slate-800/50 border-none rounded-2xl px-5 py-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all outline-none resize-none" />
                  </div>
                  <Button type="submit" disabled={loading} className="w-full py-7 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-lg shadow-blue-500/25 transition-all">
                    {loading ? "Memproses..." : <>Kirim Sekarang <Send className="w-5 h-5 ml-2" /></>}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}