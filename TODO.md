# CRITTER COMPANION — MASTER TODO

> **Project:** Critter Companion _(nama sementara — ganti sesuai selera)_
> **Tagline:** _Kenali Tatari-mu, susun formasi terbaikmu._
> **Game:** Clash of Critters (Farlight Games)
> **Referensi:** [tatadex.org](https://tatadex.org/) (database/dex + team builder) & [Horde Drafter](https://jeremycanlas.github.io/clash-of-critters-horde-planner/) (drag-and-drop horde planner)
> **Stack:** React (Vite) + TailwindCSS, deploy ke GitHub Pages/Vercel/Netlify

---

# Overall Progress

```text
Progress

□□□□□□□□□□□□□□□□□□□□ 0%
```

---

# Development Flow

```text
Idea
    ↓
Planning & Riset Kompetitor
    ↓
Product Scope & Data Modeling
    ↓
Repository & Dev Environment
    ↓
Design System
    ↓
Core Development (Dex → Planner → Fitur Tambahan)
    ↓
State, Sharing & Persistence
    ↓
Testing & Accessibility
    ↓
SEO & Performance
    ↓
CI/CD & Deployment
    ↓
Production
    ↓
Maintenance & Update Data Berkala
```

---

# CATATAN SCOPE

Project ini menggabungkan dua kategori fitur utama, meniru dua referensi:

1. **Dex/Database** (seperti TataDex) — halaman referensi statis: daftar Tatari (critter), elemen, role, rarity, skill, evolusi, food, musuh/boss.
2. **Horde Planner** (seperti Horde Drafter) — papan drag-and-drop untuk menyusun formasi 15-Tatari melawan gelombang Zobo, dengan filter roster, rencana level-up, share/export/import formasi.

Karena Clash of Critters adalah game pihak ketiga (Farlight Games), project ini adalah **fan-made/unofficial**. Semua bagian legal (disclaimer, sumber data, lisensi aset) WAJIB ada sebelum production.

---

# PART 0 — PRODUCT DISCOVERY

**Status:** ⬜ Not Started

---

## 0.1 Product Identity

### Branding

- [ ] Tentukan nama produk final (bukan sekadar "Critter Companion")
- [ ] Cek ketersediaan domain (opsional, bisa pakai GitHub Pages dulu)
- [ ] Cek nama tidak melanggar trademark Farlight Games / "Clash of Critters" secara langsung
- [ ] Buat tagline resmi
- [ ] Tulis deskripsi singkat (1 kalimat)
- [ ] Tulis elevator pitch (3-4 kalimat)
- [ ] Tentukan filosofi produk (contoh: "answers first, sources attached" ala TataDex)
- [ ] Tentukan brand personality (playful, informatif, ringkas, dsb.)

---

### Visual Identity

- [ ] Desain logo (wordmark + simbol)
- [ ] Buat versi logo monokrom
- [ ] Buat versi logo horizontal
- [ ] Buat versi logo vertikal/stacked
- [ ] Buat favicon (multi-resolusi: 16x16, 32x32, 180x180 apple-touch-icon)
- [ ] Buat app icon / social share image (1200x630 og-image)
- [ ] Buat versi logo transparan
- [ ] Buat versi logo dark mode
- [ ] Buat versi logo light mode

---

### Branding Assets

- [ ] Panduan warna (palette per elemen: Fire, Water, Grass, Electric, dll.)
- [ ] Panduan tipografi
- [ ] Panduan ikon (role, rarity star, elemen)
- [ ] Panduan ilustrasi/artwork placeholder (karena aset resmi milik Farlight)
- [ ] Template screenshot untuk promosi

---

## 0.2 Product Vision

- [ ] Vision Statement
- [ ] Mission Statement
- [ ] Core Values (akurat, cepat, gratis, tanpa iklan mengganggu, dsb.)
- [ ] Success Metrics (jumlah Tatari terdata, jumlah kunjungan, formasi tersimpan)
- [ ] Problem Statement — pemain kesulitan cek data Tatari & menyusun formasi Horde Invasion
- [ ] Solution Statement — satu web ringan yang gabungkan dex + planner
- [ ] Product Positioning dibanding TataDex & Horde Drafter (lebih ringan? lebih fokus? device-first?)
- [ ] Competitive Advantage
- [ ] Product Elevator Pitch final

---

## 0.3 Market & Competitor Research

### Competitor Analysis

- [ ] TataDex (tatadex.org) — database lengkap + team builder + tier list + card album + akun
- [ ] Horde Drafter (jeremycanlas.github.io) — drag-and-drop grid, filter roster, level-up plan, share PNG, live co-op
- [ ] clashofcritters.wiki.gg — wiki komunitas, sumber data mentah
- [ ] Situs/tools fan-made lain (cek Discord & Reddit komunitas Clash of Critters)
- [ ] Website resmi (cc.farlightgames.com) — cek data resmi apa saja yang tersedia

---

### Competitor Comparison

- [ ] Feature comparison matrix (dex, planner, tier list, team builder, akun, sharing, mobile-first?)
- [ ] UI/UX comparison
- [ ] Kecepatan & ukuran bundle comparison
- [ ] Monetisasi comparison (iklan? donasi/Ko-fi?)
- [ ] Strength & weakness masing-masing kompetitor
- [ ] Opportunity: fitur apa yang belum ada di kompetitor (mis. mode offline PWA, kalkulator damage, dsb.)

---

## 0.4 User Research

- [ ] User Persona: "Pemain baru" (butuh referensi Tatari cepat)
- [ ] User Persona: "Pemain hardcore Horde Invasion" (butuh planner detail + level-up plan)
- [ ] Jobs To Be Done (mis. "saat aku dapat Tatari baru, aku mau tahu elemen & role-nya dalam <10 detik")
- [ ] User Journey: dari buka web → cari Tatari → cek build → susun formasi → share
- [ ] Pain Points terhadap kompetitor (terlalu ramai iklan, terlalu banyak fitur, wajib login, dsb.)
- [ ] User Expectations (harus mobile-friendly, cepat, data akurat & up to date)
- [ ] Strategi feedback pengguna (form/Discord/GitHub Issues)

---

## 0.5 Product Scope

- [ ] Definisikan scope MVP (lihat 0.6)
- [ ] Product Roadmap (v0.1 → v1.0 → post-launch)
- [ ] Glosarium istilah game (Tatari, Zobo, Horde Invasion, Badge Dojo, Star Gate, dsb.)
- [ ] Batasan/constraints (tanpa backend dulu? tanpa akun dulu? data manual vs scraping?)
- [ ] Asumsi (data game relatif stabil per rilis, balance update berkala)
- [ ] Risiko (perubahan game oleh Farlight, takedown/DMCA, data tidak akurat, maintenance jangka panjang)
- [ ] Non-functional goals (performa, aksesibilitas, SEO, mobile-first)

---

## 0.6 Product Requirements

### Fitur MVP (v0.1 — v0.3)

- [ ] Daftar & detail Tatari (nama, elemen, role, rarity, skill dasar)
- [ ] Filter & pencarian Tatari (nama, elemen, role, rarity)
- [ ] Halaman Horde Planner dasar: grid statis, drag Tatari dari roster ke grid
- [ ] Simpan formasi ke localStorage
- [ ] Layout responsif mobile & desktop

### Fitur v0.4 — v0.7

- [ ] Data evolusi/route (form paths)
- [ ] Data food & efeknya
- [ ] Data musuh biasa (Zobo) & boss
- [ ] Export/import formasi (JSON / kode share / gambar)
- [ ] Rencana level-up (priority list) di Horde Planner
- [ ] Dark mode / theme switcher

### Fitur v0.8 — v1.0 (opsional, tergantung kapasitas)

- [ ] Tier list statis (bukan buatan komunitas dulu)
- [ ] Team builder untuk mode lain (campaign, boss, dojo)
- [ ] Share formasi sebagai gambar (PNG export)
- [ ] Mode "sandbox" murni grid tanpa data (seperti Horde Drafter)
- [ ] PWA / offline support

### Di luar scope v1.0 (didefinisikan eksplisit supaya tidak scope creep)

- [ ] Sistem akun & login (Discord OAuth, dsb.) — Deferred
- [ ] Live co-op editing real-time — Deferred
- [ ] Card album / trading — Deferred
- [ ] Komunitas tier list / voting — Deferred
- [ ] Redeem codes hub — Deferred

- [ ] Prioritaskan fitur (MoSCoW / RICE) berdasarkan daftar di atas
- [ ] Tentukan standar acceptance criteria per fitur
- [ ] Tentukan struktur epic & user story (mis. GitHub Issues + label)

---

## 0.7 Data Sourcing & Legal

- [ ] Tentukan sumber data resmi/komunitas (clashofcritters.wiki.gg, observasi in-game, komunitas Discord)
- [ ] Catat metode pengambilan data (manual entry vs scraping — perhatikan ToS sumber)
- [ ] Buat format pencatatan sumber & tanggal verifikasi data (seperti "confidence label" TataDex)
- [ ] Siapkan disclaimer "unofficial fan project, aset milik Farlight Games"
- [ ] Siapkan halaman Sources / Licensing / Credits
- [ ] Siapkan halaman Privacy Policy (walau tanpa akun, jelaskan analytics/local storage)
- [ ] Siapkan halaman Terms (batasan tanggung jawab data)
- [ ] Rencana proses jika ada permintaan takedown dari Farlight Games

---

## 0.8 Documentation

### Repository

- [ ] README.md
- [ ] CONTRIBUTING.md
- [ ] ROADMAP.md
- [ ] CHANGELOG.md
- [ ] LICENSE (kode) — data game tetap disclaim terpisah

---

### Product

- [ ] docs/product/vision.md
- [ ] docs/product/personas.md
- [ ] docs/product/glossary.md
- [ ] docs/product/scope.md
- [ ] docs/product/roadmap.md

---

### Architecture

- [ ] docs/architecture/frontend.md
- [ ] docs/architecture/data-model.md
- [ ] docs/architecture/deployment.md

---

### ADR (Architecture Decision Records)

- [ ] ADR-001 Pilihan React + Vite (bukan Next.js) — alasan: static site, tanpa SSR wajib
- [ ] ADR-002 Pilihan TailwindCSS untuk styling
- [ ] ADR-003 State management (Context API vs Zustand vs Redux)
- [ ] ADR-004 Format & lokasi data game (JSON lokal vs headless CMS)
- [ ] ADR-005 Strategi persistence formasi (localStorage vs URL-encoded state)
- [ ] ADR-006 Strategi drag-and-drop (native HTML5 DnD vs dnd-kit/react-dnd)
- [ ] ADR-007 Strategi routing (react-router vs file-based)
- [ ] ADR-008 Strategi hosting (GitHub Pages vs Vercel vs Netlify)
- [ ] ADR-009 Strategi image/asset (self-host placeholder vs external CDN)
- [ ] ADR-010 Strategi testing (Vitest + React Testing Library)
- [ ] ADR-011 Strategi CI/CD (GitHub Actions)
- [ ] ADR-012 Strategi update data berkala (manual PR vs script scraping)
- [ ] ADR-013 Strategi analytics privasi-friendly (Plausible/Umami vs tanpa analytics)

---

## 0.9 Repository Planning

- [ ] Visibility repo (public/private)
- [ ] Default branch (`main`)
- [ ] Branch strategy (lihat Part 1)
- [ ] GitHub Labels
- [ ] Milestones
- [ ] Issue Templates
- [ ] Pull Request Template
- [ ] CODEOWNERS
- [ ] Security Policy

---

## Definition of Ready (sebelum Sprint 0)

- [ ] Product Vision & Scope disetujui (walau solo, tulis eksplisit)
- [ ] Data model awal (skema Tatari, Skill, Enemy) disepakati
- [ ] Tech stack & ADR utama diputuskan
- [ ] Repo & dokumentasi dasar siap

---

# PART 1 — REPOSITORY FOUNDATION

**Status:** ⬜ Not Started

---

## 1.1 Repository Creation

- [x] Buat repo GitHub baru
- [ ] Isi deskripsi repo
- [ ] Tambahkan topics (react, tailwindcss, clash-of-critters, game-tool, dsb.)
- [ ] Upload logo project sebagai social preview image
- [ ] Set homepage URL (isi setelah deploy)

---

## 1.2 Git Configuration

- [x] `git init` / clone repo
- [x] Konfigurasi `user.name` & `user.email`
- [x] Konfigurasi default branch `main`
- [x] Buat `.gitignore` (node_modules, dist, .env, coverage, .DS_Store, .vscode/ opsional)
- [x] Buat `.gitattributes` (line endings, agar konsisten lintas OS)

---

## 1.3 Branch Strategy

### Main Branches

- [x] `main` (production-ready, auto-deploy)
- [x] `develop` (opsional, jika ingin staging preview)

### Working Branches

- [ ] `feature/*`
- [ ] `fix/*`
- [ ] `data/*` (khusus update data Tatari/skill/enemy — dipisah karena akan sering)
- [ ] `chore/*`
- [ ] `docs/*`

### Branch Protection

- [ ] Protect `main`
- [ ] Require PR sebelum merge ke `main`
- [ ] Require status check lulus (CI) — aktifkan setelah Part 3 CI dibuat
- [ ] Larang force push & delete branch `main`

---

## 1.4 GitHub Community Files

- [ ] CODE_OF_CONDUCT.md
- [ ] SECURITY.md
- [ ] SUPPORT.md
- [ ] CODEOWNERS

---

## 1.5 Issue Templates

- [ ] Bug Report (langkah reproduksi, environment, expected vs actual)
- [ ] Feature Request
- [ ] Data Correction (khusus laporan data Tatari/skill yang salah — penting untuk project dex!)
- [ ] Question

---

## 1.6 Pull Request Template

- [ ] Ringkasan perubahan
- [ ] Screenshot (untuk perubahan UI)
- [ ] Checklist testing
- [ ] Related issue

---

## 1.7 GitHub Labels

### Type

- [ ] feature / bug / docs / refactor / test / chore / data

### Priority

- [ ] P0 / P1 / P2 / P3

### Area

- [ ] Dex / Planner / Design System / Infrastructure / SEO

---

## 1.8 GitHub Milestones

- [ ] v0.1 — Setup & Design System
- [ ] v0.2 — Dex MVP (list + detail Tatari)
- [ ] v0.3 — Horde Planner MVP (grid + drag-drop)
- [ ] v0.4 — Data lengkap (evolusi, food, enemy, boss)
- [ ] v0.5 — Sharing & persistence formasi
- [ ] v0.6 — Tier list & fitur tambahan
- [ ] v0.7 — Testing, a11y, performance pass
- [ ] v1.0 — Production Release

---

## Definition of Done

- [ ] Semua dokumentasi dasar tersedia
- [ ] Struktur repo siap dipakai
- [ ] Siap mulai Part 2

---

# PART 2 — DEVELOPMENT ENVIRONMENT

**Status:** ⬜ Not Started

---

## 2.1 Tooling

- [ ] Install Node.js versi LTS (catat versi di `.nvmrc`) — `.nvmrc` belum ada
- [x] Inisialisasi project dengan Vite + React
- [x] Putuskan JavaScript vs TypeScript
- [x] Install dan konfigurasi Tailwind CSS v4 dengan Vite
- [x] Konfigurasi styling dasar dan Tailwind CSS
- [x] Install dan konfigurasi Oxlint
- [x] Install dan konfigurasi Prettier
- [x] Setup Husky + lint-staged untuk pre-commit hook
- [x] Setup EditorConfig
- [x] Setup VS Code workspace settings dan extensions
- [x] Setup Vitest untuk unit testing
- [x] Setup environment configuration
- [x] Setup application routing dan layout structure

---

## 2.2 Project Structure

- [x] Tentukan struktur folder, mis:
    ```text
    src/
      assets/
      components/
        ui/
        dex/
        planner/
      data/          # JSON data Tatari, skill, enemy, food
      features/
        dex/
        planner/
        tierlist/
      hooks/
      layouts/
      pages/ (atau routes/)
      lib/ (utils, helpers)
      store/ (state management)
      types/ (TypeScript types)
    ```
- [ ] Dokumentasikan struktur ini di `docs/architecture/frontend.md`

---

## 2.3 Routing & Base Setup

- [x] Install `react-router-dom`
- [x] Setup routing dasar dengan `AppRouter` dan `route-config.jsx`
- [x] Setup `AppLayout` sebagai layout utama
- [ ] Setup route halaman:
  - [x] Home
  - [x] Dex (list; placeholder page)
  - [x] Dex Detail (dynamic ID route; placeholder page)
  - [x] Planner (placeholder page)
  - [x] Tier List (opsional; placeholder page)
  - [x] About/Sources (placeholder pages)
- [ ] Setup layout UI:
  - [x] Navbar
  - [x] Footer
  - [x] Container
- [x] Setup 404 page

---

## 2.4 Environment & Config

- [x] Buat `.env.example`
- [x] Konfigurasi base path Vite (`base:` jika deploy ke subpath GitHub Pages)
- [x] Setup alias import (`@app`, `@features`, `@shared`, `@data`, dsb.) di `vite.config.js`

---

## Definition of Done

- [x] `npm run dev` jalan tanpa error
- [x] Tailwind styling berfungsi (terlihat pada layout dan halaman)
- [x] Routing dasar berfungsi antar halaman placeholder

---

# PART 3 — DESIGN SYSTEM

**Status:** ⬜ Not Started

---

## 3.1 Design Tokens

- [x] Palet warna dasar (background, surface, text, border) — light & dark mode
- [x] Palet warna per elemen game (Fire, Water, Grass, Electric, dsb.) — dipakai untuk badge/tag Tatari
- [x] Skala tipografi (heading, body, caption)
- [x] Skala spacing & radius (konsisten dengan Tailwind default atau custom)
- [x] Skala shadow/elevation
- [x] Breakpoints responsif (mobile-first: sm/md/lg/xl)

---

## 3.2 Komponen UI Dasar (`components/ui`)

- [ ] Button (primary/secondary/ghost) — ada Button dasar, varian belum dibuat
- [ ] Badge/Tag (elemen, role, rarity star)
- [ ] Card
- [ ] Modal/Dialog
- [ ] Tooltip
- [ ] Tabs
- [ ] Input & Search bar
- [ ] Select/Dropdown & Multi-select filter
- [ ] Skeleton loader
- [ ] Toast/notification
- [ ] Pagination / Infinite scroll trigger

---

## 3.3 Komponen Layout

- [ ] Navbar (menu yang ada belum mengarah ke fitur aktif dan tampilan mobile menyembunyikan navigasi tanpa hamburger)
- [ ] Footer (disclaimer dan tautan Sources/License sudah ada; social links resmi belum ditambahkan)
- [ ] Sidebar filter (untuk Dex & Roster planner)
- [x] Theme toggle (light/dark; state tersimpan melalui Zustand persist)

---

## 3.4 Dokumentasi Komponen

- [ ] Buat halaman/Storybook internal (opsional) atau cukup dokumentasi markdown per komponen
- [ ] Screenshot tiap komponen untuk referensi konsistensi

---

## Definition of Done

- [ ] Semua komponen dasar dibuat & bisa dipakai ulang
- [ ] Tema light/dark berfungsi
- [ ] Tampilan konsisten di mobile & desktop (uji manual di beberapa lebar layar)

---

# PART 4 — DATA MODELING

**Status:** ⬜ Not Started

---

## 4.1 Skema Data

- [ ] Skema `Tatari` (id, nama, elemen, role, rarity, form/stage, stats dasar, skill, gambar/placeholder, sumber+tanggal verifikasi)
- [ ] Skema `Skill` (nama, deskripsi, damage/efek, parameter per level)
- [ ] Skema `EvolutionLine` / route (form sebelumnya, form berikutnya, syarat: star gate, duplikat, food)
- [ ] Skema `Food` (nama, kategori, fullness value, gambar)
- [ ] Skema `Enemy` (Zobo biasa: elemen, skill, perilaku)
- [ ] Skema `Boss` (mekanik, pola gerak, summon, pressure point)
- [ ] Skema `Formation` (grid 15 slot, id Tatari per slot, flex slot, level-up plan, metadata nama/catatan)
- [ ] Tulis semua skema ini di TypeScript types (`src/types/`)

---

## 4.2 Sumber Data & Validasi

- [ ] Kumpulkan data awal Tatari (mulai dari subset kecil untuk MVP, lalu perluas)
- [ ] Kumpulkan data elemen & role yang valid (enum)
- [ ] Kumpulkan data food
- [ ] Kumpulkan data enemy/boss (bisa menyusul setelah MVP dex+planner jalan)
- [ ] Validasi skema data dengan schema validator (mis. Zod) agar data JSON tidak salah struktur
- [ ] Tambahkan field `verifiedAt` & `source` di tiap entri untuk transparansi (seperti TataDex confidence label)

---

## 4.3 Penyimpanan Data

- [ ] Putuskan format file data (satu file besar `tataris.json` vs per-Tatari file)
- [ ] Buat folder `src/data/` dengan struktur jelas
- [ ] Buat util loader/parser data (dengan validasi Zod saat build/dev)
- [ ] (Opsional lanjutan) Buat script scraping/sinkronisasi dari sumber komunitas — hati-hati ToS

---

## Definition of Done

- [ ] Skema data final & terdokumentasi
- [ ] Minimal data untuk 15-30 Tatari (cukup untuk demo Planner 15-slot) sudah tersedia
- [ ] Data tervalidasi otomatis (tidak ada field wajib yang kosong)

---

# PART 5 — CORE DEVELOPMENT: DEX (DATABASE)

**Status:** ⬜ Not Started

---

## 5.1 Halaman Daftar Tatari

- [ ] Grid/list card Tatari (gambar/placeholder, nama, elemen, role, rarity)
- [ ] Search bar (filter by nama)
- [ ] Filter by elemen (multi-select)
- [ ] Filter by role
- [ ] Filter by rarity/star
- [ ] Filter by form stage
- [ ] Sort (nama A-Z, rarity, elemen)
- [ ] Pagination atau infinite scroll
- [ ] Empty state (tidak ada hasil filter)
- [ ] Loading skeleton

---

## 5.2 Halaman Detail Tatari

- [ ] Info dasar (nama, elemen, role, rarity, form stage)
- [ ] Tabel skill & parameter per level
- [ ] Related forms (evolusi sebelum/sesudah, link ke halaman masing-masing)
- [ ] Catatan role/strategi singkat
- [ ] Sumber data & tanggal verifikasi ditampilkan (transparansi)
- [ ] Tombol "tambah ke roster Planner" (integrasi ke Part 6)

---

## 5.3 Halaman Evolusi / Form Routes

- [ ] Visualisasi rantai evolusi (linear/branching)
- [ ] Info syarat tiap tahap (star gate, duplikat, food)

---

## 5.4 Halaman Food

- [ ] Grid food dengan gambar, kategori, fullness value
- [ ] Filter by kategori

---

## 5.5 Halaman Enemy & Boss

- [ ] Daftar Zobo biasa (elemen, skill, perilaku)
- [ ] Daftar boss (mekanik, pola gerak, summon)
- [ ] Filter by elemen

---

## 5.6 Search Global

- [ ] Search bar global di navbar (cari lintas Tatari/food/enemy)
- [ ] Hasil pencarian dengan preview gambar & tipe konten

---

## Definition of Done

- [ ] User bisa cari & filter Tatari dengan lancar
- [ ] Halaman detail menampilkan semua data penting
- [ ] Semua halaman dex responsif mobile & desktop

---

# PART 6 — CORE DEVELOPMENT: HORDE PLANNER

**Status:** ⬜ Not Started

---

## 6.1 Grid Formasi

- [ ] Render grid formasi (sesuai tata letak Horde Invasion, mis. beberapa baris x kolom, Zobo maju dari atas)
- [ ] Tandai "garis spawn Zobo" & "base pemain" secara visual
- [ ] Highlight slot kosong vs terisi
- [ ] Mode "flex slot" (slot fleksibel yang bisa ditandai user)

---

## 6.2 Roster & Drag-and-Drop

- [ ] Panel roster (daftar Tatari yang dimiliki/dipilih user)
- [ ] Drag dari roster ke grid (pakai `dnd-kit` atau `react-dnd` — lihat ADR-006)
- [ ] Drag antar sel grid untuk reposisi
- [ ] Klik ganda / tombol hapus untuk melepas Tatari dari grid
- [ ] Dukungan touch/mobile (drag via tap: pilih lalu tap tujuan, sesuai pola Horde Drafter)
- [ ] Filter roster (by elemen, role, rarity) — reuse komponen filter dari Part 5
- [ ] Sort roster
- [ ] Sembunyikan Tatari yang belum dimiliki user (opsional, butuh input "koleksi saya")

---

## 6.3 Level-Up Priority Plan

- [ ] UI untuk menyusun urutan prioritas level-up Tatari di formasi
- [ ] Drag reorder daftar prioritas
- [ ] Simpan sebagai bagian dari data formasi

---

## 6.4 Ringkasan Formasi

- [ ] Ringkasan elemen/role yang terpakai (coverage check — mis. peringatan jika tidak ada tank)
- [ ] Ringkasan jumlah slot terisi/kosong

---

## 6.5 Mode Tambahan

- [ ] Mode "Solo" vs "Co-op" (jika layout grid berbeda)
- [ ] Mode "Sandbox" (grid kosong tanpa data, murni untuk eksperimen)
- [ ] Toggle "Advanced" (menampilkan info tambahan seperti range/reach jika tersedia datanya)

---

## Definition of Done

- [ ] User bisa menyusun formasi 15-Tatari dari roster ke grid dengan drag-and-drop (desktop) dan tap (mobile)
- [ ] Level-up plan bisa disusun dan berpindah bersama formasi
- [ ] Semua interaksi utama teruji di layar sentuh & mouse

---

# PART 7 — STATE, PERSISTENCE & SHARING

**Status:** ⬜ Not Started

---

## 7.1 State Management

- [ ] Implementasi state management pilihan (Context API/Zustand — lihat ADR-003)
- [ ] State untuk filter Dex
- [ ] State untuk formasi Planner (grid, roster terpilih, level-up plan)
- [ ] State untuk theme (light/dark)

---

## 7.2 Persistence Lokal

- [ ] Simpan formasi ke `localStorage` (auto-save atau manual "Save")
- [ ] Daftar formasi tersimpan (multiple slot/save)
- [ ] Fitur "Clear all" dengan konfirmasi
- [ ] Migrasi/versioning skema data localStorage (agar update aplikasi tidak merusak data lama)

---

## 7.3 Export / Import / Share

- [ ] Export formasi ke JSON (download file)
- [ ] Import formasi dari file JSON
- [ ] Share formasi lewat URL ter-encode (state di query param, tanpa perlu backend)
- [ ] (Lanjutan opsional) Export formasi sebagai gambar PNG (canvas rendering, mode "Grid only" vs "Everything")
- [ ] Copy link share ke clipboard

---

## Definition of Done

- [ ] Formasi tidak hilang saat refresh/reload browser
- [ ] Formasi bisa dibagikan ke orang lain lewat link tanpa backend
- [ ] Import/export JSON berfungsi dua arah tanpa korupsi data

---

# PART 8 — FITUR TAMBAHAN (OPSIONAL, POST-MVP)

**Status:** ⬜ Not Started

---

## 8.1 Tier List Statis

- [ ] Halaman tier list per mode (campaign, Horde, boss)
- [ ] Data tier dikelola manual (bukan voting komunitas dulu)

---

## 8.2 Team Builder Mode Lain

- [ ] Builder untuk campaign/dojo/boss (di luar grid Horde 15-slot)

---

## 8.3 PWA / Offline

- [ ] Manifest.json
- [ ] Service worker (cache data statis untuk akses offline)
- [ ] Test "Add to Home Screen" di mobile

---

## Definition of Done

- [ ] Fitur tambahan tidak mengganggu stabilitas fitur inti (Dex & Planner)

---

# PART 9 — TESTING

**Status:** ⬜ Not Started

---

## 9.1 Unit Testing

- [ ] Setup Vitest + React Testing Library
- [ ] Test util/helper (filter, sort, validasi data)
- [ ] Test komponen UI dasar (Button, Badge, Input, dsb.)
- [ ] Test logic drag-and-drop (state grid setelah drop)
- [ ] Test persistence (mock localStorage)

---

## 9.2 Integration Testing

- [ ] Test alur filter → hasil Dex berubah sesuai
- [ ] Test alur drag Tatari ke grid → state formasi terupdate
- [ ] Test alur save → reload → formasi tetap ada

---

## 9.3 End-to-End Testing (opsional)

- [ ] Setup Playwright/Cypress
- [ ] E2E: buka Dex, cari Tatari, buka detail
- [ ] E2E: buka Planner, susun formasi, share link, buka link baru dan cek formasi sama

---

## 9.4 Manual QA

- [ ] Test di Chrome, Firefox, Safari
- [ ] Test di Android & iOS (drag via touch)
- [ ] Test berbagai ukuran layar (mobile kecil, tablet, desktop lebar)
- [ ] Test dark mode di semua halaman

---

## Definition of Done

- [ ] Coverage unit test untuk logic inti (filter, drag-drop, persistence) memadai
- [ ] Tidak ada bug kritis di alur utama (Dex & Planner)

---

# PART 10 — ACCESSIBILITY & PERFORMANCE

**Status:** ⬜ Not Started

---

## 10.1 Accessibility (a11y)

- [ ] Kontras warna sesuai WCAG AA (terutama badge elemen)
- [ ] Navigasi keyboard (tab order, focus visible)
- [ ] Alt text untuk semua gambar Tatari/food/enemy
- [ ] ARIA label untuk drag-and-drop (fallback non-drag untuk pengguna keyboard/screen reader jika memungkinkan)
- [ ] Test dengan screen reader dasar (VoiceOver/NVDA)
- [ ] Audit dengan axe DevTools / Lighthouse Accessibility

---

## 10.2 Performance

- [ ] Lazy load gambar (native `loading="lazy"` atau lib)
- [ ] Code splitting per route (`React.lazy`)
- [ ] Optimasi ukuran data JSON (hindari load semua data sekaligus jika besar)
- [ ] Optimasi bundle size (cek dengan `vite-bundle-visualizer`)
- [ ] Cache asset statis (cache headers / immutable hashing dari Vite build)
- [ ] Jalankan Lighthouse (target skor Performance/Best Practices/SEO/A11y ≥ 90)

---

## Definition of Done

- [ ] Skor Lighthouse memenuhi target di halaman utama, Dex, dan Planner
- [ ] Tidak ada isu aksesibilitas kritis (dari axe audit)

---

# PART 11 — SEO & METADATA

**Status:** ⬜ Not Started

---

## 11.1 On-page SEO

- [ ] Title & meta description tiap halaman (khususnya halaman detail Tatari — penting untuk traffic pencarian)
- [ ] Open Graph & Twitter Card tags
- [ ] `sitemap.xml` (generate otomatis saat build, mencakup semua halaman detail Tatari)
- [ ] `robots.txt`
- [ ] URL slug rapi per Tatari/food/enemy (`/tatari/nama-tatari`)
- [ ] Structured data (JSON-LD) untuk halaman Tatari jika relevan

---

## 11.2 Social & Sharing

- [ ] Social preview image default & per-Tatari (opsional, generate dinamis)
- [ ] Verifikasi tampilan link preview di Discord/Twitter (tempat komunitas game biasa share link)

---

## Definition of Done

- [ ] Semua halaman utama punya metadata lengkap
- [ ] Sitemap & robots.txt tervalidasi

---

# PART 12 — CI/CD

**Status:** ⬜ Not Started

---

## 12.1 Continuous Integration

- [ ] GitHub Actions: workflow lint (ESLint + Prettier check) di setiap PR
- [ ] GitHub Actions: workflow test (Vitest) di setiap PR
- [ ] GitHub Actions: workflow build check (`npm run build` harus sukses) di setiap PR
- [ ] Aktifkan required status checks di branch protection `main`

---

## 12.2 Continuous Deployment

- [ ] Pilih target hosting final (GitHub Pages / Vercel / Netlify — lihat ADR-008)
- [ ] Setup workflow deploy otomatis saat merge ke `main`
- [ ] Setup preview deployment untuk tiap PR (jika pakai Vercel/Netlify)
- [ ] Setup environment variable/secrets di CI (jika ada, mis. analytics ID)

---

## Definition of Done

- [ ] Setiap PR otomatis di-lint & di-test
- [ ] Merge ke `main` otomatis deploy tanpa langkah manual

---

# PART 13 — DEPLOYMENT & PRODUCTION LAUNCH

**Status:** ⬜ Not Started

---

## 13.1 Pre-Launch Checklist

- [ ] Review semua data Tatari/food/enemy untuk akurasi sebelum launch
- [ ] Review copywriting & disclaimer unofficial fan project
- [ ] Review halaman Sources/License/Privacy/Terms sudah lengkap
- [ ] Set homepage URL final di repo & meta tags
- [ ] Verifikasi build production (`npm run build` + `npm run preview`) tanpa error/warning kritis

---

## 13.2 Domain & Hosting

- [ ] Konfigurasi custom domain (jika ada) atau gunakan subdomain hosting gratis
- [ ] Verifikasi HTTPS/SSL aktif
- [ ] Verifikasi caching & CDN (jika pakai Vercel/Netlify, biasanya otomatis)

---

## 13.3 Deployment

- [ ] Deploy build production
- [ ] Verifikasi semua asset (gambar, font) termuat dengan benar di production
- [ ] Verifikasi routing (refresh di halaman detail tidak 404 — perhatikan konfigurasi SPA fallback)

---

## 13.4 Smoke Test Production

- [ ] Buka Dex, cari Tatari, buka detail — pastikan data tampil
- [ ] Buka Planner, drag Tatari ke grid, save, reload — pastikan formasi tetap ada
- [ ] Share link formasi, buka di tab/browser lain — pastikan formasi termuat
- [ ] Test dark/light mode toggle
- [ ] Test di device mobile asli (bukan hanya emulator)

---

## 13.5 Post-Launch Verification

- [ ] Verifikasi URL production dari beberapa jaringan/lokasi
- [ ] Jalankan Lighthouse sekali lagi di production (bukan localhost)
- [ ] Cek Search Console (submit sitemap) jika targetkan SEO
- [ ] Umumkan launch (Discord komunitas Clash of Critters, Reddit, dsb. — sesuai etika komunitas)

---

## Definition of Done

- [ ] Website live di URL production, HTTPS aktif
- [ ] Semua smoke test lolos
- [ ] Tidak ada error kritis di console production

---

# PART 14 — MONITORING & MAINTENANCE

**Status:** ⬜ Not Started

---

## 14.1 Monitoring

- [ ] Setup analytics privasi-friendly (Plausible/Umami) — opsional, jujur ke user soal tracking
- [ ] Setup error tracking dasar (mis. Sentry, opsional untuk static site)
- [ ] Pantau uptime hosting (biasanya otomatis dari provider)

---

## 14.2 Update Data Berkala

- [ ] Buat proses rutin update data setiap kali ada balance patch/rilis Tatari baru dari Farlight
- [ ] Update CHANGELOG data (mirip "Update history" TataDex: buff/nerf/adjusted per Tatari)
- [ ] Review laporan "Data Correction" dari issue template

---

## 14.3 Dependency & Security Maintenance

- [ ] Cek dependency outdated berkala (`npm outdated`)
- [ ] Update dependency & jalankan regression test
- [ ] Audit keamanan dependency (`npm audit`)

---

## 14.4 Continuous Improvement

- [ ] Kumpulkan feedback pengguna (GitHub Issues/Discord)
- [ ] Review roadmap tiap rilis musim baru game
- [ ] Refactor komponen yang mulai duplikatif
- [ ] Review performa & aksesibilitas ulang setiap beberapa bulan

---

## Definition of Done (ongoing)

- [ ] Data selalu sinkron dengan versi game terbaru
- [ ] Tidak ada dependency dengan kerentanan kritis
- [ ] Feedback pengguna ditindaklanjuti secara berkala

---

# 🎉 PROJECT COMPLETION CHECKLIST (v1.0)

## Product

- [ ] Vision & scope selesai didokumentasikan
- [ ] Data Tatari inti (minimal semua Tatari yang tersedia di game saat launch) terdata

## Engineering

- [ ] Design system selesai
- [ ] Struktur data & tipe TypeScript solid
- [ ] CI/CD berjalan otomatis

## Fitur Inti

- [ ] Dex (list + detail + filter + search)
- [ ] Horde Planner (grid + drag-drop + roster + level-up plan)
- [ ] Persistence & sharing formasi

## Kualitas

- [ ] Testing inti lolos
- [ ] Aksesibilitas & performa memenuhi target
- [ ] SEO dasar terpasang

## Rilis

- [ ] Production deployed dengan domain/HTTPS aktif
- [ ] Disclaimer & halaman legal lengkap
- [ ] Monitoring & proses update data berjalan

---

```text
□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□

          PROJECT NOT STARTED

□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□
```

Project ini siap disebut production-ready ketika semua kriteria di checklist final
di atas terverifikasi.

**Kenali Tatari-mu, susun formasi terbaikmu.**
