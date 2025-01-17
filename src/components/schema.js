import * as yup from "yup";

const schema = yup.object().shape({
  size: yup
    .string()
    .oneOf(["Large", "Medium", "Small"])
    .required("you must specify the size"),
  sauce: yup
    .string()
    .oneOf([
      "Italian Tomato",
      "Pesto Parmesan",
      "Sweet and Heat",
      "Garlic Alfredo",
    ])
    .required("you must pick a sauce"),
  topping1: yup.boolean(),
  topping2: yup.boolean(),
  topping3: yup.boolean(),
  topping4: yup.boolean(),
  "name-input": yup
    .string()
    .required("name is required")
    .min(2, "name must be at least 2 characters"),
  instructions: yup.string(),
});

export default schema;
