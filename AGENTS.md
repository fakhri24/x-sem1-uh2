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
  `\fcolorbox{#10b981}{#064e3b}{$\textcolor{#6ee7b7}{...}$}`
- Tanda sama dengan pada baris akhir ikut berubah menjadi hijau `text-emerald-500` dengan efek pendar halus (*soft glow*).
- *Catatan Mutlak*: Jangan gunakan `\mathbf` di dalam kotak jawaban akhir. Cukup gunakan `\textcolor{#6ee7b7}{...}` agar tipografi variabel matematika ($a, b, x, y, p, q$) tetap murni menggunakan font matematika KaTeX (*math italic*).

### D. Larangan Penggunaan `\mathbf` pada Variabel Aljabar & Faktor Penyorotan
- Dalam LaTeX dan KaTeX, macro `\mathbf` berfungsi mengubah teks menjadi *Math Bold Roman* (huruf cetak tegak / upright text).
- Jika diterapkan pada variabel huruf aljabar ($x, y, a, b, p, q$), huruf tersebut akan kehilangan lengkungan/kemiringan khas rumus matematika (*math italic*) dan berubah kaku menjadi font teks biasa ($\mathbf{x}, \mathbf{y}, \mathbf{a}, \mathbf{b}$). Hal ini membuat rumus terlihat "seperti tidak menggunakan KaTeX" dan tidak konsisten dengan suku di sebelahnya.
- **Aturan Baku**:
  1. `\mathbf` **HANYA** boleh digunakan untuk angka/digit numerik murni (misal eksponen: `\mathbf{2}`, `\mathbf{3}`).
  2. Untuk variabel huruf aljabar dan penyorotan suku (seperti pencoretan Soal 7 atau variabel perantara Soal 8), **selalu gunakan penyorotan warna murni**: `\textcolor{#38bdf8}{({}^5\log x - {}^5\log y)}` dan `\textcolor{#38bdf8}{x}` tanpa `\mathbf`.
  3. Di dalam `\fcolorbox`, selalu gunakan format murni: `\fcolorbox{#10b981}{#064e3b}{$\textcolor{#6ee7b7}{...}$}`.

---

## 5. Konvensi Penulisan Kode dalam `slides-data.js`

1. **Backslash Escaping**:
   Dalam file JavaScript, semua macro KaTeX harus ditulis dengan **double backslash** `\\`:
   - Benar: `\\textcolor`, `\\mathbf`, `\\frac`, `\\log`, `\\cdot`, `\\fcolorbox`
   - Salah: `\textcolor` (akan terbaca sebagai tab karakter `\t`)
   - Salah: `\\\\textcolor` (akan mencetak literal `\textcolor` merah di layar)
2. **Math Mode di dalam Box**:
   Setiap isi di dalam `\\fcolorbox` atau `\\colorbox` harus diapit tanda dollar `$ ... $`, contoh:
   `\\fcolorbox{#10b981}{#064e3b}{$\\textcolor{#6ee7b7}{\\frac{3}{2}}$}`
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

### A. Tata Letak Dua Kolom (`layout: "two-column"`)
- Menghindari pemadatan font (*dense layout*). KaTeX font tetap maksimal (`2.45rem`).
- **Kolom Kiri (Fase Pembagian Numerus — Langkah 1–2)**:
  - Badge: `Sifat Pembagian Numerus` (Cyan)
  - Langkah 1: Sifat pengurangan logaritma basis sama diubah menjadi pembagian numerus dalam tanda kurung pecahan, dengan numerus yang dikurangkan (penyebut) disorot warna **Rose/Coral Red** (`\textcolor{#f87171}{...}`): $= {}^a\log\left(\frac{b}{\textcolor{#f87171}{c}}\right)$
  - Langkah 2: Evaluasi hasil pembagian pecahan numerus menjadi satu bilangan bulat: $= {}^a\log N$
- **Kolom Kanan (Fase Penarikan Pangkat & Hasil — Langkah 3–6)**:
  - Badge: `Penarikan Pangkat & Hasil` (Amber)
  - Langkah 3: Numerus diubah menjadi bentuk bilangan berpangkat basis $a$, dengan pangkat numerus diberi warna **Amber bold** (`\textcolor{#fbbf24}{\mathbf{...}}`): $= {}^a\log(a^{\textcolor{#fbbf24}{\mathbf{n}}})$
  - Langkah 4: Pangkat numerus ditarik ke depan sebagai koefisien pengali: $= \textcolor{#fbbf24}{\mathbf{n}} \cdot {}^a\log a$
  - Langkah 5: Penerapan identitas dasar logaritma ${}^a\log a = 1$ (warna kembali netral/putih): $= n \cdot 1$
  - Langkah 6: Hasil perkalian akhir dibingkai menggunakan kapsul hijau neon emerald dengan pendar halus (*soft glow*): $= \fcolorbox{#10b981}{#064e3b}{$\textcolor{#6ee7b7}{n}$}$

---

## 10. Standar Soal Substitusi Variabel / Faktorisasi Numerus (Standar Baku Soal 5)

Digunakan untuk soal logaritma yang memerlukan faktorisasi numerus menjadi perkalian faktor yang sesuai dan substitusi nilai variabel yang diketahui dari soal, misalnya:
- **Set A**: Jika ${}^2\log 3 = a$ dan ${}^2\log 7 = b$, tentukan nilai dari ${}^2\log 63$
- **Set B**: Jika ${}^3\log 2 = p$ dan ${}^3\log 5 = q$, tentukan nilai dari ${}^3\log 20$

### A. Fitur Parser KaTeX pada Header Soal (`renderPromptWithKaTeX`)
- Teks pengantar yang mengandung formula matematika diapit tanda dollar (`$...$`) otomatis diparsing dan dirender inline menggunakan KaTeX, sehingga persamaan seperti `${}^2\log 3 = a$` tampil proporsional, rapi, dan menyatu dengan teks pengantar.

### B. Tata Letak (Stacked Top-Header Layout)
- Menggunakan `layout: "stacked"`.
- Rumus target awal terpampang rapi di tengah atas kanvas (`initialLHS: "... = \\dots"`), dengan pembatas horizontal tipis di bawahnya.
- Penurunan langkah menggunakan grid 2 kolom `[min-content_auto]` yang terpusat secara simetris di tengah kanvas papan tulis.

### C. Alur Penurunan Pedagogis Bertahap (6 Langkah Presisi)
1. **Langkah 1**: Faktorkan numerus menjadi perkalian dua bilangan ($63 = 9 \cdot 7$ pada Set A; $20 = 4 \cdot 5$ pada Set B):
   $$= {}^a\log(m \cdot n)$$
2. **Langkah 2**: Terapkan sifat perkalian numerus logaritma menjadi penjumlahan:
   $$= {}^a\log m + {}^a\log n$$
3. **Langkah 3**: Nyatakan bilangan komposit sebagai bilangan berpangkat basis logaritma yang sesuai, dengan pangkat diwarnai **Amber bold** (`\textcolor{#fbbf24}{\mathbf{...}}`):
   $$= {}^a\log(b^{\textcolor{#fbbf24}{\mathbf{k}}}) + {}^a\log n$$
4. **Langkah 4**: Tarik pangkat numerus ke depan menjadi koefisien pengali:
   $$= \textcolor{#fbbf24}{\mathbf{k}} \cdot {}^a\log b + {}^a\log n$$
5. **Langkah 5**: Substitusi variabel aljabar yang diketahui ($a, b$ pada Set A; $p, q$ pada Set B) ke dalam rumus (warna kembali netral/putih):
   $$= k \cdot a + b$$
6. **Langkah 6**: Tuliskan bentuk aljabar paling sederhana di dalam kapsul hijau neon emerald bercahaya:
   $$= \fcolorbox{#10b981}{#064e3b}{$\textcolor{#6ee7b7}{ka + b}$}$$

---

## 11. Standar Soal Operasi Logaritma Multi-Suku (Standar Baku Soal 6)

Digunakan untuk soal logaritma dengan gabungan operasi penjumlahan dan pengurangan numerus multi-suku pada basis yang sama, misalnya:
- **Set A**: ${}^5\log 50 - {}^5\log 8 + {}^5\log 4 + {}^5\log 5$
- **Set B**: ${}^3\log 15 + {}^3\log 6 + {}^3\log 3 - {}^3\log 10$

### A. Tata Letak Dua Kolom (`layout: "two-column"`)
- Menghindari pemadatan font dan scroll vertikal. KaTeX font tetap maksimal (`2.45rem` / `2.12rem`).
- **Kolom Kiri (Fase Operasi & Evaluasi Numerus — Langkah 1–3)**:
  - Badge: `Sifat Operasi Numerus` (Cyan)
  - Langkah 1: Gabungkan seluruh suku menjadi satu logaritma tunggal; numerus suku bernilai positif dikalikan di pembilang dan suku negatif ditarik ke penyebut dengan warna **Rose/Coral Red** (`\textcolor{#f87171}{...}`): $= {}^a\log\left(\frac{\text{numerus (+)}}{\textcolor{#f87171}{\text{numerus (-)}}}\right)$
  - Langkah 2: Evaluasi hasil perkalian pada pembilang pecahan: $= {}^a\log\left(\frac{k}{\text{penyebut}}\right)$
  - Langkah 3: Selesaikan operasi pembagian pecahan numerus menjadi satu bilangan bulat: $= {}^a\log m$
- **Kolom Kanan (Fase Penarikan Pangkat & Hasil — Langkah 4–7)**:
  - Badge: `Penarikan Pangkat & Hasil` (Amber)
  - Langkah 4: Nyatakan numerus sebagai bilangan berpangkat basis $a$, dengan eksponen diwarnai **Amber bold** (`\textcolor{#fbbf24}{\mathbf{...}}`): $= {}^a\log(a^{\textcolor{#fbbf24}{\mathbf{n}}})$
  - Langkah 5: Tarik eksponen ke depan menjadi koefisien pengali: $= \textcolor{#fbbf24}{\mathbf{n}} \cdot {}^a\log a$
  - Langkah 6: Terapkan sifat dasar ${}^a\log a = 1$ (warna kembali netral/putih): $= n \cdot 1$
  - Langkah 7: Tampilkan hasil akhir dalam kapsul hijau neon emerald bercahaya: $= \fcolorbox{#10b981}{#064e3b}{$\textcolor{#6ee7b7}{n}$}$

---

## 12. Standar Soal Aljabar Selisih Kuadrat Logaritma (Standar Baku Soal 7)

Digunakan untuk soal pecahan aljabar yang melibatkan bentuk selisih kuadrat $(\log x)^2 - (\log y)^2$ dibagi $(\log x - \log y)$, misalnya:
- **Set A**: $\frac{({}^5\log x)^2 - ({}^5\log y)^2}{{}^5\log x - {}^5\log y}$
- **Set B**: $\frac{({}^3\log a)^2 - ({}^3\log b)^2}{{}^3\log a - {}^3\log b}$

### A. Tata Letak (Stacked Top-Header Layout)
- Menggunakan `layout: "stacked"`.
- Rumus pecahan aljabar awal terpampang utuh di posisi tengah atas (`initialLHS: "... = \\dots"`).
- Penurunan langkah menggunakan grid 2 kolom `[min-content_auto]`.

### B. Alur Penurunan Pedagogis Bertahap (4 Langkah Presisi)
1. **Langkah 1**: Faktorkan pembilang menggunakan identitas selisih kuadrat $A^2 - B^2 = (A - B)(A + B)$:
   $$= \frac{({}^a\log x - {}^a\log y)({}^a\log x + {}^a\log y)}{{}^a\log x - {}^a\log y}$$
2. **Langkah 2**: Sorot faktor pembagi yang saling meniadakan (*cancellation*) menggunakan warna **Cyan** murni (`\textcolor{#38bdf8}{...}`):
   $$= \frac{\textcolor{#38bdf8}{({}^a\log x - {}^a\log y)}({}^a\log x + {}^a\log y)}{\textcolor{#38bdf8}{({}^a\log x - {}^a\log y)}}$$
3. **Langkah 3**: Tuliskan suku sisa setelah faktor pembagi dicoret:
   $$= {}^a\log x + {}^a\log y$$
4. **Langkah 4**: Terapkan sifat penjumlahan logaritma menjadi perkalian numerus, lalu bingkai hasil akhir dalam kapsul hijau neon emerald:
   $$= \fcolorbox{#10b981}{#064e3b}{$\textcolor{#6ee7b7}{{}^a\log(xy)}$}$$

---

## 13. Standar Soal Persamaan Logaritma & Tata Letak Dua Kolom (Standar Baku Soal 8 & Soal 9)

Digunakan untuk soal persamaan logaritma yang mencari nilai variabel (misal nilai $a$ atau nilai $x$):
- **Soal 8 Set A**: ${}^x\log(3a - 1) \cdot {}^5\log x = 3$
- **Soal 8 Set B**: ${}^x\log(2k + 1) \cdot {}^3\log x = 4$
- **Soal 9 Set A**: ${}^2\log x \cdot {}^5\log 4 = 6$
- **Soal 9 Set B**: ${}^3\log x \cdot {}^2\log 9 = 8$

### A. Larangan Persamaan Berantai (No Chained Equations)
- **Aturan Baku**: Dilarang menggabungkan dua tanda sama dengan dalam satu baris persamaan (misal: $3a = 125 + 1 = 126$ atau ${}^5\log x = \frac{6}{2} = 3$).
- Setiap tahap operasi perpindahan ruas dan evaluasi aritmatika **wajib dipisah menjadi baris tersendiri**:
  - Baris 1: $\implies 3a = 125 + 1$
  - Baris 2: $\implies 3a = 126$
- Hal ini menjaga ketelitian notasi matematika aljabar formal dan mempermudah siswa memahami proses langkah demi langkah.

### B. Implication Spine Notasi `\implies`
- Pada persamaan logaritma, kolom operator di sebelah kiri menggunakan tanda implikasi vertikal `\implies` ($\implies$), bukan tanda sama dengan (`=`).
- Ruas kiri dan ruas kanan merupakan satu kesatuan persamaan yang bertransformasi langkah demi langkah.

### C. Tata Letak Dua Kolom (`layout: "two-column"`)
Ketika langkah aljabar dipecah rapi tanpa persamaan berantai, jumlah langkah menjadi 8. Jika ditumpuk secara vertikal dalam 1 kolom, layar proyektor berpotensi mengalami pemadatan font atau overflow ke bawah. Oleh karena itu, diterapkan tata letak **Dua Kolom Simetris**:
1. **Header Rumus Induk**: Rumus awal persamaan terpampang permanen di tengah atas dengan garis horizontal pemisah di bawahnya.
2. **Kolom Kiri (Fase 1: Sifat Logaritma — Langkah 1 s.d. 4)**:
   - Dilengkapi badge penanda fase (titik cyan + teks cyan, misal: `Sifat Logaritma`).
   - Berisi transformasi sifat logaritma berantai dan konversi ke bentuk eksponen ($3a - 1 = 125$).
3. **Pemisah Vertikal Halus (*Soft Vertical Divider*)**: Garis vertikal tipis di tengah memisahkan Kolom Kiri dan Kolom Kanan pada layar desktop/proyektor.
4. **Kolom Kanan (Fase 2: Penyelesaian Aljabar — Langkah 5 s.d. 8)**:
   - Dilengkapi badge penanda fase (titik amber + teks amber, misal: `Penyelesaian Aljabar`).
   - Badge menyala penuh saat langkah berpindah ke Kolom Kanan (Langkah $\ge 5$).
   - Berisi penyelesaian persamaan aljabar linier bertahap hingga jawaban akhir dalam kotak emerald hijau bercahaya.
5. **Keuntungan**:
   - Tinggi vertikal terpangkas 50% (hanya 4 baris tinggi per kolom), memberikan ruang kanvas papan tulis yang sangat lapang untuk coretan spidol fisik guru.
   - Tipografi KaTeX tetap ekstra besar (`2.15rem` s.d. `2.45rem`) tanpa perlu diperkecil.
   - Zero-Drift Pre-Rendering: Seluruh baris di Kolom Kiri dan Kanan dirender sejak Langkah 0 dengan `invisible opacity-0 pointer-events-none`.

---

## 14. Standar Soal Mengubah Basis Logaritma & Tata Letak Dua Kolom (Standar Baku Soal 10)

Digunakan untuk soal logaritma dengan sifat mengubah basis ${}^a\log b = \frac{{}^c\log b}{{}^c\log a}$, di mana penjabaran melibatkan rantai logaritma dan substitusi aljabar:
- **Set A**: Jika ${}^2\log 3 = a$ dan ${}^3\log 5 = b$, tentukan nilai dari ${}^6\log 45$
- **Set B**: Jika ${}^5\log 3 = p$ dan ${}^3\log 2 = q$, tentukan nilai dari ${}^{15}\log 20$

### A. Analogi Pedagogis "Stasiun Awal Keberangkatan Transit Kereta"
- **Masalah Siswa**: Siswa sering bingung menentukan nilai basis baru $c$ pada rumus ${}^a\log b = \frac{{}^c\log b}{{}^c\log a}$.
- **Prinsip Transit Kereta**: Rantai logaritma bertindak seperti rute kereta antarstasiun:
  - Pada Set A: ${}^2\log 3 \cdot {}^3\log 5 \implies$ Rute Stasiun $2 \to 3 \to 5$.
  - Pada Set B: ${}^5\log 3 \cdot {}^3\log 2 \implies$ Rute Stasiun $5 \to 3 \to 2$.
- **Aturan Baku**: **Pilihlah basis stasiun paling awal (awal keberangkatan)**:
  - Set A: Stasiun awal adalah **2**, maka pilih basis baru **2**.
  - Set B: Stasiun awal adalah **5**, maka pilih basis baru **5**.
- **Keuntungan Matematis Mutlak**:
  Dengan memilih stasiun paling awal, seluruh suku sekunder (seperti ${}^2\log 5$ atau ${}^5\log 2$) langsung diselesaikan dengan **perkalian maju searah** (${}^2\log 3 \cdot {}^3\log 5 = a \cdot b$ atau ${}^5\log 3 \cdot {}^3\log 2 = p \cdot q$). Siswa **terbebas 100% dari pecahan bertumpuk** ($1/a$ atau $1/p$) yang membingungkan.
- **Tampilan UI**: Ditampilkan sebagai petunjuk visual (*hint*) kapsul amber elegan di bawah prompt soal:
  `💡 Basis baru = Stasiun awal keberangkatan transit kereta: 2 → 3 → 5 (pilih basis 2)`

### B. Tata Letak Dua Kolom (`layout: "two-column"`)
Alih-alih memadatkan font (*dense layout*), soal dipecah menjadi 8 langkah murni satu-satu dalam format **2 Kolom Simetris (4 Kiri + 4 Kanan)**, mempertahankan ukuran KaTeX ekstra besar (`2.45rem`):

- **Kolom Kiri (Fase 1: Pengubahan Basis & Faktorisasi — Langkah 1–4)**:
  - Badge: `Pengubahan Basis & Faktorisasi` (Cyan)
  - Langkah 1: Terapkan sifat mengubah basis dengan basis stasiun awal: $= \frac{{}^c\log \textcolor{#fbbf24}{b}}{{{}^c\log \textcolor{#38bdf8}{a}}}$
  - Langkah 2: Faktorkan numerus pembilang dan penyebut menjadi perkalian faktor: $= \frac{{}^c\log(p \cdot q)}{{}^c\log(r \cdot s)}$
  - Langkah 3: Terapkan sifat perkalian numerus menjadi penjumlahan logaritma: $= \frac{{}^c\log p + {}^c\log q}{{}^c\log r + {}^c\log s}$
  - Langkah 4: Nyatakan bilangan komposit menjadi bilangan berpangkat: $= \frac{{}^c\log(m^{\textcolor{#fbbf24}{\mathbf{2}}}) + {}^c\log q}{{}^c\log r + {}^c\log s}$

- **Kolom Kanan (Fase 2: Transit Kereta & Aljabar — Langkah 5–8)**:
  - Badge: `Transit Kereta & Aljabar` (Amber)
  - Langkah 5: Pangkat numerus ditarik ke depan dan selesaikan identitas dasar ${}^c\log c = 1$: $= \frac{\textcolor{#fbbf24}{\mathbf{2}} \cdot {}^c\log m + {}^c\log q}{1 + {}^c\log s}$
  - Langkah 6: Ekspansi suku rantai transit kereta (${}^2\log 5 \to {}^2\log 3 \cdot {}^3\log 5$ atau ${}^5\log 2 \to {}^5\log 3 \cdot {}^3\log 2$): $= \frac{2 \cdot {}^c\log m + ({}^c\log m \cdot {}^m\log q)}{1 + {}^c\log s}$
  - Langkah 7: Substitusi variabel aljabar yang diketahui ($a, b$ atau $p, q$): $= \frac{2(a) + (a)(b)}{1 + a}$
  - Langkah 8: Bentuk aljabar paling sederhana dalam kotak hijau neon emerald: $= \fcolorbox{#10b981}{#064e3b}{$\textcolor{#6ee7b7}{\frac{2a + ab}{a + 1}}$}$






