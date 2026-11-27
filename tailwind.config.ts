import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FFFFFF",
        "bg-subtle": "#F8F9FA",
        ink: "#232C3B",
        "ink-muted": "#57646C",
        navy: {
          DEFAULT: "#1B367B",
          hover: "#16295F",
        },
        ash: "#E2E5E8",
        cream: "#F0E7D5",
        "cream-border": "#D8CCB4",
        "cream-muted": "#6F6A5C",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(5px)" },
        },
      },
      animation: {
        bob: "bob 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
