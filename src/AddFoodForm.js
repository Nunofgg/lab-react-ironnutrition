import React, {useState} from "react";
import { Input } from "antd";

function AddFoodForm({addFood}){
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");

    const [showForm, setShowForm] = useState(true);

    const handleNameInput = (event) => setName(event.target.value);
    const handleImageInput = (event) => setImage(event.target.value);
    const handleCaloriesInput = (event) => setCalories(event.target.value);
    const handleServingsInput = (event) => setServings(event.target.value);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const newFood = {
            name,
            image,
            calories,
            servings,
        };

        addFood(newFood);

        setName("");
        setImage("");
        setCalories("");
        setServings("");

        console.log("submitting", newFood);
    }

    const toggleShowForm = () => setShowForm(!showForm);

    return (
        <>
            {showForm && <form onSubmit={handleFormSubmit}>
                <label>Name</label>
                <Input value={name} type="text" onChange={handleNameInput} />

                <label>Image</label>
                <Input value={image} type="text" onChange={handleImageInput} />

                <label>Calories</label>
                <Input value={calories} type="text" onChange={handleCaloriesInput} />

                <label>Servings</label>
                <Input value={servings} type="text" onChange={handleServingsInput} />

                <button type="submit"> Create </button>
            </form>}
            <button onClick={toggleShowForm}>{showForm ? "Hide Form" : "Add New Food"}</button>
        </>
    );
}

export default AddFoodForm;