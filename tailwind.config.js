/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",

          secondary: "#19D3AE",

          accent: "##3A4256",

          neutral: "#021431",

          "base-100": "#ffffff",

          info: "#93e6fb",

          success: "#80ced1",

          warning: "#efd8bd",

          error: "#e58b8b",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
