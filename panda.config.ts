import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  presets: ["@shadow-panda/preset"],

  // Whether to use css reset
  preflight: true,

  // Use React
  jsxFramework: "react",

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      // Override `semanticTokens`
      semanticTokens: {
        // Example: Set primary color to another value
        colors: {
          primary: {
            DEFAULT: {
              value: {
                // Light mode
                base: "#7667E8",
                // Dark mode
                _dark: "{colors.grayscale.50}",
              },
            },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
