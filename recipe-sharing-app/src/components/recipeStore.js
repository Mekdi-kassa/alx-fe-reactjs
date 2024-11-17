import create from'zustand';
const useRecipeStore=create((set)=>({
    recipes:[],
    addRecipe:(newrecipe)=>set((n)=>({recipes:[...n.recipes,newrecipe]})),
    setRecipe:(recipes)=>set({recipes})
}))
export {useRecipeStore};