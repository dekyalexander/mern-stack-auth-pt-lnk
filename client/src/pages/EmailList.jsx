import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// Pemanggilan component dari directory local
import Header from "../pages/components/Header";
 
const EmailList = () => {
  const [email, setEmail] = useState([]);
 
  useEffect(() => {
    getEmail();
  }, []);
 
  const getEmail = async () => {
    const response = await axios.get("http://localhost:4000/email");
    setEmail(response.data);
  };
 
  const deleteEmail = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/email/${id}`);
      getEmail();
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <>
    <Header/>

    <div className="container">
      
        <Link to="/add" className="button">
          Add New
        </Link>
        <table className="datatable">
          <thead>
            <tr>
              <th>No</th>
              <th>Email</th>
              <th>Date</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {email.map((email, index) => (
              <tr key={email._id}>
                <td>{index + 1}</td>
                <td>{email.email}</td>
                <td>{email.date}</td>
                <td>{email.description}</td>
                <td>
                  <Link
                    to={`/edit/${email._id}`}
                    className="button"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteEmail(email._id)}
                    className="button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
    </>
  );
};
 
export default EmailList;