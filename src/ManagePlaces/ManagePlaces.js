import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./ManagePlaces.css";

const ManagePlaces = () => {
  const { serviceId } = useParams();
  const [tour, setTour] = useState([]);
  const [tours, setTours] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/places/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, [serviceId]);
  //   useEffect(() => {
  //     fetch("http://localhost:5000/places")
  //       .then((res) => res.json())
  //       .then((data) => setTour(data));
  //   }, []);
  const handleDelete = (id) => {
    const url = `http://localhost:5000/places/${id}`;
    console.log(url);
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("SuccessFully Deleted");
          const remaining = tour.filter((tour) => tour._id !== id);
          setTour(remaining);
        }
      });
  };
  return (
    <div>
      <h2>Manage tours</h2>
      <Container className="manage-places">
        <div>
          <div className="card-body">
            <img className="image" src={tours.img} alt="" />
            <h2 className="text-center name">{tours.name}</h2>
            <p className="text-center description">{tours.description}</p>
            <h3 className="text-danger text-center">Price: ${tours.price}</h3>
            <button onClick={() => handleDelete(tours._id)}>Delete</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ManagePlaces;
