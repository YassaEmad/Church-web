/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        backgroundCo: "var(--backgroundCo)",
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        card: "var(--card)",
        "muted-foreground": "var(--muted-foreground)",
        border: "var(--border)",
        destructive: "var(--destructive)",
      },
    },
  },
  plugins: [],
};

export default config;
