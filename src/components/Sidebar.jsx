import PropTypes from 'prop-types';

const Sidebar = ({recipeQues,handleRemove,preparedRecipe}) => {
    return (
        <div className="w-1/3 border rounded-2xl">
        <div className="text-center border rounded-lg">
      
        {/* want to cook table  */}
        <div className="overflow-x-auto">
              <h3 className="font-bold text-2xl my-4">want to cook:{recipeQues.length}</h3>
              <hr />
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>time</th>
        <th>calories</th>
        <th></th>
      </tr>
     
    </thead>
    <tbody>
      {/* row 1 */}
    {
        recipeQues.map((recipe,idx)=>( 
         <tr className="hover" key={idx}>
        <th>{idx+1}</th>
        <td>{recipe.recipe_name}</td>
        <td>{recipe.preparing_time}</td>
        <td>{recipe.calories}</td>
        <button onClick={()=>handleRemove(recipe.recipe_id)}
         className="bg-[#0BE58A] rounded-xl font-bold p-2">Preparing</button>
      
      </tr>))
    }
     
     
    </tbody>
  </table>
</div>
        {/* want to current table  */}
        <div className="overflow-x-auto">
              <h3 className="font-bold text-2xl my-4">Currently Cooking:{preparedRecipe.length}</h3>
              <hr />
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>time</th>
        <th>calories</th>
        <th></th>
      </tr>
     
    </thead>
    <tbody>
      {/* row 1 */}
    {
        preparedRecipe.map((recipe,idx)=>( 
         <tr className="hover" key={idx}>
        <th>{idx+1}</th>
        <td>{recipe.recipe_name}</td>
        <td>{recipe.preparing_time}</td>
        <td>{recipe.calories}</td>
        <button onClick={()=>handleRemove(recipe.recipe_id)}
         className="bg-[#0BE58A] rounded-xl font-bold p-2">Preparing</button>
      
      </tr>))
    }
     
     
    </tbody>
  </table>
</div>
        <hr />
        </div>
        </div>
    );
};
Sidebar.prototype={
  preparedRecipe:PropTypes.func
}
export default Sidebar;