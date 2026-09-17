# Panduan & Standar Keputusan Proyek — Presentasi Interaktif Logaritma (UH 2)

Dokumen ini mencatat seluruh keputusan arsitektur, standar UI/UX, konvensi KaTeX, dan pedoman pedagogis yang disepakati bersama sebagai acuan baku pengembangan setiap soal.

---

## 1. Visi & Konteks Proyek

- **Tujuan**: Aplikasi web Single Page Application (SPA) presentasi interaktif pembahasan soal Ulangan Harian 2 (UH 2 / P7) materi Logaritma Matematika Kelas X SMA.
- **Karakteristik Penggunaan Utama**:
  - Didesain khusus untuk **proyeksi langsung ke papan tulis (whiteboard) ruang kelas**.
  - Guru mengajar di depan kelas sambil menulis/mencoret-coret langsung dengan spidol di atas proyeksi papan tulis.
  - Setiap animasi, letak rumus, dan alur langkah harus **tenang, stabil, dan bebas pergeseran piksel (*zero-drift*)**, sehingga coretan spidol fisik guru tetap pas dan tidak meleset saat langkah berikutnya dimunculkan.

---

## 2. Arsitektur Layout & Tampilan Layar (3-Column Layout)

Layar dibagi menjadi 3 kolom fleksibel dengan prioritas area tengah yang maksimal:

### A. Kolom Kiri (Left Rail — Lebar `w-44` s.d. `w-48`)
- **Brand Header**: Logo ringkas `LOG` dan badge `UH2`.
- **Set Switcher**: Tombol **Set A** (Mandiri) dan **Set B** (Cermin) yang ditumpuk secara vertikal (bukan horizontal) untuk menghemat ruang lebar.
- **Daftar Nomor Soal**: 1 kolom memanjang ke bawah (`1. Soal 1` s.d. `10. Soal 10`) dengan indikator status titik hijau (soal sudah selesai dibuat) atau abu-abu (soal belum dibuat).
- **Tanpa Tombol Prev/Next Fisik**: Tombol panah bawah/atas ditiadakan demi ruang yang bersih; navigasi antarsoal sepenuhnya menggunakan keyboard (`↑` / `↓`).

### B. Panggung Tengah (Center Stage — Area Utama Papan Tulis)
- **Kanvas Luas**: Ruang bebas maksimal untuk proyeksi whiteboard.
- **Header Soal Minimalis**: Menampilkan badge `Set A • SIMULASI MANDIRI • SOAL X DARI 10` dan teks pengantar (misal: *“Tentukan nilai dari:”*).
- **Tipografi KaTeX Ekstra Besar**: Ukuran font matematis besar (`2.1rem` pada mobile hingga `3.15rem` pada proyektor/desktop) agar terbaca jelas oleh siswa dari baris belakang kelas.
- **Zero-Drift In-Place Reveal**:
  - Semua baris rumus (Langkah 0 sampai Langkah N) di-render di awal ke dalam CSS Grid dengan geometri tetap.
  - Langkah-langkah yang belum aktif diberi class `invisible opacity-0 pointer-events-none` (bukan `display: none`).
  - Efek: Posisi soal awal (LHS) dan seluruh tanda sama dengan (`=`) **terkunci mati pada koordinat piksel yang sama**, tidak bergeser sedikit pun saat langkah baru dimunculkan.

### C. Kolom Kanan (Right Rail — Strip Vertikal Super Ringkas `w-20` s.d. `w-24`)
- **Tombol Reset (`↻ Reset`)** di posisi paling atas: Mengembalikan langkah ke Soal Awal (Langkah 0) dengan 1 klik atau tombol `R`.
- **Track Indikator Langkah Vertikal**: Titik-titik langkah vertikal minimalis yang berubah warna menjadi cyan menyala/hijau seiring langkah yang sedang aktif.
- **Tombol Utilitas di Bawah**:
  - Ganti Mode Gelap/Terang (`T`)
  - Panduan Shortcut Keyboard (`?`)
  - Mode Layar Penuh (`F`)
- **Tanpa Tombol “Langkah Berikutnya / Mundur” yang Tebal**: Dihapus untuk memaksimalkan kanvas papan tulis; guru cukup menekan tombol `Space` atau `Panah Kanan (→)` pada presenter/keyboard.

---

## 3. Navigasi Keyboard Penuh (Presenter Remote Friendly)

| Tombol Keyboard | Aksi |
| :--- | :--- |
| **`Space`** atau **`→`** | Maju 1 langkah pengerjaan (jika sudah berada di langkah terakhir, otomatis maju ke Nomor Soal Berikutnya) |
| **`Backspace`** atau **`←`** | Mundur 1 langkah pengerjaan |
| **`↓`** / **`↑`** | Langsung pindah ke Nomor Soal Berikutnya / Sebelumnya kapan saja |
| **`R`** | Reset langkah ke awal soal |
| **`T`** | Toggle tema Gelap (Dark) / Terang (Light) |
| **`F`** | Toggle Fullscreen |
| **`?`** | Buka/tutup modal bantuan shortcut |
| **`1` – `9`, `0`** | Lompat langsung ke Soal 1 s.d. Soal 10 |

*Alur Berkelanjutan (Remote Clicker Friendly)*:
Guru yang menggunakan remote presenter kelas dapat terus menekan tombol maju (`Space` / `→`) tanpa henti. Tombol ini akan membuka langkah 1 demi 1 secara bertahap, dan setelah jawaban akhir ditampilkan, penekanan berikutnya akan berpindah mulus ke soal berikutnya. Tombol `↓` dan `↑` tetap tersedia untuk melompat antarsoal secara langsung kapan saja.

---

## 4. Standar Pewarnaan Pedagogis KaTeX (Standar Baku Soal 1 — Gaya A)

Untuk menuntun mata siswa memahami asal-usul perubahan angka secara visual:

### A. Format Pangkat & Pecahan (Gaya A: Warna Huruf/Angka Bersih)
- **Pangkat Basis**: Diberi warna **Cyan** bold: `\textcolor{#38bdf8}{\mathbf{...}}`
- **Pangkat Numerus**: Diberi warna **Amber/Yellow** bold: `\textcolor{#fbbf24}{\mathbf{...}}`
- **Pecahan Penarikan Pangkat**: 
  - Pembilang (berasal dari pangkat numerus) diberi warna **Amber**: `\textcolor{#fbbf24}{\mathbf{...}}`
  - Penyebut (berasal dari pangkat basis) diberi warna **Cyan**: `\textcolor{#38bdf8}{\mathbf{...}}`
- *Catatan Penting*: Jangan gunakan `\colorbox` pada pangkat kecil karena LaTeX `\colorbox` otomatis berpindah ke Text-Mode sehingga menyebabkan ukuran pangkat membesar menyamai teks biasa. Dengan `\textcolor{...}{\mathbf{...}}`, ukuran pangkat matematika tetap alami (`\scriptstyle`), proporsional, dan posisinya tepat di atas angka.

### B. Langkah Netral / Sifat Dasar
- Ketika masuk ke langkah penyederhanaan (misal: $\frac{3}{2} \cdot 1$), warna kembali putih/netral untuk menjaga fokus bahwa proses penarikan pangkat sudah tuntas.

### C. Jawaban Akhir (Emerald Highlight Box)
- Jawaban akhir dibingkai menggunakan kapsul hijau emerald dengan border menyala:
  `\fcolorbox{#10b981}{#064e3b}{$\mathbf{\textcolor{#6ee7b7}{...}}}$}`
- Tanda sama dengan pada baris akhir ikut berubah menjadi hijau `text-emerald-500` dengan efek pendar halus (*soft glow*).

---

## 5. Konvensi Penulisan Kode dalam `slides-data.js`

1. **Backslash Escaping**:
   Dalam file JavaScript, semua macro KaTeX harus ditulis dengan **double backslash** `\\`:
   - Benar: `\\textcolor`, `\\mathbf`, `\\frac`, `\\log`, `\\cdot`, `\\fcolorbox`
   - Salah: `\textcolor` (akan terbaca sebagai tab karakter `\t`)
   - Salah: `\\\\textcolor` (akan mencetak literal `\textcolor` merah di layar)
2. **Math Mode di dalam Box**:
   Setiap isi di dalam `\\fcolorbox` atau `\\colorbox` harus diapit tanda dollar `$ ... $`, contoh:
   `\\fcolorbox{#10b981}{#064e3b}{$\\mathbf{\\textcolor{#6ee7b7}{\\frac{3}{2}}}$}`
3. **Penyusunan Struktur Data Soal**:
   ```javascript
   {
     id: 1,
     set: "Set A",
     category: "Simulasi Mandiri",
     title: "Soal 1 — Set A",
     prompt: "Tentukan nilai dari:",
     initialLHS: "{}^4\\log 8",
     steps: [
       { stepNum: 1, position: "beside", eq: "=", rhs: "...", isFinal: false },
       { stepNum: 2, position: "newline", eq: "=", rhs: "...", isFinal: false },
       ...
       { stepNum: 4, position: "newline", eq: "=", rhs: "...", isFinal: true }
     ]
   }
   ```

---

## 6. Standar Soal Multi-Suku / Split-Combine Layout (Standar Baku Soal 2)

Untuk soal yang membutuhkan penjabaran beberapa suku secara terpisah sebelum digabungkan (misalnya Soal 2: $27^{{}^3\log 2} + 4^{{}^2\log 3}$):

1. **Prinsip 1 Slide Utuh**: Seluruh pengerjaan satu nomor soal berada dalam **1 slide yang sama** tanpa berpindah halaman, mempertahankan konteks visual penuh di papan tulis.
2. **Struktur Grid 3 Bagian**:
   - **Header Atas**: Rumus induk soal awal terpampang permanen di atas sebagai jangkar visual.
   - **Bagian Tengah (2 Kolom Sejajar)**:
     - Kolom Kiri: *Suku Pertama* (identitas warna **Cyan** `#38bdf8`), penjabaran bertahap langkah 1 s.d. N.
     - Kolom Kanan: *Suku Kedua* (identitas warna **Amber** `#fbbf24`), penjabaran bertahap langkah N+1 s.d. M.
     - Garis pemisah vertikal halus (*soft vertical divider*) di tengah kolom.
   - **Bagian Bawah (Penggabungan & Hasil Akhir — 3 Tahap)**:
     - *Langkah 11*: Pembatas horizontal (*divider*) muncul bersama rumus soal awal di bawah ($27^{{}^3\log 2} + 4^{{}^2\log 3}$).
     - *Langkah 12*: Baris penggabungan menampilkan sama dengan dan substitusi hasil suku kiri (cyan) dan kanan (amber): $= \textcolor{#38bdf8}{\mathbf{8}} + \textcolor{#fbbf24}{\mathbf{9}}$.
     - *Langkah 13*: Baris akhir menampilkan jawaban final dalam kotak hijau neon emerald $= \fcolorbox{#10b981}{#064e3b}{17}$.
3. **Zero-Drift Pre-Rendering**:
   - Baik kolom kiri, kolom kanan, maupun baris penggabungan bawah di-render sejak Langkah 0 dengan `invisible opacity-0 pointer-events-none`.
   - Posisi rumus awal kedua suku dan tanda sama dengan (`=`) terkunci pada koordinat piksel absolut dari awal hingga selesai.
4. **Skema Data di `slides-data.js`**:
   Menggunakan `layout: "split-combine"`, `totalSteps: 13`, dan objek `split: { left: { ... }, right: { ... }, combine: { lhsStepNum: 11, steps: [...] } }`.

---

## 7. Standar Soal Rumus Panjang / Stacked Top-Header Layout (Standar Baku Soal 3)

Digunakan untuk soal dengan ekspresi matematika yang panjang sehingga tidak efisien jika rumus soal diulang di samping setiap langkah (misalnya Soal 3: ${}^2\log 5 \cdot {}^3\log 4 \cdot {}^5\log 27 = \dots$):

1. **Header Rumus Induk (Tengah Atas)**:
   - Rumus soal awal ditampilkan penuh di posisi tengah atas kanvas papan tulis (`stacked-header`), disertai notasi $= \dots$ sebagai jangkar visual bagi siswa dan guru.
   - Diberi garis pembatas horizontal halus di bawahnya sebagai pemisah alami antara soal dengan area penurunan langkah.
2. **Grid Penjabaran Langkah (Kolom Sama Dengan Rata Kiri-Tengah)**:
   - Menggunakan CSS Grid 2 kolom `[min-content_auto]`.
   - **Kolom 1**: Tanda sama dengan (`=`), tersusun lurus dalam 1 garis vertikal presisi pada posisi agak ke kiri dari titik tengah panggung. Tanda sama dengan aktif menyala cyan (`text-cyan-400`).
   - **Kolom 2**: Ekspresi langkah pengerjaan (*RHS*) yang merentang leluasa ke kanan tanpa memboroskan ruang untuk menulis ulang rumus LHS.
3. **Zero-Drift Pre-Rendering Penuh**:
   - Seluruh langkah 1 s.d. N sudah dirender sejak Langkah 0 dengan geometri tetap dan class `invisible opacity-0 pointer-events-none`.
   - Posisi header atas dan posisi kolom tanda sama dengan (`=`) terkunci mati pada koordinat piksel yang sama dari Langkah 0 hingga jawaban akhir hijau emerald.
4. **Skema Data di `slides-data.js`**:
   - Menggunakan atribut `layout: "stacked"`.
   - `initialLHS`: Berisi rumus lengkap untuk panggung atas, contoh: `"{}^2\\log 5 \\cdot {}^3\\log 4 \\cdot {}^5\\log 27 = \\dots"`.
   - Array `steps`: Setiap elemen berisi `{ stepNum, eq: "=", rhs: "...", isFinal: boolean }`.

---

## 8. Standar Operasional: Alur Kerja Git & Deployment GitHub Pages

Sesuai instruksi baku, setiap ada penambahan fitur, penyelesaian soal, atau revisi kecil sekalipun:

1. **Perbaharui `AGENTS.md` Selalu**: Pastikan setiap keputusan baru, aturan baru, atau pola tata letak baru langsung dicatat.
2. **Cache-Busting Versi Script**: Naikkan versi query string pada tag script di `index.html` (misal `?v=17` $\to$ `?v=18`) agar browser di kelas tidak menahan cache lawas.
3. **Commit & Push Langsung ke GitHub**:
   - Seluruh perubahan di-commit dengan pesan yang jelas dan deskriptif.
   - Di-push langsung ke branch utama (`main`) di repository publik GitHub (`fakhri24/x-sem1-uh2`).
4. **Live Deployment GitHub Pages**:
   - Repository dihubungkan langsung ke GitHub Pages (deploy from branch `main`, root `/`).
   - Setiap kali `git push` selesai, versi web langsung terbit dan dapat diakses dari browser maupun remote proyektor kelas tanpa instalasi lokal.

---

## 9. Standar Soal Sifat Pembagian Numerus (Standar Baku Soal 4)

Digunakan untuk soal logaritma dengan sifat pengurangan dua suku basis sama (${}^a\log b - {}^a\log c = {}^a\log\left(\frac{b}{c}\right)$), misalnya:
- **Set A**: ${}^3\log 108 - {}^3\log 4$
- **Set B**: ${}^2\log 48 - {}^2\log 3$

### A. Tata Letak (Stacked Top-Header Layout)
- Menggunakan `layout: "stacked"` agar rumus soal awal terpampang rapi di tengah atas kanvas (`initialLHS: "... = \\dots"`), dengan pembatas horizontal tipis di bawahnya.
- Penurunan langkah menggunakan grid 2 kolom `[min-content_auto]` yang terpusat rapi secara horizontal di bawah header, menjaga kolom tanda sama dengan (`=`) membentuk satu garis vertikal lurus yang simetris di tengah papan tulis tanpa ruang kosong berlebih di sisi kiri.

### B. Alur Penurunan Pedagogis Bertahap (6 Langkah Presisi)
1. **Langkah 1**: Sifat pengurangan logaritma basis sama diubah menjadi pembagian numerus dalam tanda kurung pecahan:
   $$= {}^a\log\left(\frac{b}{c}\right)$$
2. **Langkah 2**: Evaluasi hasil pembagian numerus ($108 : 4 = 27$ pada Set A; $48 : 3 = 16$ pada Set B):
   $$= {}^a\log(\dots)$$
3. **Langkah 3**: Numerus diubah menjadi bentuk bilangan berpangkat basis $a$, dengan pangkat numerus diberi warna **Amber bold** (`\textcolor{#fbbf24}{\mathbf{...}}`):
   $$= {}^a\log(a^{\textcolor{#fbbf24}{\mathbf{n}}})$$
4. **Langkah 4**: Pangkat numerus ditarik ke depan sebagai koefisien pengali:
   $$= \textcolor{#fbbf24}{\mathbf{n}} \cdot {}^a\log a$$
5. **Langkah 5**: Penerapan identitas dasar logaritma ${}^a\log a = 1$ (warna kembali netral/putih sesuai aturan 4.B):
   $$= n \cdot 1$$
6. **Langkah 6**: Hasil perkalian akhir dibingkai menggunakan kapsul hijau neon emerald dengan pendar halus (*soft glow*):
   $$= \fcolorbox{#10b981}{#064e3b}{$\mathbf{\textcolor{#6ee7b7}{n}}$}$$



