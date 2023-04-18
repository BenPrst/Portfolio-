/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        coal: "url('./coal.jpg')",
        coaltower: "url('./coaltower.jpg')",
        mixer: "url('./mixer.jpg')",
        cinema: "url('./cinema.jpg')",
      },
    },
  },
  plugins: [],
};
