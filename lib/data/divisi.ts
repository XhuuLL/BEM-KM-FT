import type { Division } from "@/lib/types/divisi";

export const divisions: Division[] = [
  {
    slug: "bph",
    name: "BPH (Badan Pengurus Harian)",
    image: "/images/divisi/bph.JPG",
    description: "Divisi inti yang mengelola seluruh jalannya organisasi.",

    coordinator: {
      name: "Alvin Satrio Purnomo",
      pictureUrl: "/images/pengurus/bph-(badan-pengurus-harian)/alvin-satrio-purnomo.jpg",
    },

    members: [
      { name: "Aisyah Romadhona", role: "Sekretaris Umum", pictureUrl: "/images/pengurus/bph-(badan-pengurus-harian)/aisyah-romadhona.jpg" },
      { name: "Luna Audya Faradila", role: "Sekretaris Umum", pictureUrl: "/images/pengurus/bph-(badan-pengurus-harian)/luna-audya-faradila.jpg" },
      { name: "Nabila Rizqi Maulida", role: "Bendahara Umum", pictureUrl: "/images/pengurus/bph-(badan-pengurus-harian)/nabila-rizqi-maulida.jpg" },
      { name: "Shinta Nuriyah", role: "Bendahara Umum", pictureUrl: "/images/pengurus/bph-(badan-pengurus-harian)/shinta-nuriyah.jpg" },
    ],
  },

  {
    slug: "psdm",
    name: "PSDM (Pengembangan Sumber Daya Manusia)",
    image: "/images/divisi/psdm.JPG",
    description: "Mengembangkan kualitas dan kapasitas sumber daya mahasiswa.",

    coordinator: {
      name: "Moch. Malik Badly Ba'adilah",
      pictureUrl: "/images/pengurus/psdm-(pengembangan-sumber-daya-manusia)/mochmalik-badly-baadilah.jpg",
    },

    members: [
      { name: "Akhmad Fatkhul Arifin", pictureUrl: "/images/pengurus/psdm-(pengembangan-sumber-daya-manusia)/akhmad-fatkhul-arifin.jpg" },
      { name: "Ibnu Fikri Haikal", pictureUrl: "/images/pengurus/psdm-(pengembangan-sumber-daya-manusia)/ibnu-fikri-haikal.jpg" },
      { name: "Aldi Alfariz", pictureUrl: "/images/pengurus/psdm-(pengembangan-sumber-daya-manusia)/aldi-alfariz.jpg" },
      { name: "Nur Salma Salsabila", pictureUrl: "/images/pengurus/psdm-(pengembangan-sumber-daya-manusia)/nur-salma-salsabila.jpg" },
    ],
  },

  {
    slug: "infokom",
    name: "Infokom (Informasi dan Komunikasi)",
    image: "/images/divisi/infokom.JPG",
    description: "Mengelola publikasi, dokumentasi, dan komunikasi organisasi.",

    coordinator: {
      name: "Akhmad Faridin",
      pictureUrl: "/images/pengurus/infokom-(informasi-dan-komunikasi)/akhmad-faridin.jpg",
    },

    members: [
      { name: "Ramadhan Saputra", pictureUrl: "/images/pengurus/infokom-(informasi-dan-komunikasi)/ramadhan-saputra.jpg" },
      { name: "Rifqoh Nur Nafi'ah", pictureUrl: "/images/pengurus/infokom-(informasi-dan-komunikasi)/rifqoh-nur-nafiah.jpg" },
      { name: "Mas Roro Tasya Y", pictureUrl: "/images/pengurus/infokom-(informasi-dan-komunikasi)/mas-roro-tasya-y.jpg" },
    ],
  },

  {
    slug: "humas",
    name: "Humas (Hubungan Masyarakat)",
    image: "/images/divisi/humas.JPG",
    description: "Menjalin hubungan dengan pihak internal dan eksternal.",

    coordinator: {
      name: "Aldi Ferdiansyah",
      pictureUrl: "/images/pengurus/humas-(hubungan-masyarakat)/aldi-ferdiansyah.jpg",
    },

    members: [
      { name: "Slamet Sugiarto", pictureUrl: "/images/pengurus/humas-(hubungan-masyarakat)/slamet-sugiarto.jpg" },
      { name: "M. Helmi Mustaqim", pictureUrl: "/images/pengurus/humas-(hubungan-masyarakat)/m-helmi-mustaqim.jpg" },
      { name: "Nazarul Ali Mukhtar", pictureUrl: "/images/pengurus/humas-(hubungan-masyarakat)/nazarul-ali-mukhtar.jpg" },
      { name: "Ahmad Iwan Gunawan", pictureUrl: "/images/pengurus/humas-(hubungan-masyarakat)/ahmad-iwan-gunawan.jpg" },
    ],
  },

  {
    slug: "minbak",
    name: "Minbak (Minat dan Bakat)",
    image: "/images/divisi/minbak.JPG",
    description: "Mengembangkan potensi, minat, dan bakat mahasiswa.",

    coordinator: {
      name: "M. Idi Salis",
      pictureUrl: "/images/pengurus/minbak-(minat-dan-bakat)/m-idi-salis.jpg",
    },

    members: [
      { name: "Refy Azhar Muzaki", pictureUrl: "/images/pengurus/minbak-(minat-dan-bakat)/refy-azhar-muzaki.jpg" },
      { name: "Ahmad Faiz Abidin", pictureUrl: "/images/pengurus/minbak-(minat-dan-bakat)/ahmad-faiz-abidin.jpg" },
      { name: "Naufal Hilmiya Faiq", pictureUrl: "/images/pengurus/minbak-(minat-dan-bakat)/naufal-hilmiya-faiq.jpg" },
    ],
  },
];
