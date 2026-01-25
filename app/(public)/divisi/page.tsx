"use client";

import { divisions } from "@/lib/data/divisi";
import { Container } from "@/components/layout/container";
import { motion, Variants } from "framer-motion"; 
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, 
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { 
      type: "spring", 
      stiffness: 100,
      damping: 15 
    },
  },
};

export default function DivisiPage() {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-50 dark:bg-[#020617]">
      {/* Background Ornaments (Aura modern) */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[150px] -z-10" />

      <Container>
        {/* Header Section */}
        <div className="text-center space-y-6 mb-20 px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Divisi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">BEM KM FT</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Unit kerja strategis yang berkolaborasi untuk menciptakan inovasi dan dampak nyata bagi mahasiswa Fakultas Teknik.
          </motion.p>
        </div>

        {/* Grid Divisi */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
        >
          {divisions.map((divisi) => (
            <motion.div
              key={divisi.slug}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link href={`/divisi/${divisi.slug}`} className="block h-full">
                <div className="relative h-full flex flex-col bg-white dark:bg-slate-900/40 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-[2rem] overflow-hidden transition-all duration-500 group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] dark:group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] group-hover:border-blue-500/50">
                  
                  {/* Image with Dynamic Overlay */}
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={divisi.image}
                      alt={divisi.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                    
                    {/* Badge on Image */}
                    <div className="absolute bottom-4 left-6">
                      <span className="text-white/70 text-xs font-medium uppercase tracking-widest bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20">
                        Official Division
                      </span>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors duration-300">
                      {divisi.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 line-clamp-3">
                      {divisi.description}
                    </p>
                    
                    {/* Footer Card */}
                    <div className="mt-auto flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-5">
                      <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">
                        Eksplorasi
                      </span>
                      <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}