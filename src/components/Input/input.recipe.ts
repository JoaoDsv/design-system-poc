import { defineRecipe } from "@pandacss/dev";
// import original { inputRecipe } and ...spread it

export const inputRecipe = defineRecipe({
  className: "input",
  base: {
    _invalid: {
      borderColor: "red",
    },
  },
});
