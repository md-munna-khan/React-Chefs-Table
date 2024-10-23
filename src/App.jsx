import { useState } from "react";
import Heder from "./components/Heder";
import Navbar from "./components/navbar";
import Recipe from "./components/Recipe";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";



const App = () => {
  const [recipeQues,setRecipeQues]=useState([]);
  const [preparedRecipe,setPreparedRecipe] =([])

const handleRecipeQue = recipe=>{
  const isExist = recipeQues.find(previousRecipe=> previousRecipe.recipe_id ===recipe.recipe_id)
 if(!isExist){
  setRecipeQues ([...recipeQues,recipe])
 }else{
  alert('Recipe already exist')
 }


}
const handleRemove = id =>{
  // find which recipe to remove
  const deleteRecipe =recipeQues.find(recipe=> recipe.recipe_id ===id)
  // remove want to cook table
  const updatedQueue = recipeQues.filter(recipe=> recipe.recipe_id !== id)
  setRecipeQues(updatedQueue)
  setPreparedRecipe([...preparedRecipe,deleteRecipe])
}

  return (
    <div className="w-11/12 mx-auto">
      {/* header section */}
      <Heder></Heder>
      {/* navbar */}
      <Navbar></Navbar>
      {/* recipe bar */}
      <Recipe></Recipe>
      {/* card section */}
      <section className="flex gap-4">
        {/* recipes bar */}
        <Recipes handleRecipeQue={handleRecipeQue}></Recipes>
        {/* side bar */}
        <Sidebar 
        preparedRecipe={preparedRecipe}
         handleRemove={handleRemove}
          recipeQues={recipeQues}></Sidebar>
      </section>
    </div>
  );
};

export default App;