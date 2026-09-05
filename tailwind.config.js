/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { page: "var(--surface-page)", surface: "var(--surface-card)", cultural: "var(--surface-cultural)", ink: "var(--text-primary)", muted: "var(--text-secondary)", action: "var(--action-primary)", terracotta: "var(--brand-terracotta)", route: "var(--route-green)", info: "var(--info-blue)", reward: "var(--reward-yellow)" },
    fontFamily: { sans: ['Poppins', 'Arial', 'sans-serif'], serif: ['"Inknut Antiqua"', 'Georgia', 'serif'] },
  } }, plugins: [],
};
