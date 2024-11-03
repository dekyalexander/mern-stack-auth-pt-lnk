import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
 
const EditEmail = () => {
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
 
  useEffect(() => {
    getEmailById();
  }, []);
 
  const getEmailById = async () => {
    const response = await axios.get(`http://localhost:4000/email/${id}`);
    setEmail(response.data.email);
    setDate(response.data.date);
    setDescription(response.data.description);
  };
 
  const updateEmail = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:4000/email/${id}`, {
        email,
        date,
        description,
      });
      navigate("/email");
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className="form_container_signup">
      <div className="column is-half">
        <form onSubmit={updateEmail}>
        <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Date</label>
            <div className="control">
              <input
                type="date"
                className="input"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Date"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea className="input"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="30" cols="30">   
                </textarea>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default EditEmail;