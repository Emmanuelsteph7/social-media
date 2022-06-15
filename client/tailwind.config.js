module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        section: "80vh",
        "600px": "600px",
      },
      minHeight: {
        section: "80vh",
        60: "60vh",
        "600px": "600px",
      },
      colors: {
        primary: "#1a1a2a",
        primaryLight: "#252032",
        secondary: "#f14e23",
        tertiary: "#324285",
        body: "#1a1a2a",
        danger: "#df4759",
        offWhite: "#f8f0e3",
      },
    },
  },
  plugins: [],
};
