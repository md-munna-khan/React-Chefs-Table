import { useEffect, useState } from "react";
import { CiTimer } from "react-icons/ci";
import { FaBurn } from "react-icons/fa";

const Recipes = ({ handleRecipeQue }) => {
    const [recipes,setRecipes]=useState([]);
 
    useEffect(()=>{
        fetch('./menu.json')
        .then(res=>res.json())
        .then(data=>setRecipes(data))
    },[])
   
    return (
        <div className="w-2/3">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
       {
            recipes.map(recipe=>
                
                <div key={recipe.recipe_id} className="card bg-base-100  shadow-xl">
                <figure>
                  <img className="w-full md:h-[200px] object-cover bg-center items-center rounded-xl"  src={ recipe.recipe_image} alt="" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-bold">{recipe.recipe_name}</h2>
                  <p className="text-gray-500"> {recipe.short_description}</p>
                  <hr />
                  <div className=" ">
                    
                  <div className="my-4">
                  <h3 className="font-bold mb-2"> ingredients:{recipe.ingredients.length}</h3>
                   <ul className="ml-8" >
                   {
                        recipe.ingredients.map((item,idx)=> <li className="list-disc text-gray-600" key={idx}>{item}</li>)
                    }
                   </ul>
                  </div>
                   <hr />
                   <div className="flex gap-4 my-4">
                    <div className="flex items-center  space-x-2">
                        <p><CiTimer /></p>
                    <p> {recipe.preparing_time}</p>
                    </div>
                    <div className="flex items-center  space-x-2">
                    <p><FaBurn /></p>
                    <h3>{recipe.calories}</h3>
                    </div>
                   </div>
                    <button onClick={()=>handleRecipeQue(recipe)} className="btn font-bold   rounded-full text-xl space-x-8 bg-[#0BE58A]">want to Cook</button>
                  </div>
                </div>
              </div>

            )
          }
       </div>
        </div>
    );
};

export default Recipes;