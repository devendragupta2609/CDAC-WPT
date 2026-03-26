import React, { useEffect, useState } from "react";
import axios from "axios";

function Info() {
  const [dev, setDev] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setDev(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>Product List</h2>

      {dev.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <p>Price: ₹{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Info;
