import { useRecipestore } from "../recipestore";
const RecipeList=()=>{
    const recipes=useRecipestore((n)=>n.recipes)
    return(
        <div>
            <h2>Recipes List</h2>
            {recipes.map((recipes)=(
                <div key={recipes.id}>
                    <h3>{recipes.title}</h3>
                    <p>{recipes.description}</p>
                </div>
            ))}
        </div>
    )
}
export default RecipeList;