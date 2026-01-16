import type { NavLink } from "@/lib/types/nav";

export const navLinks: NavLink[] = [
  { title: "Beranda", href: "/" },
  {title: "Divisi", href: "/divisi" },
  { title: "Tentang", href: "/tentang" },
  { title: "Pengurus", href: "/pengurus" },
  { title: "Program Kerja", href: "/proker" },
  { title: "Kontak", href: "/kontak" },
];

export const footerLinks: NavLink[] = [...navLinks];
