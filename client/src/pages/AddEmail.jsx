import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
const AddEmail = () => {
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
 
  const saveEmail = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/email", {
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
    <div className="form_container_login">
      <div className="column is-half">
        <form onSubmit={saveEmail}>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan Email"
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
                placeholder="Masukkan Date"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea
                type="text" 
                className="input"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="30" cols="30">   
                </textarea>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default AddEmail;