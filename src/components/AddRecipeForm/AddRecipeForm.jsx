// import css from "./AddRecipeForm.module.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import addMyRecipe from "../../api/recipes/addMyRecipe";

import RecipeDescriptionFields from "../RecipeDescriptionFields/RecipeDescriptionFields";
import RecipeIngredientsFields from "../RecipeIngredientsFields/RecipeIngredientsFields";
import RecipePreparationFields from "../RecipePreparationFields/RecipePreparationFields";

const AddRecipeForm = ({ formData, setFormData }) => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    for (const key in formData) {
      if (key === "ingredients") {
        form.append(key, JSON.stringify(formData[key]));
      } else {
        form.append(key, formData[key]);
      }
    }

    try {
      const response = await addMyRecipe(form);
      if (response && response.data) {
        console.log("Recipe added successfully:", response.data);
        navigate("/my");
      } else {
        console.error("Error adding recipe:", response);
      }
    } catch (error) {
      console.error("Error adding recipe:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <RecipeDescriptionFields formData={formData} setFormData={setFormData} />
      <RecipeIngredientsFields formData={formData} setFormData={setFormData} />
      <RecipePreparationFields formData={formData} setFormData={setFormData} />
      <button type="submit">Add</button>
    </form>
  );
};

AddRecipeForm.propTypes = {
  formData: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    time: PropTypes.string,
    ingredients: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        measure: PropTypes.string,
      })
    ),
    instructions: PropTypes.string,
    file: PropTypes.object,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default AddRecipeForm;
