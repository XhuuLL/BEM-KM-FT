"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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

export default function ProkerPage() {
  const [activeDiv, setActiveDiv] = useState("All");

  const filteredData =
    activeDiv === "All"
      ? prokerData
      : prokerData.filter(item => item.divisi === activeDiv);

  return (
    <main className="min-h-screen pt-28 px-10 text-center">

      <h1 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
        Program Kerja
      </h1>

      <p className="max-w-2xl mx-auto mb-10 text-slate-600 dark:text-gray-300">
        Program kerja merupakan rencana kegiatan yang akan dilaksanakan oleh pengurus selama satu periode kepengurusan.
      </p>

      {/* FILTER */}
      <div className="flex justify-center flex-wrap gap-3 mb-12">
        {divisions.map(div => (
          <button
            key={div}
            onClick={() => setActiveDiv(div)}
            className={`px-5 py-2 rounded-full border text-sm transition-all
              ${activeDiv === div
                ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                : "bg-transparent text-slate-700 dark:text-gray-300 border-slate-300 dark:border-slate-700 hover:bg-blue-600 hover:text-white"}
            `}
          >
            {div}
          </button>
        ))}
      </div>

      {/* PROKER CARDS */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredData.map(item => (
          <Link
            key={item.slug}
            href={`/proker/${item.slug}`}
            className="group bg-slate-200/40 dark:bg-white/10 rounded-xl overflow-hidden backdrop-blur hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl"
          >
            <div className="relative h-52 w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold mb-1 text-slate-900 dark:text-white">
                {item.title}
              </h3>

              <p className="text-sm text-slate-600 dark:text-gray-300">
                {item.short}
              </p>

              <span className="inline-block mt-3 text-xs font-semibold text-blue-600 dark:text-blue-400">
                {item.divisi}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
