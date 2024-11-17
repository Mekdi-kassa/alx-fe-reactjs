import create from'zustand';
const useRecipestore=create((set)=>({
    recipes:[],
    addrecipe:(newrecipe)=>set((n)=>({recipes:[...n.recipes,newrecipe]})),
    setrecipe:(recipes)=>set({recipes})
}))
export {useRecipestore};