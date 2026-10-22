import { useEffect, useState } from "react";
import axios from "axios";

function MyProducts1() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => {
        console.log(res.data);   // check data
        setProducts(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>My Products</h2>

      <div className="row">
        {products.map((item) => (
          <div className="col-md-3" key={item._id}>
            <div className="card p-3 mb-3 shadow">
              <h5>{item.productName}</h5>
              <p>Price: ₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default MyProducts1;