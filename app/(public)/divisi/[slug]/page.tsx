"use client";

import { divisions } from "@/lib/data/divisi";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { motion } from "framer-motion";

export default function DetailDivisiPage({ params }: { params: { slug: string } }) {
  const divisi = divisions.find((d) => d.slug === params.slug);
  if (!divisi) return notFound();

  return (
    <section className="py-28">
      <Container className="space-y-14">

        {/* Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }}
          className="relative h-72 rounded-2xl overflow-hidden shadow-xl"
        >
          <Image src={divisi.image} alt={divisi.name} fill className="object-cover" />
        </motion.div>

        {/* Title & Description */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            {divisi.name}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            {divisi.description}
          </p>
        </div>

        {/* Koordinator */}
<div className="space-y-4 text-center">
  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
    Koordinator Divisi
  </h3>

  <div className="inline-block bg-white/80 dark:bg-slate-900/70 p-6 rounded-xl shadow space-y-3">
    <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden">
      <Image 
        src={divisi.coordinator.pictureUrl} 
        alt={divisi.coordinator.name} 
        fill 
        className="object-cover" 
      />
    </div>

    <h4 className="font-semibold text-lg text-slate-900 dark:text-white">
      {divisi.coordinator.name}
    </h4>
    <p className="text-sm text-slate-500 dark:text-slate-400">
      Koordinator Divisi
    </p>
  </div>
</div>


        <div className="flex gap-6 overflow-x-auto pb-4 justify-center">
  {divisi.members.map((m, i) => (
    <motion.div
      key={i}
      whileHover={{ y: -6, scale: 1.02 }}
      className="min-w-[220px] bg-white/80 dark:bg-slate-900/70 p-5 rounded-xl shadow text-center space-y-3"
    >
      {m.pictureUrl && (
        <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden">
          <Image src={m.pictureUrl} alt={m.name} fill className="object-cover" />
        </div>
      )}

      <h4 className="font-medium text-slate-900 dark:text-white">
        {m.name}
      </h4>

      {m.role && (
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {m.role}
        </p>
      )}
    </motion.div>
  ))}
</div>


      </Container>
    </section>
  );
}
