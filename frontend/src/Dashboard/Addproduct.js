


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Addproduct() {

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    productName: "",
    category: "",
    subCategory: "",
    unit: "",
    price: "",
    quantity: "",
    description: "",
    state: "",
    city: "",
    address: "",
    harvestDate: "",
    expiryDate: ""
  });

  // 🔥 handle all inputs
  const handleInput = (e) => {
    const { name, value } = e.target;

    setProduct((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // 🔥 submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(product);
      await axios.post("http://localhost:3000/addproduct", product);
      alert("Product stored successfully");
      navigate("/dashboard/farmer/myproducts");
    } catch (err) {
      console.log(err);
      alert("Error storing product");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">

          <div className="card shadow p-4">

            <h3 className="text-center mb-4">Add Product</h3>

            <form onSubmit={handleSubmit}>

              <div className="row">

                {/* LEFT SIDE */}
                <div className="col-md-6">

                  <label>Product Name</label>
                  <input
                    name="productName"
                    value={product.productName}
                    onChange={handleInput}
                    placeholder="Enter product name"
                    className="form-control mb-3"
                  />

                  <label>Sub Category</label>
                  <input
                    name="subCategory"
                    value={product.subCategory}
                    onChange={handleInput}
                    placeholder="e.g. Basmati Rice"
                    className="form-control mb-3"
                  />

                  <label>Price</label>
                  <input
                    name="price"
                    value={product.price}
                    onChange={handleInput}
                    placeholder="Enter price"
                    className="form-control mb-3"
                  />

                </div>

                {/* RIGHT SIDE */}
                <div className="col-md-6">

                  <label>Category</label>
                  <select
                    name="category"
                    value={product.category}
                    onChange={handleInput}
                    className="form-select mb-3"
                  >
                    <option value="">Select Category</option>
                    <option value="Grains">Grains</option>
                    <option value="Vegetables">Vegetables</option>
                    <option value="Fruits">Fruits</option>
                  </select>

                  <label>Unit</label>
                  <select
                    name="unit"
                    value={product.unit}
                    onChange={handleInput}
                    className="form-select mb-3"
                  >
                    <option value="">Select Unit</option>
                    <option value="Kg">Kg</option>
                    <option value="Quintal">Quintal</option>
                    <option value="Ton">Ton</option>
                  </select>

                  <label>Quantity</label>
                  <input
                    name="quantity"
                    value={product.quantity}
                    onChange={handleInput}
                    placeholder="Enter quantity"
                    className="form-control mb-3"
                  />

                </div>
              </div>

              {/* DESCRIPTION */}
              <div className="mt-3">
                <label>Description</label>
                <textarea
                  name="description"
                  value={product.description}
                  onChange={handleInput}
                  placeholder="Describe your product"
                  className="form-control"
                />
              </div>

              {/* LOCATION */}
              <div className="row mt-3">

                <div className="col-md-4">
                  <label>State</label>
                  <select
                    name="state"
                    value={product.state}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option value="">Select State</option>
                    <option value="UP">UP</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Maharashtra">Maharashtra</option>
                  </select>
                </div>

                <div className="col-md-4">
                  <label>City</label>
                  <input
                    name="city"
                    value={product.city}
                    onChange={handleInput}
                    placeholder="Enter city"
                    className="form-control"
                  />
                </div>

                <div className="col-md-4">
                  <label>Address</label>
                  <input
                    name="address"
                    value={product.address}
                    onChange={handleInput}
                    placeholder="Enter address"
                    className="form-control"
                  />
                </div>

              </div>

              {/* DATES */}
              <div className="row mt-3">

                <div className="col-md-6">
                  <label>Harvest Date</label>
                  <input
                    type="date"
                    name="harvestDate"
                    value={product.harvestDate}
                    onChange={handleInput}
                    className="form-control"
                  />
                </div>

                <div className="col-md-6">
                  <label>Expiry Date</label>
                  <input
                    type="date"
                    name="expiryDate"
                    value={product.expiryDate}
                    onChange={handleInput}
                    className="form-control"
                  />
                </div>

              </div>

              {/* BUTTONS */}
              <div className="text-end mt-4">

                <button
                  type="button"
                  className="btn btn-secondary me-2"
                  onClick={() => navigate("/dashboard/farmer/myproducts")}
                >
                  Cancel
                </button>

                <button type="submit" className="btn btn-primary">
                  Add Product
                </button>

              </div>

            </form>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Addproduct;