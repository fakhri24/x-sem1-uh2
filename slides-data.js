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
          rhs: "\\fcolorbox{#10b981}{#064e3b}{$\\mathbf{\\textcolor{#6ee7b7}{\\frac{3}{2}}}$}",
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
            { stepNum: 13, eq: "=", rhs: "\\fcolorbox{#10b981}{#064e3b}{$\\mathbf{\\textcolor{#6ee7b7}{17}}$}", isFinal: true }
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
          rhs: "\\fcolorbox{#10b981}{#064e3b}{$\\mathbf{\\textcolor{#6ee7b7}{6}}$}",
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
      initialLHS: "{}^3\\log 108 - {}^3\\log 4",
      steps: []
    },
    {
      id: 5,
      set: "Set A",
      category: "Simulasi Mandiri",
      title: "Soal 5 — Set A",
      prompt: "Jika ${}^2\\log 3 = a$ dan ${}^2\\log 7 = b$, tentukan nilai dari:",
      initialLHS: "{}^2\\log 63",
      steps: []
    },
    {
      id: 6,
      set: "Set A",
      category: "Simulasi Mandiri",
      title: "Soal 6 — Set A",
      prompt: "Sederhanakan bentuk berikut:",
      initialLHS: "{}^5\\log 50 - {}^5\\log 8 + {}^5\\log 4 + {}^5\\log 5",
      steps: []
    },
    {
      id: 7,
      set: "Set A",
      category: "Simulasi Mandiri",
      title: "Soal 7 — Set A",
      prompt: "Sederhanakan bentuk pecahan:",
      initialLHS: "\\frac{({}^5\\log x)^2 - ({}^5\\log y)^2}{{}^5\\log x - {}^5\\log y}",
      steps: []
    },
    {
      id: 8,
      set: "Set A",
      category: "Simulasi Mandiri",
      title: "Soal 8 — Set A",
      prompt: "Tentukan nilai $a$ jika:",
      initialLHS: "{}^x\\log(3a - 1) \\cdot {}^5\\log x = 3",
      steps: []
    },
    {
      id: 9,
      set: "Set A",
      category: "Simulasi Mandiri",
      title: "Soal 9 — Set A",
      prompt: "Tentukan nilai $x$ jika:",
      initialLHS: "{}^2\\log x \\cdot {}^5\\log 4 = 6",
      steps: []
    },
    {
      id: 10,
      set: "Set A",
      category: "Simulasi Mandiri",
      title: "Soal 10 — Set A",
      prompt: "Jika ${}^2\\log 3 = a$ dan ${}^3\\log 5 = b$, tentukan nilai dari:",
      initialLHS: "{}^6\\log 45",
      steps: []
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
      steps: []
    },
    {
      id: 2,
      set: "Set B",
      category: "Penguatan Cermin",
      title: "Soal 2 — Set B",
      prompt: "Tentukan nilai dari:",
      initialLHS: "9^{{}^3\\log 6} - 8^{{}^2\\log 3}",
      steps: []
    },
    {
      id: 3,
      set: "Set B",
      category: "Penguatan Cermin",
      title: "Soal 3 — Set B",
      prompt: "Tentukan hasil dari:",
      initialLHS: "{}^3\\log 5 \\cdot {}^2\\log 9 \\cdot {}^5\\log 8",
      steps: []
    },
    {
      id: 4,
      set: "Set B",
      category: "Penguatan Cermin",
      title: "Soal 4 — Set B",
      prompt: "Tentukan nilai dari:",
      initialLHS: "{}^2\\log 48 - {}^2\\log 3",
      steps: []
    },
    {
      id: 5,
      set: "Set B",
      category: "Penguatan Cermin",
      title: "Soal 5 — Set B",
      prompt: "Jika ${}^3\\log 2 = p$ dan ${}^3\\log 5 = q$, tentukan nilai dari:",
      initialLHS: "{}^3\\log 20",
      steps: []
    },
    {
      id: 6,
      set: "Set B",
      category: "Penguatan Cermin",
      title: "Soal 6 — Set B",
      prompt: "Sederhanakan bentuk berikut:",
      initialLHS: "{}^3\\log 15 + {}^3\\log 6 + {}^3\\log 3 - {}^3\\log 10",
      steps: []
    },
    {
      id: 7,
      set: "Set B",
      category: "Penguatan Cermin",
      title: "Soal 7 — Set B",
      prompt: "Sederhanakan bentuk pecahan:",
      initialLHS: "\\frac{({}^3\\log p)^2 - ({}^3\\log q)^2}{{}^3\\log p + {}^3\\log q}",
      steps: []
    },
    {
      id: 8,
      set: "Set B",
      category: "Penguatan Cermin",
      title: "Soal 8 — Set B",
      prompt: "Tentukan nilai $k$ jika:",
      initialLHS: "{}^x\\log(2k + 1) \\cdot {}^3\\log x = 4",
      steps: []
    },
    {
      id: 9,
      set: "Set B",
      category: "Penguatan Cermin",
      title: "Soal 9 — Set B",
      prompt: "Tentukan nilai $x$ jika:",
      initialLHS: "{}^3\\log x \\cdot {}^2\\log 9 = 8",
      steps: []
    },
    {
      id: 10,
      set: "Set B",
      category: "Penguatan Cermin",
      title: "Soal 10 — Set B",
      prompt: "Jika ${}^5\\log 3 = p$ dan ${}^3\\log 2 = q$, tentukan nilai dari:",
      initialLHS: "{}^{15}\\log 20",
      steps: []
    }
  ]
};
