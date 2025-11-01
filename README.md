bem-ft/
├── .gitignore                      # Daftar file/folder yang diabaikan oleh Git
├── components.json                 # Konfigurasi komponen shadcn/ui
├── eslint.config.mjs              # Konfigurasi ESLint
├── next-env.d.ts                  # Type declarations dari Next.js
├── next.config.ts                 # Konfigurasi Next.js
├── package.json                   # Informasi dan dependensi npm
├── package-lock.json              # Lock file untuk versi dependensi
├── postcss.config.mjs             # Konfigurasi PostCSS (Tailwind)
├── README.md                      # Dokumentasi utama proyek
├── struktur.txt                   # Dokumentasi struktur folder proyek
├── tsconfig.json                  # Konfigurasi TypeScript
│
├── app/                           # App Router Next.js (routing dan halaman)
│   ├── favicon.ico                # Ikon website
│   ├── globals.css                # Global styles (Tailwind base, dsb.)
│   ├── layout.tsx                 # Root layout (navbar, footer, tema)
│   ├── page.tsx                   # Halaman utama (/)
│   │
│   └── (public)/                  # Route group (tidak muncul di URL)
│       ├── dosen/                 # Halaman /dosen
│       ├── kontak/                # Halaman /kontak
│       ├── pengurus/              # Halaman /pengurus
│       │  └── page.tsx           # Konten Tentang Teknik
│       └── tentang/               # Halaman /tentang
│          └── page.tsx           # Konten Tentang Teknik
│
├── components/                    # Komponen React reusable
│   ├── cards/                     # Komponen kartu informasi
│   │   ├── divisi-card.tsx
│   │   ├── dosen-card.tsx
│   │   ├── ketua-card.tsx
│   │   └── anggota-card.tsx
│   │
│   ├── layout/                    # Komponen struktur halaman
│   │   ├── container.tsx
│   │   ├── footer.tsx
│   │   ├── page-header.tsx
│   │   ├── section-title.tsx
│   │   └── navbar/
│   │       ├── desktop-nav.tsx
│   │       ├── mobile-nav.tsx
│   │       └── navbar.tsx
│   │
│   ├── sections/                  # Komponen bagian halaman
│   │   └── hero-section.tsx
│   │   └── about-section.tsx
│   │   └── divisi-section.tsx
│   │   └── contact-section.tsx
│   │
│   ├── theme/                     # Komponen tema (light/dark)
│   │   ├── theme-provider.tsx
│   │   └── theme-toggle.tsx
│   │
│   └── ui/                        # Komponen shadcn/ui
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── separator.tsx
│       ├── sheet.tsx
│       └── switch.tsx
│
├── lib/                           # Logic & konfigurasi tambahan
│   ├── constants/                 # Konstanta global
│   │   ├── info.ts
│   │   ├── nav.ts
│   │   └── social.ts
│   │
│   ├── data/                      # Data statis / mock data
│   │   ├── divisi.ts
│   │   ├── dosen.ts
│   │   ├── ketua.ts
│   │   ├── sponsor.ts
│   │
│   ├── types/                     # TypeScript type definitions
│   │   ├── divisi.ts
│   │   ├── dosen.ts
│   │   ├── index.ts
│   │   ├── info.ts
│   │   ├── ketua.ts
│   │   ├── nav.ts
│   │   ├── social.ts
│   │   └── sponsor.ts
│   │
│   └── utils/                     # Fungsi bantu
│       ├── classnames.ts         # Helper untuk CSS class merge
│       ├── slugify.ts         
│       └── formatter.ts          # Format teks/angka dll
│
├── public/                        # Static assets
│   ├── images/                    # Gambar konten
│   │   ├── dosen/                 # Foto dosen
│   │   ├── ketua/                 # Foto ketua BEM
│   │   ├── pengurus/              # Foto pengurus
│   │   └── lainnya/               # Ilustrasi, dokumentasi, dsb.
│   │
│   ├── logos/                     # Logo resmi dan logo sponsor
│   │   ├── bem-logo.png
│   │  
│   │