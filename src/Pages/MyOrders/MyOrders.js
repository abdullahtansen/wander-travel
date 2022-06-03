import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import useAuth from "../../hooks/UseAuth";

const MyOrders = () => {
  const [booking, setBooking] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setBooking(data));
    }
  }, [user]);
  const handleDelete = (id) => {
    const url = `http://localhost:5000/booking/${id}`;
    console.log(url);
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("SuccessFully Deleted");
          const remaining = booking.filter((tour) => tour._id !== id);
          setBooking(remaining);
        }
      });
  };
  return (
    <div>
      <h3>My Order List</h3>
      <Table responsive>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Place Name</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {booking.map((a, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <th>{a.name}</th>
              <th>{a.email}</th>

              <th>{a.productName}</th>
              <th>{a.number}</th>
              <th>
                <select>
                  <option value="approved">Approved</option>
                  <option value="pending">Pending</option>
                </select>
              </th>
              <th>
                <Button
                  onClick={() => {
                    handleDelete(a._id);
                  }}
                >
                  Remove
                </Button>
              </th>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyOrders;
