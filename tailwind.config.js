/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        cormorant: ['"Cormorant Garamond"', "serif"],
        sans: ["Poppins", "sans-serif"],
        script: ['"Great Vibes"', "cursive"],
        parisienne: ['"Parisienne"', "cursive"],
      },
      colors: {
        cream: "#FFF4F9",
        "cream-dark": "#FFE2EE",
        rose: {
          soft: "#FFD0E2",
          DEFAULT: "#E875A5",
          deep: "#B82967",
        },
        gold: {
          light: "#FFD8E8",
          DEFAULT: "#C94F7E",
          deep: "#A72C62",
        },
        ink: "#65233F",
        sage: "#8FA68E",
      },
      backgroundImage: {
        "floral-pattern": "url('/images/pattern-floral.png')",
        "paper-texture": "url('/images/paper-texture.png')",
      },
      animation: {
        "fade-in": "fadeIn 1.2s ease-in-out",
        float: "float 4s ease-in-out infinite",
        "float-slow": "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
