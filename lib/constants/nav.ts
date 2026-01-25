import type { NavLink } from "@/lib/types/nav";
import {
  Home,
  Users,
  Target,
  UserCog,
  ClipboardList,
  Phone,
} from "lucide-react";

export const navLinks: NavLink[] = [
  { title: "Beranda", href: "/", icon: Home },
  { title: "Divisi", href: "/divisi", icon: Users },
  { title: "Visi Misi", href: "/tentang", icon: Target },
  { title: "Pengurus", href: "/pengurus", icon: UserCog },
  { title: "Program Kerja", href: "/proker", icon: ClipboardList },
  { title: "Kontak", href: "/kontak", icon: Phone },
];

export const footerLinks: NavLink[] = [...navLinks];
