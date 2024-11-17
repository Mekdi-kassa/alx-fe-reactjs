import create from'zustand';
const useRecipeStore=create((setRecipes)=>({
    recipes:[],
    addRecipe:(newrecipe)=>setRecipes((n)=>({recipes:[...n.recipes,newrecipe]})),
    setRecipe:(recipes)=>setRecipes({recipes})
}))
export {useRecipeStore};