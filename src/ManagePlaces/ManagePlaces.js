import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import useAuth from "../hooks/UseAuth";
import "./ManagePlaces.css";

const ManagePlaces = () => {
  const navigate = useNavigate();
  const { serviceId } = useParams();
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const [tours, setTours] = useState({});
  useEffect(() => {
    fetch(`https://wander-travel-server.herokuapp.com/places/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, [serviceId]);
  const onSubmit = (data) => {
    const product = {
      name: user.displayName,
      email: user.email,
      productName: tours.name,
      Price: tours.price,
      number: data.number,
      address: data.address,
    };
    axios
      .post("https://wander-travel-server.herokuapp.com/booking", product)
      .then((res) => {
        if (res.product.insertedId) {
          alert("added successfully");
          reset();
        }
      });
    navigate("/myOrders");
  };

  return (
    <div>
      <h2>Manage tours</h2>
      <div className="manage-places">
        <div className="card-body">
          <img className="image" src={tours.img} alt="" />
          <h2 className="text-center name">{tours.name}</h2>
          <p className="text-center description">{tours.description}</p>
          <h3 className="text-danger text-center">Price: ${tours.price}</h3>
        </div>

        <div className="form-design">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="manage-order">
              <h2 className="title">Your Information</h2>
              <label>
                <h4>Your Name</h4>
                <input
                  value={user.displayName}
                  type="text"
                  disabled
                  placeholder="Name"
                  {...register("Name")}
                />
              </label>
              <label>
                <h4>Your Email</h4>
                <input
                  disabled
                  value={user.email}
                  type="text"
                  placeholder="Enter Your Email"
                  {...register("email")}
                />
              </label>
              <label>
                <h4>Product Name</h4>
                <input
                  disabled
                  value={tours.name}
                  type="text"
                  placeholder="Product Name"
                  {...register("productName")}
                />
              </label>
              <label>
                <h4>Per Price</h4>
                <input
                  disabled
                  value={tours.price}
                  type="number"
                  placeholder="Product Price"
                  {...register("name")}
                />
              </label>
              <label>
                <h4>Phone Number</h4>
                <input
                  value={tours.number}
                  type="number"
                  placeholder="Enter Your Phone Number"
                  {...register("number")}
                />
              </label>
              <label>
                <h4>Address</h4>
                <input
                  type="address"
                  placeholder="Enter Your Address"
                  {...register("address")}
                />
              </label>
              <label className="input-btn">
                <input type="submit" value="submit" />
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManagePlaces;
