import React, { useState, useEffect } from "react";
import ClothesCard from "./ClothesCard";
import { Product_URL } from "../Constants";
import Shimmer from "./Shimmer";
import "./Body.css";
import { Link } from "react-router-dom";

const Body = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Product_URL);
    const json = await data.json();
    setData(json);
  };
  return data.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="clothes-list">
      {data.map((item) => (
        <Link to={"/clothes/" + item.id} key={item.id}>
        <ClothesCard {...item} />
        </Link>
      ))}
    </div>
  );
};
export default Body;
