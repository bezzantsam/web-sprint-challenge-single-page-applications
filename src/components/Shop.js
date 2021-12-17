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
};

useEffect(() => {
  schema.isValid(Data).then((valid) => {
    console.log(valid);
    setDisabled(!valid);
  });
}, [Data]);

export default Shop;
