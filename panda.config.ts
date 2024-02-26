import { defineConfig } from '@pandacss/dev';
import { checkboxRecipe } from './src/components/Checkbox/checkbox.recipe';
import { inputRecipe } from './src/components/Input/input.recipe';

export default defineConfig({
  presets: ['@shadow-panda/preset'],

  // Whether to use css reset
  preflight: true,

  // Use React
  jsxFramework: 'react',

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  conditions: {
    extend: {
      invalid: '&:is(:invalid, [data-invalid], [aria-invalid])',
    },
  },

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
                base: '#7667E8',
                // Dark mode
                _dark: '{colors.grayscale.50}',
              },
            },
          },
        },
      },

      recipes: {
        input: inputRecipe,
      },
      slotRecipes: {
        checkbox: checkboxRecipe,
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
