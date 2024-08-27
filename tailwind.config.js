module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    fontFamily: {
      sans: [
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
    extend: {
      colors: {
        "base-100": "#fcffe1",
        "base-200": "#dbdec4",
        "base-300": "#bbbea7",
        "base-400": "#7f1d1d", // Fixed duplicate key issue here
      },
      backgroundImage: {
        "hero-pattern": "url('src/assets/background.png')",
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/forms"), // This should work after installation
  ],
  daisyui: {
    themes: [
      "night",
      {
        mytheme: {
          primary: "#0088ff",
          "primary-content": "#000616",
          secondary: "#00b3ff",
          "secondary-content": "#000c16",
          accent: "#00b900",
          "accent-content": "#000d00",
          neutral: "#13161b",
          "neutral-content": "#cacacc",
          "base-content": "#161612",
          info: "#00ceff",
          "info-content": "#000f16",
          success: "#769600",
          "success-content": "#050800",
          warning: "#ffa600",
          "warning-content": "#160a00",
          error: "#f10030",
          "error-content": "#140001",
        },
      },
    ],
  },
};
