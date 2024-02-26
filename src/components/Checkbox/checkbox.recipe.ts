import { defineSlotRecipe } from "@pandacss/dev";

export const checkboxRecipe = defineSlotRecipe({
  className: "checkbox",
  slots: ["root", "indicator"],
  base: {
    root: {
      display: "inline-flex",
      flexShrink: "0",
      justifyContent: "center",

      _indeterminate: {
        bg: "primary",
        color: "primary.foreground",
      },
    },
  },
});
