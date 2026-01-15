/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FFD700", // amarelo principal (dourado)
          light: "#FFEB7A", // amarelo claro
          dark: "#B29500", // amarelo escuro
        },
        secondary: {
          DEFAULT: "#800080", // roxo principal
          light: "#A259D9", // roxo claro
          dark: "#4B0053", // roxo escuro
        },
        background: {
          dark: "#4B0053", // fundo roxo escuro
          light: "#F8F6FF", // quase branco com leve roxo
        },
        accent: {
          yellow: "#FFD700",
          purple: "#800080",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
