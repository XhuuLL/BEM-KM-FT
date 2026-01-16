"use client";

import { divisions } from "@/lib/data/divisi";
import { Container } from "@/components/layout/container";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function DivisiPage() {
  return (
    <section className="py-28">
      <Container className="space-y-16">

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Divisi BEM KM FT
          </h1>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Setiap divisi memiliki peran strategis dalam membangun organisasi yang solid,
            inovatif, dan berdampak nyata.
          </p>
        </div>

        {/* Grid Divisi */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {divisions.map((divisi) => (
            <motion.div
              key={divisi.slug}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white/80 dark:bg-slate-900/70 rounded-xl overflow-hidden shadow-lg"
            >
              <Link href={`/divisi/${divisi.slug}`}>

                <div className="relative h-48 w-full">
                  <Image
                    src={divisi.image}
                    alt={divisi.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {divisi.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    {divisi.description}
                  </p>
                </div>

              </Link>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
}
