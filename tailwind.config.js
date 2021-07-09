module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        title: ["MajorMonoDisplay"],
        text: ["Inconsolata"],
      },
      colors: {
        malibu: "#55a9dd",
        lavender: "#c7c3da",
        illusion: "#f39bbd",
        ruby: "#e91f6f",
        governor: "#5056a1",
        light: "#fbfbfd",
        "black-light": "#151516",
        "black-xlight": "#1d1d1f",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-debug-screens"),
    require("tailwind-filter-utilities"),
  ],
};
