/**
 * Data Soal dan Langkah Penyelesaian Interaktif Logaritma (P7)
 * Didesain khusus untuk presentasi papan tulis matematika bersih (tanpa teks penjelasan manual)
 */

const SLIDES_DATA = {
  setA: [
    {
      id: 1,
      set: "Set A",
      category: "Simulasi Mandiri",
      title: "Soal 1 — Set A",
      prompt: "Tentukan nilai dari:",
      initialLHS: "{}^4\\log 8",
      steps: [
        {
          stepNum: 1,
          position: "beside",
          eq: "=",
          rhs: "{}^{2^{\\textcolor{#38bdf8}{\\mathbf{2}}}}\\log 2^{\\textcolor{#fbbf24}{\\mathbf{3}}}",
          isFinal: false
        },
        {
          stepNum: 2,
          position: "newline",
          eq: "=",
          rhs: "\\frac{\\textcolor{#fbbf24}{\\mathbf{3}}}{\\textcolor{#38bdf8}{\\mathbf{2}}} \\cdot {}^2\\log 2",
          isFinal: false
        },
        {
          stepNum: 3,
          position: "newline",
          eq: "=",
          rhs: "\\frac{3}{2} \\cdot 1",
          isFinal: false
        },
        {
          stepNum: 4,
          position: "newline",
          eq: "=",
          rhs: "\\fcolorbox{#10b981}{#064e3b}{$\\textcolor{#6ee7b7}{\\frac{3}{2}}$}",
          isFinal: true
        }
      ]
    },
    {
      id: 2,
      set: "Set A",
      category: "Simulasi Mandiri",
      title: "Soal 2 — Set A",
      prompt: "Tentukan nilai dari:",
      initialLHS: "27^{{}^3\\log 2} + 4^{{}^2\\log 3}",
      layout: "split-combine",
      totalSteps: 13,
      split: {
        left: {
          badge: "Suku Pertama",
          badgeColor: "cyan",
          initialLHS: "27^{{}^3\\log 2}",
          steps: [
            { stepNum: 1, eq: "=", rhs: "(3^{\\textcolor{#38bdf8}{\\mathbf{3}}})^{{}^3\\log 2}" },
            { stepNum: 2, eq: "=", rhs: "3^{\\textcolor{#38bdf8}{\\mathbf{3}} \\cdot {}^3\\log 2}" },
            { stepNum: 3, eq: "=", rhs: "3^{{}^3\\log 2^{\\textcolor{#38bdf8}{\\mathbf{3}}}}" },
            { stepNum: 4, eq: "=", rhs: "2^{\\textcolor{#38bdf8}{\\mathbf{3}}}" },
            { stepNum: 5, eq: "=", rhs: "\\textcolor{#38bdf8}{\\mathbf{8}}", isSubFinal: true }
          ]
        },
        right: {
          badge: "Suku Kedua",
          badgeColor: "amber",
          initialLHS: "4^{{}^2\\log 3}",
          steps: [
            { stepNum: 6, eq: "=", rhs: "(2^{\\textcolor{#fbbf24}{\\mathbf{2}}})^{{}^2\\log 3}" },
            { stepNum: 7, eq: "=", rhs: "2^{\\textcolor{#fbbf24}{\\mathbf{2}} \\cdot {}^2\\log 3}" },
            { stepNum: 8, eq: "=", rhs: "2^{{}^2\\log 3^{\\textcolor{#fbbf24}{\\mathbf{2}}}}" },
            { stepNum: 9, eq: "=", rhs: "3^{\\textcolor{#fbbf24}{\\mathbf{2}}}" },
            { stepNum: 10, eq: "=", rhs: "\\textcolor{#fbbf24}{\\mathbf{9}}", isSubFinal: true }
          ]
        },
        combine: {
          badge: "Penggabungan & Hasil Akhir",
          badgeColor: "emerald",
          initialLHS: "27^{{}^3\\log 2} + 4^{{}^2\\log 3}",
          lhsStepNum: 11,
          steps: [
            { stepNum: 12, eq: "=", rhs: "\\textcolor{#38bdf8}{\\mathbf{8}} + \\textcolor{#fbbf24}{\\mathbf{9}}" },
            { stepNum: 13, eq: "=", rhs: "\\fcolorbox{#10b981}{#064e3b}{$\\textcolor{#6ee7b7}{17}$}", isFinal: true }
          ]
        }
      }
    },
    {
      id: 3,
      set: "Set A",
      category: "Simulasi Mandiri",
      title: "Soal 3 — Set A",
      prompt: "Tentukan hasil dari:",
      layout: "stacked",
      initialLHS: "{}^2\\log 5 \\cdot {}^3\\log 4 \\cdot {}^5\\log 27 = \\dots",
      steps: [
        {
          stepNum: 1,
          eq: "=",
          rhs: "{}^3\\log 4 \\cdot {}^2\\log \\textcolor{#38bdf8}{\\mathbf{5}} \\cdot {}^{\\textcolor{#38bdf8}{\\mathbf{5}}}\\log 27",
          isFinal: false
        },
        {
          stepNum: 2,
          eq: "=",
          rhs: "{}^3\\log(2^{\\textcolor{#fbbf24}{\\mathbf{2}}}) \\cdot {}^2\\log 27",
          isFinal: false
        },
        {
          stepNum: 3,
          eq: "=",
          rhs: "\\textcolor{#fbbf24}{\\mathbf{2}} \\cdot {}^3\\log \\textcolor{#38bdf8}{\\mathbf{2}} \\cdot {}^{\\textcolor{#38bdf8}{\\mathbf{2}}}\\log 27",
          isFinal: false
        },
        {
          stepNum: 4,
          eq: "=",
          rhs: "2 \\cdot {}^3\\log 27",
          isFinal: false
        },
        {
          stepNum: 5,
          eq: "=",
          rhs: "2 \\cdot 3",
          isFinal: false
        },
        {
          stepNum: 6,
          eq: "=",
          rhs: "\\fcolorbox{#10b981}{#064e3b}{$\\textcolor{#6ee7b7}{6}$}",
          isFinal: true
        }
      ]
    },
    {
      id: 4,
      set: "Set A",
      category: "Simulasi Mandiri",
      title: "Soal 4 — Set A",
      prompt: "Tentukan nilai dari:",
      layout: "two-column",
      columns: [
        { badge: "Sifat Pembagian Numerus", badgeColor: "cyan", stepCount: 2 },
        { badge: "Penarikan Pangkat & Hasil", badgeColor: "amber", stepCount: 4 }
      ],
      initialLHS: "{}^3\\log 108 - {}^3\\log 4 = \\dots",
      steps: [
        {
          stepNum: 1,
          eq: "=",
          rhs: "{}^3\\log\\left(\\frac{108}{\\textcolor{#f87171}{4}}\\right)",
          isFinal: false
        },
        {
          stepNum: 2,
          eq: "=",
          rhs: "{}^3\\log 27",
          isFinal: false
        },
        {
          stepNum: 3,
          eq: "=",
          rhs: "{}^3\\log(3^{\\textcolor{#fbbf24}{\\mathbf{3}}})",
          isFinal: false
        },
        {
          stepNum: 4,
          eq: "=",
          rhs: "\\textcolor{#fbbf24}{\\mathbf{3}} \\cdot {}^3\\log 3",
          isFinal: false
        },
        {
          stepNum: 5,
          eq: "=",
          rhs: "3 \\cdot 1",
          isFinal: false
        },
        {
          stepNum: 6,
          eq: "=",
          rhs: "\\fcolorbox{#10b981}{#064e3b}{$\\textcolor{#6ee7b7}{3}$}",
          isFinal: true
        }
      ]
    },
    {
      id: 5,
      set: "Set A",
      category: "Simulasi Mandiri",
      title: "Soal 5 — Set A",
      prompt: "Jika ${}^2\\log 3 = a$ dan ${}^2\\log 7 = b$, tentukan nilai dari:",
      layout: "stacked",
      initialLHS: "{}^2\\log 63 = \\dots",
      steps: [
        {
          stepNum: 1,
          eq: "=",
          rhs: "{}^2\\log(9 \\cdot 7)",
          isFinal: false
        },
        {
          stepNum: 2,
          eq: "=",
          rhs: "{}^2\\log 9 + {}^2\\log 7",
          isFinal: false
        },
        {
          stepNum: 3,
          eq: "=",
          rhs: "{}^2\\log(3^{\\textcolor{#fbbf24}{\\mathbf{2}}}) + {}^2\\log 7",
          isFinal: false
        },
        {
          stepNum: 4,
          eq: "=",
          rhs: "\\textcolor{#fbbf24}{\\mathbf{2}} \\cdot {}^2\\log 3 + {}^2\\log 7",
          isFinal: false
        },
        {
          stepNum: 5,
          eq: "=",
          rhs: "2 \\cdot a + b",
          isFinal: false
        },
        {
          stepNum: 6,
          eq: "=",
          rhs: "\\fcolorbox{#10b981}{#064e3b}{$\\textcolor{#6ee7b7}{2a + b}$}",
          isFinal: true
        }
      ]
    },
    {
      id: 6,
      set: "Set A",
      category: "Simulasi Mandiri",
      title: "Soal 6 — Set A",
      prompt: "Sederhanakan bentuk berikut:",
      layout: "two-column",
      columns: [
        { badge: "Sifat Operasi Numerus", badgeColor: "cyan", stepCount: 3 },
        { badge: "Penarikan Pangkat & Hasil", badgeColor: "amber", stepCount: 4 }
      ],
      initialLHS: "{}^5\\log 50 - {}^5\\log 8 + {}^5\\log 4 + {}^5\\log 5 = \\dots",
      steps: [
        {
          stepNum: 1,
          eq: "=",
          rhs: "{}^5\\log\\left(\\frac{50 \\cdot 4 \\cdot 5}{\\textcolor{#f87171}{8}}\\right)",
          isFinal: false
        },
        {
          stepNum: 2,
          eq: "=",
          rhs: "{}^5\\log\\left(\\frac{1000}{8}\\right)",
          isFinal: false
        },
        {
          stepNum: 3,
          eq: "=",
          rhs: "{}^5\\log 125",
          isFinal: false
        },
        {
          stepNum: 4,
          eq: "=",
          rhs: "{}^5\\log(5^{\\textcolor{#fbbf24}{\\mathbf{3}}})",
          isFinal: false
        },
        {
          stepNum: 5,
          eq: "=",
          rhs: "\\textcolor{#fbbf24}{\\mathbf{3}} \\cdot {}^5\\log 5",
          isFinal: false
        },
        {
          stepNum: 6,
          eq: "=",
          rhs: "3 \\cdot 1",
          isFinal: false
        },
        {
          stepNum: 7,
          eq: "=",
          rhs: "\\fcolorbox{#10b981}{#064e3b}{$\\textcolor{#6ee7b7}{3}$}",
          isFinal: true
        }
      ]
    },
    {
      id: 7,
      set: "Set A",
      category: "Simulasi Mandiri",
      title: "Soal 7 — Set A",
      prompt: "Sederhanakan bentuk pecahan:",
      layout: "stacked",
      initialLHS: "\\frac{({}^5\\log x)^2 - ({}^5\\log y)^2}{{}^5\\log x - {}^5\\log y} = \\dots",
      steps: [
        {
          stepNum: 1,
          eq: "=",
          rhs: "\\frac{({}^5\\log x + {}^5\\log y)\\textcolor{#38bdf8}{({}^5\\log x - {}^5\\log y)}}{\\textcolor{#38bdf8}{({}^5\\log x - {}^5\\log y)}}",
          isFinal: false
        },
        {
          stepNum: 2,
          eq: "=",
          rhs: "{}^5\\log x + {}^5\\log y",
          isFinal: false
        },
        {
          stepNum: 3,
          eq: "=",
          rhs: "{}^5\\log(x \\cdot y)",
          isFinal: false
        },
        {
          stepNum: 4,
          eq: "=",
          rhs: "\\fcolorbox{#10b981}{#064e3b}{$\\textcolor{#6ee7b7}{{}^5\\log(xy)}$}",
          isFinal: true
        }
      ]
    },
    {
      id: 8,
      set: "Set A",
      category: "Simulasi Mandiri",
      title: "Soal 8 — Set A",
      prompt: "Tentukan nilai $a$ jika:",
      layout: "two-column",
      columns: [
        { badge: "Sifat Logaritma", badgeColor: "cyan" },
        { badge: "Penyelesaian Aljabar", badgeColor: "amber" }
      ],
      initialLHS: "{}^x\\log(3a - 1) \\cdot {}^5\\log x = 3",
      steps: [
        {
          stepNum: 1,
          eq: "\\implies",
          rhs: "{}^5\\log \\textcolor{#38bdf8}{x} \\cdot {}^{\\textcolor{#38bdf8}{x}}\\log(3a - 1) = 3",
          isFinal: false
        },
        {
          stepNum: 2,
          eq: "\\implies",
          rhs: "{}^5\\log(3a - 1) = 3",
          isFinal: false
        },
        {
          stepNum: 3,
          eq: "\\implies",
          rhs: "3a - 1 = 5^{\\textcolor{#fbbf24}{\\mathbf{3}}}",
          isFinal: false
        },
        {
          stepNum: 4,
          eq: "\\implies",
          rhs: "3a - 1 = 125",
          isFinal: false
        },
        {
          stepNum: 5,
          eq: "\\implies",
          rhs: "3a = 125 + 1",
          isFinal: false
        },
        {
          stepNum: 6,
          eq: "\\implies",
          rhs: "3a = 126",
          isFinal: false
        },
        {
          stepNum: 7,
          eq: "\\implies",
          rhs: "a = \\frac{126}{3}",
          isFinal: false
        },
        {
          stepNum: 8,
          eq: "\\implies",
          rhs: "\\fcolorbox{#10b981}{#064e3b}{$\\textcolor{#6ee7b7}{a = 42}$}",
          isFinal: true
        }
      ]
    },
    {
      id: 9,
      set: "Set A",
      category: "Simulasi Mandiri",
      title: "Soal 9 — Set A",
      prompt: "Tentukan nilai $x$ jika:",
      layout: "two-column",
      columns: [
        { badge: "Sifat Logaritma Rantai", badgeColor: "cyan" },
        { badge: "Menentukan Nilai x", badgeColor: "amber" }
      ],
      initialLHS: "{}^2\\log x \\cdot {}^5\\log 4 = 6",
      steps: [
        {
          stepNum: 1,
          eq: "\\implies",
          rhs: "{}^5\\log 4 \\cdot {}^2\\log x = 6",
          isFinal: false
        },
        {
          stepNum: 2,
          eq: "\\implies",
          rhs: "{}^5\\log(2^{\\textcolor{#fbbf24}{\\mathbf{2}}}) \\cdot {}^2\\log x = 6",
          isFinal: false
        },
        {
          stepNum: 3,
          eq: "\\implies",
          rhs: "\\textcolor{#fbbf24}{\\mathbf{2}} \\cdot {}^5\\log \\textcolor{#38bdf8}{\\mathbf{2}} \\cdot {}^{\\textcolor{#38bdf8}{\\mathbf{2}}}\\log x = 6",
          isFinal: false
        },
        {
          stepNum: 4,
          eq: "\\implies",
          rhs: "2 \\cdot {}^5\\log x = 6",
          isFinal: false
        },
        {
          stepNum: 5,
          eq: "\\implies",
          rhs: "{}^5\\log x = \\frac{6}{2}",
          isFinal: false
        },
        {
          stepNum: 6,
          eq: "\\implies",
          rhs: "{}^5\\log x = 3",
          isFinal: false
        },
        {
          stepNum: 7,
          eq: "\\implies",
          rhs: "x = 5^{\\textcolor{#fbbf24}{\\mathbf{3}}}",
          isFinal: false
        },
        {
          stepNum: 8,
          eq: "\\implies",
          rhs: "\\fcolorbox{#10b981}{#064e3b}{$\\textcolor{#6ee7b7}{x = 125}$}",
          isFinal: true
        }
      ]
    },
    {
      id: 10,
      set: "Set A",
      category: "Simulasi Mandiri",
      title: "Soal 10 — Set A",
      prompt: "Jika ${}^2\\log 3 = a$ dan ${}^3\\log 5 = b$, tentukan nilai dari:",
      hint: "💡 Basis baru = Stasiun awal keberangkatan transit kereta: $2 \\to 3 \\to 5$ (pilih basis $2$)",
      layout: "two-column",
      columns: [
        { badge: "Pengubahan Basis & Faktorisasi", badgeColor: "cyan", stepCount: 4 },
        { badge: "Transit Kereta & Aljabar", badgeColor: "amber", stepCount: 4 }
      ],
      initialLHS: "{}^6\\log 45 = \\dots",
      steps: [
        {
          stepNum: 1,
          eq: "=",
          rhs: "\\frac{{}^2\\log \\textcolor{#fbbf24}{45}}{{{}^2\\log \\textcolor{#38bdf8}{6}}}",
          isFinal: false
        },
        {
          stepNum: 2,
          eq: "=",
          rhs: "\\frac{{}^2\\log(9 \\cdot 5)}{{}^2\\log(2 \\cdot 3)}",
          isFinal: false
        },
        {
          stepNum: 3,
          eq: "=",
          rhs: "\\frac{{}^2\\log 9 + {}^2\\log 5}{{}^2\\log 2 + {}^2\\log 3}",
          isFinal: false
        },
        {
          stepNum: 4,
          eq: "=",
          rhs: "\\frac{{}^2\\log(3^{\\textcolor{#fbbf24}{\\mathbf{2}}}) + {}^2\\log 5}{{}^2\\log 2 + {}^2\\log 3}",
          isFinal: false
        },
        {
          stepNum: 5,
          eq: "=",
          rhs: "\\frac{\\textcolor{#fbbf24}{\\mathbf{2}} \\cdot {}^2\\log 3 + {}^2\\log 5}{1 + {}^2\\log 3}",
          isFinal: false
        },
        {
          stepNum: 6,
          eq: "=",
          rhs: "\\frac{2 \\cdot {}^2\\log 3 + ({}^2\\log 3 \\cdot {}^3\\log 5)}{1 + {}^2\\log 3}",
          isFinal: false
        },
        {
          stepNum: 7,
          eq: "=",
          rhs: "\\frac{2(a) + (a)(b)}{1 + a}",
          isFinal: false
        },
        {
          stepNum: 8,
          eq: "=",
          rhs: "\\fcolorbox{#10b981}{#064e3b}{$\\textcolor{#6ee7b7}{\\frac{2a + ab}{a + 1}}$}",
          isFinal: true
        }
      ]
    }
  ],
  setB: [
    {
      id: 1,
      set: "Set B",
      category: "Penguatan Cermin",
      title: "Soal 1 — Set B",
      prompt: "Tentukan nilai dari:",
      initialLHS: "{}^{27}\\log 81",
      steps: [
        {
          stepNum: 1,
          position: "beside",
          eq: "=",
          rhs: "{}^{3^{\\textcolor{#38bdf8}{\\mathbf{3}}}}\\log 3^{\\textcolor{#fbbf24}{\\mathbf{4}}}",
          isFinal: false
        },
        {
          stepNum: 2,
          position: "newline",
          eq: "=",
          rhs: "\\frac{\\textcolor{#fbbf24}{\\mathbf{4}}}{\\textcolor{#38bdf8}{\\mathbf{3}}} \\cdot {}^3\\log 3",
          isFinal: false
        },
        {
          stepNum: 3,
          position: "newline",
          eq: "=",
          rhs: "\\frac{4}{3} \\cdot 1",
          isFinal: false
        },
        {
          stepNum: 4,
          position: "newline",
          eq: "=",
          rhs: "\\fcolorbox{#10b981}{#064e3b}{$\\textcolor{#6ee7b7}{\\frac{4}{3}}$}",
          isFinal: true
        }
      ]
    },
    {
      id: 2,
      set: "Set B",
      category: "Penguatan Cermin",
      title: "Soal 2 — Set B",
      prompt: "Tentukan nilai dari:",
      initialLHS: "9^{{}^3\\log 6} - 8^{{}^2\\log 3}",
      layout: "split-combine",
      totalSteps: 13,
      split: {
        left: {
          badge: "Suku Pertama",
          badgeColor: "cyan",
          initialLHS: "9^{{}^3\\log 6}",
          steps: [
            { stepNum: 1, eq: "=", rhs: "(3^{\\textcolor{#38bdf8}{\\mathbf{2}}})^{{}^3\\log 6}" },
            { stepNum: 2, eq: "=", rhs: "3^{\\textcolor{#38bdf8}{\\mathbf{2}} \\cdot {}^3\\log 6}" },
            { stepNum: 3, eq: "=", rhs: "3^{{}^3\\log 6^{\\textcolor{#38bdf8}{\\mathbf{2}}}}" },
            { stepNum: 4, eq: "=", rhs: "6^{\\textcolor{#38bdf8}{\\mathbf{2}}}" },
            { stepNum: 5, eq: "=", rhs: "\\textcolor{#38bdf8}{\\mathbf{36}}", isSubFinal: true }
          ]
        },
        right: {
          badge: "Suku Kedua",
          badgeColor: "amber",
          initialLHS: "8^{{}^2\\log 3}",
          steps: [
            { stepNum: 6, eq: "=", rhs: "(2^{\\textcolor{#fbbf24}{\\mathbf{3}}})^{{}^2\\log 3}" },
            { stepNum: 7, eq: "=", rhs: "2^{\\textcolor{#fbbf24}{\\mathbf{3}} \\cdot {}^2\\log 3}" },
            { stepNum: 8, eq: "=", rhs: "2^{{}^2\\log 3^{\\textcolor{#fbbf24}{\\mathbf{3}}}}" },
            { stepNum: 9, eq: "=", rhs: "3^{\\textcolor{#fbbf24}{\\mathbf{3}}}" },
            { stepNum: 10, eq: "=", rhs: "\\textcolor{#fbbf24}{\\mathbf{27}}", isSubFinal: true }
          ]
        },
        combine: {
          badge: "Penggabungan & Hasil Akhir",
          badgeColor: "emerald",
          initialLHS: "9^{{}^3\\log 6} - 8^{{}^2\\log 3}",
          lhsStepNum: 11,
          steps: [
            { stepNum: 12, eq: "=", rhs: "\\textcolor{#38bdf8}{\\mathbf{36}} - \\textcolor{#fbbf24}{\\mathbf{27}}" },
            { stepNum: 13, eq: "=", rhs: "\\fcolorbox{#10b981}{#064e3b}{$\\textcolor{#6ee7b7}{9}$}", isFinal: true }
          ]
        }
      }
    },
    {
      id: 3,
      set: "Set B",
      category: "Penguatan Cermin",
      title: "Soal 3 — Set B",
      prompt: "Tentukan hasil dari:",
      layout: "stacked",
      initialLHS: "{}^3\\log 5 \\cdot {}^2\\log 9 \\cdot {}^5\\log 8 = \\dots",
      steps: [
        {
          stepNum: 1,
          eq: "=",
          rhs: "{}^2\\log 9 \\cdot {}^3\\log \\textcolor{#38bdf8}{\\mathbf{5}} \\cdot {}^{\\textcolor{#38bdf8}{\\mathbf{5}}}\\log 8",
          isFinal: false
        },
        {
          stepNum: 2,
          eq: "=",
          rhs: "{}^2\\log(3^{\\textcolor{#fbbf24}{\\mathbf{2}}}) \\cdot {}^3\\log 8",
          isFinal: false
        },
        {
          stepNum: 3,
          eq: "=",
          rhs: "\\textcolor{#fbbf24}{\\mathbf{2}} \\cdot {}^2\\log \\textcolor{#38bdf8}{\\mathbf{3}} \\cdot {}^{\\textcolor{#38bdf8}{\\mathbf{3}}}\\log 8",
          isFinal: false
        },
        {
          stepNum: 4,
          eq: "=",
          rhs: "2 \\cdot {}^2\\log 8",
          isFinal: false
        },
        {
          stepNum: 5,
          eq: "=",
          rhs: "2 \\cdot 3",
          isFinal: false
        },
        {
          stepNum: 6,
          eq: "=",
          rhs: "\\fcolorbox{#10b981}{#064e3b}{$\\textcolor{#6ee7b7}{6}$}",
          isFinal: true
        }
      ]
    },
    {
      id: 4,
      set: "Set B",
      category: "Penguatan Cermin",
      title: "Soal 4 — Set B",
      prompt: "Tentukan nilai dari:",
      layout: "two-column",
      columns: [
        { badge: "Sifat Pembagian Numerus", badgeColor: "cyan", stepCount: 2 },
        { badge: "Penarikan Pangkat & Hasil", badgeColor: "amber", stepCount: 4 }
      ],
      initialLHS: "{}^2\\log 48 - {}^2\\log 3 = \\dots",
      steps: [
        {
          stepNum: 1,
          eq: "=",
          rhs: "{}^2\\log\\left(\\frac{48}{\\textcolor{#f87171}{3}}\\right)",
          isFinal: false
        },
        {
          stepNum: 2,
          eq: "=",
          rhs: "{}^2\\log 16",
          isFinal: false
        },
        {
          stepNum: 3,
          eq: "=",
          rhs: "{}^2\\log(2^{\\textcolor{#fbbf24}{\\mathbf{4}}})",
          isFinal: false
        },
        {
          stepNum: 4,
          eq: "=",
          rhs: "\\textcolor{#fbbf24}{\\mathbf{4}} \\cdot {}^2\\log 2",
          isFinal: false
        },
        {
          stepNum: 5,
          eq: "=",
          rhs: "4 \\cdot 1",
          isFinal: false
        },
        {
          stepNum: 6,
          eq: "=",
          rhs: "\\fcolorbox{#10b981}{#064e3b}{$\\textcolor{#6ee7b7}{4}$}",
          isFinal: true
        }
      ]
    },
    {
      id: 5,
      set: "Set B",
      category: "Penguatan Cermin",
      title: "Soal 5 — Set B",
      prompt: "Jika ${}^3\\log 2 = p$ dan ${}^3\\log 5 = q$, tentukan nilai dari:",
      layout: "stacked",
      initialLHS: "{}^3\\log 20 = \\dots",
      steps: [
        {
          stepNum: 1,
          eq: "=",
          rhs: "{}^3\\log(4 \\cdot 5)",
          isFinal: false
        },
        {
          stepNum: 2,
          eq: "=",
          rhs: "{}^3\\log 4 + {}^3\\log 5",
          isFinal: false
        },
        {
          stepNum: 3,
          eq: "=",
          rhs: "{}^3\\log(2^{\\textcolor{#fbbf24}{\\mathbf{2}}}) + {}^3\\log 5",
          isFinal: false
        },
        {
          stepNum: 4,
          eq: "=",
          rhs: "\\textcolor{#fbbf24}{\\mathbf{2}} \\cdot {}^3\\log 2 + {}^3\\log 5",
          isFinal: false
        },
        {
          stepNum: 5,
          eq: "=",
          rhs: "2 \\cdot p + q",
          isFinal: false
        },
        {
          stepNum: 6,
          eq: "=",
          rhs: "\\fcolorbox{#10b981}{#064e3b}{$\\textcolor{#6ee7b7}{2p + q}$}",
          isFinal: true
        }
      ]
    },
    {
      id: 6,
      set: "Set B",
      category: "Penguatan Cermin",
      title: "Soal 6 — Set B",
      prompt: "Sederhanakan bentuk berikut:",
      layout: "two-column",
      columns: [
        { badge: "Sifat Operasi Numerus", badgeColor: "cyan", stepCount: 3 },
        { badge: "Penarikan Pangkat & Hasil", badgeColor: "amber", stepCount: 4 }
      ],
      initialLHS: "{}^3\\log 15 + {}^3\\log 6 + {}^3\\log 3 - {}^3\\log 10 = \\dots",
      steps: [
        {
          stepNum: 1,
          eq: "=",
          rhs: "{}^3\\log\\left(\\frac{15 \\cdot 6 \\cdot 3}{\\textcolor{#f87171}{10}}\\right)",
          isFinal: false
        },
        {
          stepNum: 2,
          eq: "=",
          rhs: "{}^3\\log\\left(\\frac{270}{10}\\right)",
          isFinal: false
        },
        {
          stepNum: 3,
          eq: "=",
          rhs: "{}^3\\log 27",
          isFinal: false
        },
        {
          stepNum: 4,
          eq: "=",
          rhs: "{}^3\\log(3^{\\textcolor{#fbbf24}{\\mathbf{3}}})",
          isFinal: false
        },
        {
          stepNum: 5,
          eq: "=",
          rhs: "\\textcolor{#fbbf24}{\\mathbf{3}} \\cdot {}^3\\log 3",
          isFinal: false
        },
        {
          stepNum: 6,
          eq: "=",
          rhs: "3 \\cdot 1",
          isFinal: false
        },
        {
          stepNum: 7,
          eq: "=",
          rhs: "\\fcolorbox{#10b981}{#064e3b}{$\\textcolor{#6ee7b7}{3}$}",
          isFinal: true
        }
      ]
    },
    {
      id: 7,
      set: "Set B",
      category: "Penguatan Cermin",
      title: "Soal 7 — Set B",
      prompt: "Sederhanakan bentuk pecahan:",
      layout: "stacked",
      initialLHS: "\\frac{({}^3\\log p)^2 - ({}^3\\log q)^2}{{}^3\\log p + {}^3\\log q} = \\dots",
      steps: [
        {
          stepNum: 1,
          eq: "=",
          rhs: "\\frac{\\textcolor{#38bdf8}{({}^3\\log p + {}^3\\log q)}({}^3\\log p - {}^3\\log q)}{\\textcolor{#38bdf8}{({}^3\\log p + {}^3\\log q)}}",
          isFinal: false
        },
        {
          stepNum: 2,
          eq: "=",
          rhs: "{}^3\\log p - {}^3\\log q",
          isFinal: false
        },
        {
          stepNum: 3,
          eq: "=",
          rhs: "{}^3\\log\\left(\\frac{p}{q}\\right)",
          isFinal: false
        },
        {
          stepNum: 4,
          eq: "=",
          rhs: "\\fcolorbox{#10b981}{#064e3b}{$\\textcolor{#6ee7b7}{{}^3\\log\\left(\\frac{p}{q}\\right)}$}",
          isFinal: true
        }
      ]
    },
    {
      id: 8,
      set: "Set B",
      category: "Penguatan Cermin",
      title: "Soal 8 — Set B",
      prompt: "Tentukan nilai $k$ jika:",
      layout: "two-column",
      columns: [
        { badge: "Sifat Logaritma", badgeColor: "cyan" },
        { badge: "Penyelesaian Aljabar", badgeColor: "amber" }
      ],
      initialLHS: "{}^x\\log(2k + 1) \\cdot {}^3\\log x = 4",
      steps: [
        {
          stepNum: 1,
          eq: "\\implies",
          rhs: "{}^3\\log \\textcolor{#38bdf8}{x} \\cdot {}^{\\textcolor{#38bdf8}{x}}\\log(2k + 1) = 4",
          isFinal: false
        },
        {
          stepNum: 2,
          eq: "\\implies",
          rhs: "{}^3\\log(2k + 1) = 4",
          isFinal: false
        },
        {
          stepNum: 3,
          eq: "\\implies",
          rhs: "2k + 1 = 3^{\\textcolor{#fbbf24}{\\mathbf{4}}}",
          isFinal: false
        },
        {
          stepNum: 4,
          eq: "\\implies",
          rhs: "2k + 1 = 81",
          isFinal: false
        },
        {
          stepNum: 5,
          eq: "\\implies",
          rhs: "2k = 81 - 1",
          isFinal: false
        },
        {
          stepNum: 6,
          eq: "\\implies",
          rhs: "2k = 80",
          isFinal: false
        },
        {
          stepNum: 7,
          eq: "\\implies",
          rhs: "k = \\frac{80}{2}",
          isFinal: false
        },
        {
          stepNum: 8,
          eq: "\\implies",
          rhs: "\\fcolorbox{#10b981}{#064e3b}{$\\textcolor{#6ee7b7}{k = 40}$}",
          isFinal: true
        }
      ]
    },
    {
      id: 9,
      set: "Set B",
      category: "Penguatan Cermin",
      title: "Soal 9 — Set B",
      prompt: "Tentukan nilai $x$ jika:",
      layout: "two-column",
      columns: [
        { badge: "Sifat Logaritma Rantai", badgeColor: "cyan" },
        { badge: "Menentukan Nilai x", badgeColor: "amber" }
      ],
      initialLHS: "{}^3\\log x \\cdot {}^2\\log 9 = 8",
      steps: [
        {
          stepNum: 1,
          eq: "\\implies",
          rhs: "{}^2\\log 9 \\cdot {}^3\\log x = 8",
          isFinal: false
        },
        {
          stepNum: 2,
          eq: "\\implies",
          rhs: "{}^2\\log(3^{\\textcolor{#fbbf24}{\\mathbf{2}}}) \\cdot {}^3\\log x = 8",
          isFinal: false
        },
        {
          stepNum: 3,
          eq: "\\implies",
          rhs: "\\textcolor{#fbbf24}{\\mathbf{2}} \\cdot {}^2\\log \\textcolor{#38bdf8}{\\mathbf{3}} \\cdot {}^{\\textcolor{#38bdf8}{\\mathbf{3}}}\\log x = 8",
          isFinal: false
        },
        {
          stepNum: 4,
          eq: "\\implies",
          rhs: "2 \\cdot {}^2\\log x = 8",
          isFinal: false
        },
        {
          stepNum: 5,
          eq: "\\implies",
          rhs: "{}^2\\log x = \\frac{8}{2}",
          isFinal: false
        },
        {
          stepNum: 6,
          eq: "\\implies",
          rhs: "{}^2\\log x = 4",
          isFinal: false
        },
        {
          stepNum: 7,
          eq: "\\implies",
          rhs: "x = 2^{\\textcolor{#fbbf24}{\\mathbf{4}}}",
          isFinal: false
        },
        {
          stepNum: 8,
          eq: "\\implies",
          rhs: "\\fcolorbox{#10b981}{#064e3b}{$\\textcolor{#6ee7b7}{x = 16}$}",
          isFinal: true
        }
      ]
    },
    {
      id: 10,
      set: "Set B",
      category: "Penguatan Cermin",
      title: "Soal 10 — Set B",
      prompt: "Jika ${}^5\\log 3 = p$ dan ${}^3\\log 2 = q$, tentukan nilai dari:",
      hint: "💡 Basis baru = Stasiun awal keberangkatan transit kereta: $5 \\to 3 \\to 2$ (pilih basis $5$)",
      layout: "two-column",
      columns: [
        { badge: "Pengubahan Basis & Faktorisasi", badgeColor: "cyan", stepCount: 4 },
        { badge: "Transit Kereta & Aljabar", badgeColor: "amber", stepCount: 4 }
      ],
      initialLHS: "{}^{15}\\log 20 = \\dots",
      steps: [
        {
          stepNum: 1,
          eq: "=",
          rhs: "\\frac{{}^5\\log \\textcolor{#fbbf24}{20}}{{{}^5\\log \\textcolor{#38bdf8}{15}}}",
          isFinal: false
        },
        {
          stepNum: 2,
          eq: "=",
          rhs: "\\frac{{}^5\\log(4 \\cdot 5)}{{}^5\\log(3 \\cdot 5)}",
          isFinal: false
        },
        {
          stepNum: 3,
          eq: "=",
          rhs: "\\frac{{}^5\\log 4 + {}^5\\log 5}{{}^5\\log 3 + {}^5\\log 5}",
          isFinal: false
        },
        {
          stepNum: 4,
          eq: "=",
          rhs: "\\frac{{}^5\\log(2^{\\textcolor{#fbbf24}{\\mathbf{2}}}) + {}^5\\log 5}{{}^5\\log 3 + {}^5\\log 5}",
          isFinal: false
        },
        {
          stepNum: 5,
          eq: "=",
          rhs: "\\frac{\\textcolor{#fbbf24}{\\mathbf{2}} \\cdot {}^5\\log 2 + 1}{{}^5\\log 3 + 1}",
          isFinal: false
        },
        {
          stepNum: 6,
          eq: "=",
          rhs: "\\frac{2 \\cdot ({}^5\\log 3 \\cdot {}^3\\log 2) + 1}{{}^5\\log 3 + 1}",
          isFinal: false
        },
        {
          stepNum: 7,
          eq: "=",
          rhs: "\\frac{2(p \\cdot q) + 1}{p + 1}",
          isFinal: false
        },
        {
          stepNum: 8,
          eq: "=",
          rhs: "\\fcolorbox{#10b981}{#064e3b}{$\\textcolor{#6ee7b7}{\\frac{2pq + 1}{p + 1}}$}",
          isFinal: true
        }
      ]
    }
  ],
  setUH: [
    {
      id: 1,
      set: "UH Asli",
      category: "Naskah Resmi",
      title: "Soal 1 — UH Asli",
      prompt: "Tentukan nilai dari:",
      initialLHS: "{}^{16}\\log 64",
      steps: [
        {
          stepNum: 1,
          position: "beside",
          eq: "=",
          rhs: "{}^{2^{\\textcolor{#38bdf8}{\\mathbf{4}}}} \\log 2^{\\textcolor{#fbbf24}{\\mathbf{6}}}",
          isFinal: false
        },
        {
          stepNum: 2,
          position: "newline",
          eq: "=",
          rhs: "\\frac{\\textcolor{#fbbf24}{\\mathbf{6}}}{\\textcolor{#38bdf8}{\\mathbf{4}}} \\cdot {}^2\\log 2",
          isFinal: false
        },
        {
          stepNum: 3,
          position: "newline",
          eq: "=",
          rhs: "\\frac{3}{2} \\cdot 1",
          isFinal: false
        },
        {
          stepNum: 4,
          position: "newline",
          eq: "=",
          rhs: "\\fcolorbox{#10b981}{#064e3b}{$\\textcolor{#6ee7b7}{\\frac{3}{2}}$}",
          isFinal: true
        }
      ]
    },
    {
      id: 2,
      set: "UH Asli",
      category: "Naskah Resmi",
      title: "Soal 2 — UH Asli",
      prompt: "Tentukan nilai dari:",
      initialLHS: "9^{{}^3\\log 5} + 4^{{}^2\\log 1}",
      layout: "split-combine",
      totalSteps: 13,
      split: {
        left: {
          badge: "Suku Pertama",
          badgeColor: "cyan",
          initialLHS: "9^{{}^3\\log 5}",
          steps: [
            { stepNum: 1, eq: "=", rhs: "(3^{\\textcolor{#38bdf8}{\\mathbf{2}}})^{{}^3\\log 5}" },
            { stepNum: 2, eq: "=", rhs: "3^{\\textcolor{#38bdf8}{\\mathbf{2}} \\cdot {}^3\\log 5}" },
            { stepNum: 3, eq: "=", rhs: "3^{{}^3\\log(5^{\\textcolor{#38bdf8}{\\mathbf{2}}})}" },
            { stepNum: 4, eq: "=", rhs: "5^{\\textcolor{#38bdf8}{\\mathbf{2}}}" },
            { stepNum: 5, eq: "=", rhs: "\\textcolor{#38bdf8}{\\mathbf{25}}", isSubFinal: true }
          ]
        },
        right: {
          badge: "Suku Kedua",
          badgeColor: "amber",
          initialLHS: "4^{{}^2\\log 1}",
          steps: [
            { stepNum: 6, eq: "=", rhs: "(2^{\\textcolor{#fbbf24}{\\mathbf{2}}})^{{}^2\\log 1}" },
            { stepNum: 7, eq: "=", rhs: "2^{\\textcolor{#fbbf24}{\\mathbf{2}} \\cdot {}^2\\log 1}" },
            { stepNum: 8, eq: "=", rhs: "2^{{}^2\\log(1^{\\textcolor{#fbbf24}{\\mathbf{2}}})}" },
            { stepNum: 9, eq: "=", rhs: "1^{\\textcolor{#fbbf24}{\\mathbf{2}}}" },
            { stepNum: 10, eq: "=", rhs: "\\textcolor{#fbbf24}{\\mathbf{1}}", isSubFinal: true }
          ]
        },
        combine: {
          badge: "Penggabungan & Hasil Akhir",
          badgeColor: "emerald",
          initialLHS: "9^{{}^3\\log 5} + 4^{{}^2\\log 1}",
          lhsStepNum: 11,
          steps: [
            {
              stepNum: 12,
              eq: "=",
              rhs: "\\textcolor{#38bdf8}{\\mathbf{25}} + \\textcolor{#fbbf24}{\\mathbf{1}}",
              isFinal: false
            },
            {
              stepNum: 13,
              eq: "=",
              rhs: "\\fcolorbox{#10b981}{#064e3b}{$\\textcolor{#6ee7b7}{26}$}",
              isFinal: true
            }
          ]
        }
      }
    },
    {
      id: 3,
      set: "UH Asli",
      category: "Naskah Resmi",
      title: "Soal 3 — UH Asli",
      prompt: "Sederhanakan perkalian logaritma berikut:",
      layout: "stacked",
      initialLHS: "{}^5\\log 3 \\cdot {}^2\\log 25 \\cdot {}^3\\log 16 = \\dots",
      steps: [
        {
          stepNum: 1,
          eq: "=",
          rhs: "{}^5\\log 3 \\cdot {}^2\\log(5^{\\textcolor{#38bdf8}{\\mathbf{2}}}) \\cdot {}^3\\log(2^{\\textcolor{#fbbf24}{\\mathbf{4}}})",
          isFinal: false
        },
        {
          stepNum: 2,
          eq: "=",
          rhs: "{}^5\\log 3 \\cdot (\\textcolor{#38bdf8}{\\mathbf{2}} \\cdot {}^2\\log 5) \\cdot (\\textcolor{#fbbf24}{\\mathbf{4}} \\cdot {}^3\\log 2)",
          isFinal: false
        },
        {
          stepNum: 3,
          eq: "=",
          rhs: "(\\textcolor{#38bdf8}{\\mathbf{2}} \\cdot \\textcolor{#fbbf24}{\\mathbf{4}}) \\cdot ({}^5\\log 3 \\cdot {}^3\\log 2 \\cdot {}^2\\log 5)",
          isFinal: false
        },
        {
          stepNum: 4,
          eq: "=",
          rhs: "8 \\cdot ({}^5\\log 3 \\cdot {}^3\\log 2 \\cdot {}^2\\log 5)",
          isFinal: false
        },
        {
          stepNum: 5,
          eq: "=",
          rhs: "8 \\cdot ({}^5\\log 2 \\cdot {}^2\\log 5)",
          isFinal: false
        },
        {
          stepNum: 6,
          eq: "=",
          rhs: "8 \\cdot {}^5\\log 5",
          isFinal: false
        },
        {
          stepNum: 7,
          eq: "=",
          rhs: "8 \\cdot 1",
          isFinal: false
        },
        {
          stepNum: 8,
          eq: "=",
          rhs: "\\fcolorbox{#10b981}{#064e3b}{$\\textcolor{#6ee7b7}{8}$}",
          isFinal: true
        }
      ]
    },
    {
      id: 4,
      set: "UH Asli",
      category: "Naskah Resmi",
      title: "Soal 4 — UH Asli",
      prompt: "Tentukan nilai dari:",
      layout: "two-column",
      columns: [
        { badge: "Sifat Pembagian Numerus", badgeColor: "cyan", stepCount: 2 },
        { badge: "Penarikan Pangkat & Hasil", badgeColor: "amber", stepCount: 4 }
      ],
      initialLHS: "{}^3\\log 162 - {}^3\\log 6 = \\dots",
      steps: [
        {
          stepNum: 1,
          eq: "=",
          rhs: "{}^3\\log\\left(\\frac{162}{\\textcolor{#f87171}{6}}\\right)",
          isFinal: false
        },
        {
          stepNum: 2,
          eq: "=",
          rhs: "{}^3\\log 27",
          isFinal: false
        },
        {
          stepNum: 3,
          eq: "=",
          rhs: "{}^3\\log(3^{\\textcolor{#fbbf24}{\\mathbf{3}}})",
          isFinal: false
        },
        {
          stepNum: 4,
          eq: "=",
          rhs: "\\textcolor{#fbbf24}{\\mathbf{3}} \\cdot {}^3\\log 3",
          isFinal: false
        },
        {
          stepNum: 5,
          eq: "=",
          rhs: "3 \\cdot 1",
          isFinal: false
        },
        {
          stepNum: 6,
          eq: "=",
          rhs: "\\fcolorbox{#10b981}{#064e3b}{$\\textcolor{#6ee7b7}{3}$}",
          isFinal: true
        }
      ]
    },
    {
      id: 5,
      set: "UH Asli",
      category: "Naskah Resmi",
      title: "Soal 5 — UH Asli",
      prompt: "Jika diketahui ${}^3\\log 2 = a$ dan ${}^3\\log 7 = b$, nyatakan nilai dari:",
      layout: "stacked",
      initialLHS: "{}^3\\log 56 = \\dots",
      steps: [
        {
          stepNum: 1,
          eq: "=",
          rhs: "{}^3\\log(8 \\cdot 7)",
          isFinal: false
        },
        {
          stepNum: 2,
          eq: "=",
          rhs: "{}^3\\log 8 + {}^3\\log 7",
          isFinal: false
        },
        {
          stepNum: 3,
          eq: "=",
          rhs: "{}^3\\log(2^{\\textcolor{#fbbf24}{\\mathbf{3}}}) + {}^3\\log 7",
          isFinal: false
        },
        {
          stepNum: 4,
          eq: "=",
          rhs: "\\textcolor{#fbbf24}{\\mathbf{3}} \\cdot {}^3\\log 2 + {}^3\\log 7",
          isFinal: false
        },
        {
          stepNum: 5,
          eq: "=",
          rhs: "3 \\cdot a + b",
          isFinal: false
        },
        {
          stepNum: 6,
          eq: "=",
          rhs: "\\fcolorbox{#10b981}{#064e3b}{$\\textcolor{#6ee7b7}{3a + b}$}",
          isFinal: true
        }
      ]
    },
    {
      id: 6,
      set: "UH Asli",
      category: "Naskah Resmi",
      title: "Soal 6 — UH Asli",
      prompt: "Hitung nilai dari:",
      layout: "two-column",
      columns: [
        { badge: "Sifat Operasi Numerus", badgeColor: "cyan", stepCount: 3 },
        { badge: "Penarikan Pangkat & Hasil", badgeColor: "amber", stepCount: 4 }
      ],
      initialLHS: "{}^2\\log 48 + {}^2\\log 6 - {}^2\\log 18 + {}^2\\log 2 = \\dots",
      steps: [
        {
          stepNum: 1,
          eq: "=",
          rhs: "{}^2\\log\\left(\\frac{48 \\cdot 6 \\cdot 2}{\\textcolor{#f87171}{18}}\\right)",
          isFinal: false
        },
        {
          stepNum: 2,
          eq: "=",
          rhs: "{}^2\\log\\left(\\frac{576}{18}\\right)",
          isFinal: false
        },
        {
          stepNum: 3,
          eq: "=",
          rhs: "{}^2\\log 32",
          isFinal: false
        },
        {
          stepNum: 4,
          eq: "=",
          rhs: "{}^2\\log(2^{\\textcolor{#fbbf24}{\\mathbf{5}}})",
          isFinal: false
        },
        {
          stepNum: 5,
          eq: "=",
          rhs: "\\textcolor{#fbbf24}{\\mathbf{5}} \\cdot {}^2\\log 2",
          isFinal: false
        },
        {
          stepNum: 6,
          eq: "=",
          rhs: "5 \\cdot 1",
          isFinal: false
        },
        {
          stepNum: 7,
          eq: "=",
          rhs: "\\fcolorbox{#10b981}{#064e3b}{$\\textcolor{#6ee7b7}{5}$}",
          isFinal: true
        }
      ]
    },
    {
      id: 7,
      set: "UH Asli",
      category: "Naskah Resmi",
      title: "Soal 7 — UH Asli",
      prompt: "Sederhanakan bentuk pecahan aljabar logaritma berikut:",
      layout: "stacked",
      initialLHS: "\\frac{({}^2\\log a)^2 - ({}^2\\log b)^2}{{}^2\\log a + {}^2\\log b} = \\dots",
      steps: [
        {
          stepNum: 1,
          eq: "=",
          rhs: "\\frac{({}^2\\log a + {}^2\\log b)({}^2\\log a - {}^2\\log b)}{{}^2\\log a + {}^2\\log b}",
          isFinal: false
        },
        {
          stepNum: 2,
          eq: "=",
          rhs: "\\frac{\\textcolor{#38bdf8}{({}^2\\log a + {}^2\\log b)}({}^2\\log a - {}^2\\log b)}{\\textcolor{#38bdf8}{({}^2\\log a + {}^2\\log b)}}",
          isFinal: false
        },
        {
          stepNum: 3,
          eq: "=",
          rhs: "{}^2\\log a - {}^2\\log b",
          isFinal: false
        },
        {
          stepNum: 4,
          eq: "=",
          rhs: "\\fcolorbox{#10b981}{#064e3b}{$\\textcolor{#6ee7b7}{{}^2\\log\\left(\\frac{a}{b}\\right)}$}",
          isFinal: true
        }
      ]
    },
    {
      id: 8,
      set: "UH Asli",
      category: "Naskah Resmi",
      title: "Soal 8 — UH Asli",
      prompt: "Tentukan nilai $n$ yang memenuhi persamaan logaritma:",
      layout: "two-column",
      columns: [
        { badge: "Sifat Logaritma", badgeColor: "cyan", stepCount: 4 },
        { badge: "Penyelesaian Aljabar", badgeColor: "amber", stepCount: 4 }
      ],
      initialLHS: "{}^y\\log(4n + 5) \\cdot {}^5\\log y = 2",
      steps: [
        {
          stepNum: 1,
          eq: "\\implies",
          rhs: "{}^5\\log y \\cdot {}^y\\log(4n + 5) = 2",
          isFinal: false
        },
        {
          stepNum: 2,
          eq: "\\implies",
          rhs: "{}^5\\log \\textcolor{#38bdf8}{y} \\cdot {}^{\\textcolor{#38bdf8}{y}}\\log(4n + 5) = 2",
          isFinal: false
        },
        {
          stepNum: 3,
          eq: "\\implies",
          rhs: "{}^5\\log(4n + 5) = 2",
          isFinal: false
        },
        {
          stepNum: 4,
          eq: "\\implies",
          rhs: "4n + 5 = 5^{\\textcolor{#fbbf24}{\\mathbf{2}}}",
          isFinal: false
        },
        {
          stepNum: 5,
          eq: "\\implies",
          rhs: "4n + 5 = 25",
          isFinal: false
        },
        {
          stepNum: 6,
          eq: "\\implies",
          rhs: "4n = 25 - 5",
          isFinal: false
        },
        {
          stepNum: 7,
          eq: "\\implies",
          rhs: "4n = 20",
          isFinal: false
        },
        {
          stepNum: 8,
          eq: "\\implies",
          rhs: "\\fcolorbox{#10b981}{#064e3b}{$\\textcolor{#6ee7b7}{n = 5}$}",
          isFinal: true
        }
      ]
    },
    {
      id: 9,
      set: "UH Asli",
      category: "Naskah Resmi",
      title: "Soal 9 — UH Asli",
      prompt: "Tentukan nilai $x$ yang memenuhi persamaan logaritma berikut:",
      layout: "two-column",
      columns: [
        { badge: "Sifat Logaritma", badgeColor: "cyan", stepCount: 4 },
        { badge: "Penyelesaian Aljabar", badgeColor: "amber", stepCount: 4 }
      ],
      initialLHS: "{}^3\\log x \\cdot {}^2\\log 27 = 9",
      steps: [
        {
          stepNum: 1,
          eq: "\\implies",
          rhs: "{}^3\\log x \\cdot {}^2\\log(3^{\\textcolor{#fbbf24}{\\mathbf{3}}}) = 9",
          isFinal: false
        },
        {
          stepNum: 2,
          eq: "\\implies",
          rhs: "{}^3\\log x \\cdot (\\textcolor{#fbbf24}{\\mathbf{3}} \\cdot {}^2\\log 3) = 9",
          isFinal: false
        },
        {
          stepNum: 3,
          eq: "\\implies",
          rhs: "3 \\cdot ({}^2\\log 3 \\cdot {}^3\\log x) = 9",
          isFinal: false
        },
        {
          stepNum: 4,
          eq: "\\implies",
          rhs: "3 \\cdot {}^2\\log x = 9",
          isFinal: false
        },
        {
          stepNum: 5,
          eq: "\\implies",
          rhs: "{}^2\\log x = \\frac{9}{3}",
          isFinal: false
        },
        {
          stepNum: 6,
          eq: "\\implies",
          rhs: "{}^2\\log x = 3",
          isFinal: false
        },
        {
          stepNum: 7,
          eq: "\\implies",
          rhs: "x = 2^{\\textcolor{#fbbf24}{\\mathbf{3}}}",
          isFinal: false
        },
        {
          stepNum: 8,
          eq: "\\implies",
          rhs: "\\fcolorbox{#10b981}{#064e3b}{$\\textcolor{#6ee7b7}{x = 8}$}",
          isFinal: true
        }
      ]
    },
    {
      id: 10,
      set: "UH Asli",
      category: "Naskah Resmi",
      title: "Soal 10 — UH Asli",
      prompt: "Jika diketahui ${}^2\\log 5 = a$ dan ${}^5\\log 3 = b$, tentukan nilai dari:",
      hint: "💡 Basis baru = Stasiun awal keberangkatan transit kereta: $2 \\to 5 \\to 3$ (pilih basis $2$)",
      layout: "two-column",
      columns: [
        { badge: "Pengubahan Basis & Faktorisasi", badgeColor: "cyan", stepCount: 4 },
        { badge: "Transit Kereta & Aljabar", badgeColor: "amber", stepCount: 4 }
      ],
      initialLHS: "{}^{12}\\log 20 = \\dots",
      steps: [
        {
          stepNum: 1,
          eq: "=",
          rhs: "\\frac{{}^2\\log \\textcolor{#fbbf24}{20}}{{{}^2\\log \\textcolor{#38bdf8}{12}}}",
          isFinal: false
        },
        {
          stepNum: 2,
          eq: "=",
          rhs: "\\frac{{}^2\\log(4 \\cdot 5)}{{}^2\\log(4 \\cdot 3)}",
          isFinal: false
        },
        {
          stepNum: 3,
          eq: "=",
          rhs: "\\frac{{}^2\\log 4 + {}^2\\log 5}{{}^2\\log 4 + {}^2\\log 3}",
          isFinal: false
        },
        {
          stepNum: 4,
          eq: "=",
          rhs: "\\frac{{}^2\\log(2^{\\textcolor{#fbbf24}{\\mathbf{2}}}) + {}^2\\log 5}{{}^2\\log(2^{\\textcolor{#fbbf24}{\\mathbf{2}}}) + {}^2\\log 3}",
          isFinal: false
        },
        {
          stepNum: 5,
          eq: "=",
          rhs: "\\frac{2 + {}^2\\log 5}{2 + {}^2\\log 3}",
          isFinal: false
        },
        {
          stepNum: 6,
          eq: "=",
          rhs: "\\frac{2 + {}^2\\log 5}{2 + ({}^2\\log 5 \\cdot {}^5\\log 3)}",
          isFinal: false
        },
        {
          stepNum: 7,
          eq: "=",
          rhs: "\\frac{2 + a}{2 + (a)(b)}",
          isFinal: false
        },
        {
          stepNum: 8,
          eq: "=",
          rhs: "\\fcolorbox{#10b981}{#064e3b}{$\\textcolor{#6ee7b7}{\\frac{2 + a}{2 + ab}}$}",
          isFinal: true
        }
      ]
    }
  ]
};
