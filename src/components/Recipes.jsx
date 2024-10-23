import { useEffect, useState } from "react";


const Recipes = () => {
    const [recipes,setRecipes]=useState([]);
    useEffect(()=>{
        fetch('./menu.json')
        .then(res=>res.json())
        .then(data=>setRecipes(data))
    },[])
    console.log(recipes)
    return (
        <div className="w-2/3">
          {
            recipes.map(recipe=> <p>{recipe.recipe_name}</p> )
          }
        </div>
    );
};

export default Recipes;