/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        akaya: ["Akaya Telivigala", "system-ui"],
      },
      animation: {
        spin: "spin 4s linear infinite reverse",
      },
    },
  },
  plugins: [],
};
