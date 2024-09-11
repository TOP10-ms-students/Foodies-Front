import * as yup from "yup";

export const addRecipeSchema = yup.object({
  name: yup
    .string("Enter recipe name")
    .min(2, "Recipe name should be of minimum 8 characters length")
    .required("Recipe name is required"),
  description: yup
    .string("Enter recipe description")
    .min(5, "Description should be of minimum 8 characters length")
    .max(200, "Description should be of maximum 200 characters length")
    .required("Recipe description is required"),
  category: yup.string().required("Recipe category is required"),
  ingredients: yup.array().min(1, "Add at least one ingredient"),
  preparation: yup
    .string("Enter recipe preparation")
    .required("Recipe preparation is required"),
});
