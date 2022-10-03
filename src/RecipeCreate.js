import React, { useState } from "react";


function RecipeCreate({createRecipe}) {
  // const initialFormState = {
  //   name: "",
  //   cuisine: "",
  //   photo: "",
  //   ingredients: "",
  //   preparation: "",
  // }
  
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  // const [formData, setFormData] = useState({initialFormState})
  // console.log("formData", formData)

  // const handleClick = () => {
  //   setFormData();
  // }
  // const handleChange = ({target}) => setFormData({...formData, [target.name]:target.value});

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
    createRecipe({ name, cuisine, photo, ingredients, preparation });
    // createRecipe(formData);
    // setFormData({...initialFormState});
  }

  const nameChangeHandler = (event) => setName(event.target.value);
  const cuisineChangeHandler = (event) => setCuisine(event.target.value);
  const photoChangeHandler = (event) => setPhoto(event.target.value);
  const ingredientsChangeHandler = (event) => setIngredients(event.target.value);
  const preparationChangeHandler = (event) => setPreparation(event.target.value);

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <div className="createBox">
    <form className="create-form" name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
          {/* <label htmlFor="name"></label> */}
          <td>
          {(<input type="text" id="name" name="name" placeholder="Name" onChange={nameChangeHandler} value={name} required />)}
          </td>
          {/* <label htmlFor="cuisine"></label> */}
          <td>
          {(<input type="text" id="cuisine" name="cuisine" placeholder="Cuisine" onChange={cuisineChangeHandler} value={cuisine} required />)}
          </td>
          {/* <label htmlFor="photo"></label> */}
          <td>
          {(<input type="url" id="photo" name="photo" placeholder="URL" onChange={photoChangeHandler} value={photo} required />)}
          </td>
          {/* <label htmlFor="ingredients"></label> */}
          <td>
          {(<textarea className="ingredients" name="ingredients" placeholder="Ingredients" onChange={ingredientsChangeHandler} value={ingredients} required />)}
          </td>
          {/* <label htmlFor="preparation"></label> */}
          <td>
          {(<textarea className="preparation" name="preparation" placeholder="Preparation" onChange={preparationChangeHandler} value={preparation} required />)}
          </td>
          <td>
          <button type="submit" >Create</button>
          </td>
          </tr>
        </tbody>
      </table>
    </form>
    </div>
  );
}

export default RecipeCreate;
