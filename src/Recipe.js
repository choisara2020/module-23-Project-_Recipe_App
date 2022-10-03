import { useState } from "react";

function Recipe({ recipe, deleteRecipe }) {
    return (
        <tr>
          <td className="recipe">{(recipe.name)}</td>
          <td className="recipe">{(recipe.cuisine)}</td>
          <td className="recipe">{(<img alt={recipe.photo} src={recipe.photo} />)}</td> 
          <td className="recipe"><p>{(recipe.ingredients)}</p></td>
          <td className="recipe"><p>{(recipe.preparation)}</p></td>
          <td>
            <button name="delete" onClick={deleteRecipe}>Delete</button>
          </td>
        </tr>
    );
  }

export default Recipe;