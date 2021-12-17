import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import schema from "./schema";
import * as yup from "yup";
import axios from "axios";

const Shop = () => {
  //values

  const [Data, setData] = useState({
    size: "",
    sauce: "",
    topping1: false,
    topping2: false,
    topping3: false,
    topping4: false,
    "name-input": "",
    instructions: "",
  });

  const [errors, setErrors] = useState({
    size: "",
    sauce: "",
    topping1: false,
    topping2: false,
    topping3: false,
    topping4: false,
    "name-input": "",
    instructions: "",
  });

  const [post, setPost] = useState([]);
  const [postError, setPostError] = useState();
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    schema.isValid(Data).then((valid) => {
      // console.log(valid);
      setDisabled(!valid);
    });
  }, [Data]);

  const validation = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then((valid) => {
        setErrors({ ...errors, [name]: "" });
      })
      .catch((err) => {
        setErrors({ ...errors, [name]: err.errors[0] });
      });
  };

  const inputChange = (event) => {
    event.persist();
    const { value, name, checked, type } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    validation(name, newValue);
    setData({ ...Data, [name]: newValue });
    //   console.log("value", name, newValue);
  };
  //axios

  const submit = (event) => {
    event.preventDefault();

    axios
      .post("https://regres.in/api/orders", Data)
      .then((response) => {
        setPost(response.data);
        //   console.log(response.data);
        setData({
          size: "",
          sauce: "",
          topping1: "",
          topping2: "",
          topping3: "",
          topping4: "",
          "name-input": "",
          instructions: "",
        });
      })
      .catch((error) => {
        setPostError(
          "the order was unsuccessful, we are undergoing a name change and a lawsuit give us a break"
        );
      });
  };
  return (
    <div className="container">
      <h1> Buy Your Favorite Pizza</h1>
      <h2>Now accepting Dogecoin, much wow</h2>

      <form id="pizza-form" onSubmit={submit}>
        {}
        <label htmlFor="size-dropdown">
          {" "}
          Choose the size, prepare to party
        </label>
        <br />
        <select
          id="size-dropdown"
          name="size"
          value={Data.size}
          onChange={inputChange}
          data-cy="size"
        >
          {errors.size.length > 0 ? (
            <p className={"error"}>{errors.size}</p>
          ) : null}
          <option> --Please choose an option--</option>
          <br />
          <option value="Large"> Large </option>
          <br />
          <option value="Medium"> Medium </option>
          <br />
          <option value="Small"> Small </option>
        </select>
        {/*sauce  checked*/}
        <label className="choose-sauce" htmlFor="sauce">
          {" "}
          Choose your sauce
        </label>
        <br />
        Italian Tomato
        <input
          onChange={inputChange}
          type="radio"
          name="sauce"
          value="Italian Tomato"
          checked={Data.sauce === "red"}
          data-cy="sauce"
        />
        <br />
        Pesto Parmesan
        <input
          onChange={inputChange}
          type="radio"
          name="sauce"
          value="Pesto Parmesan"
        />
        <br />
        Sweet and Heat
        <input
          onChange={inputChange}
          type="radio"
          name="sauce"
          value="Sweet and Heat"
        />
        <br />
        Garlic Alfredo
        <input
          onChange={inputChange}
          type="radio"
          name="sauce"
          value="Garlic Alfredo"
        />
        <br />
        {/*  Toppings  */}
        <label htmlFor="topping"> Add your toppings </label>
        <br />
        Mushrooms
        <input
          onChange={inputChange}
          data-cy="topping1"
          type="checkbox"
          name="topping1"
          checked={Data.topping1}
          value={Data.topping1}
        />
        <br />
        Olives
        <input
          onChange={inputChange}
          data-cy="topping2"
          type="checkbox"
          name="topping2"
          checked={Data.topping2}
          value={Data.topping2}
        />
        <br />
        Peppers
        <input
          onChange={inputChange}
          data-cy="topping3"
          type="checkbox"
          name="topping3"
          checked={Data.topping3}
          value={Data.topping3}
        />
        <br />
        Garlic
        <input
          onChange={inputChange}
          data-cy="topping4"
          type="checkbox"
          name="topping4"
          checked={Data.topping4}
          value={Data.topping4}
        />
        <br />
        {/*txt*/}
        <label htmlFor="name-input"> Your name </label>
        {/*error */}
        {errors["name-input"].length > 0 ? (
          <p className={"error"}>{errors["name-input"]}</p>
        ) : null}
        <input
          onChange={inputChange}
          type="text"
          name="name-input"
          id="name-input"
          placeholder="john"
          value={Data["name-input"]}
          data-cy="name-input"
        />
        <label htmlFor="special-text"> Special Instructions</label>
        <textarea
          data-cy="instructions"
          onChange={inputChange}
          type="text"
          name="instructions"
          id="special-text"
          placeholder="I want this pizza to have ..."
          value={Data.instructions}
        />
        {/*Button set up for disable*/}
        <label htmlFor="order-button"> Ready to Order:</label>
        <pre className={"error"}>{JSON.stringify(postError, null, 2)}</pre>
        <button
          href="/pizza/confirm"
          type="Submit"
          onSubmit={submit}
          disabled={disabled}
          id="order-button"
          data-cy="submit"
        >
          {post === true ? (
            <Link disabled={disabled} className="btn" to="/pizza/confirm">
              Submit Order
            </Link>
          ) : (
            "Submit Order"
          )}
        </button>
      </form>
    </div>
  );
};
export default Shop;
