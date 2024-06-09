/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        circular: ["CircularStd"],
        sf: ["SF-Pro"],
      },
      colors: {
        "text-content": "#1A0745",
        active: "#9D71FD",
        subTitle: "#5F517D",
        passive: "#A39CB5",
        inactiveTitle: "#543E81",
        border: "#E8E6EC",
        background: "#f3effe",
      },
    },
  },
  plugins: [],
};
