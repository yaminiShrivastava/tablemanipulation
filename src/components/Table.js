import React, { useState } from "react";
import Alert from "./Alert";
import "./Table.css";
import data from "../randomdata.json";
export default function Table() {
  const [mystyle, setmystyle] = useState({
    color: "black",
    backgroundColor: "white",
    border: "1px solid grey",
  });
  const [bgcolor, setbgcolor] = useState({
    backgroundColor: "white",
  });
  const [textcolor, settextcolor] = useState({
    color: "black",
  });
  const darkEnable = () => {
    if (mystyle.color === "white") {
      showalert(" Light mode enabled successfully ", "success");
      setmystyle({
        color: "#1818199e",
        backgroundColor: "white",
        border: "1px solid grey",
      });
      setbgcolor({
        backgroundColor: "white",
      });
      settextcolor({
        color: "black",
      });
    } else {
      showalert(" Dark mode enabled successfully ", "success");
      setmystyle({
        color: "white",
        backgroundColor: "#1818199e",

        border: "1px solid grey",
      });
      setbgcolor({
        backgroundColor: "#171750",
      });
      settextcolor({
        color: "#ffffffa6",
      });
    }
  };

  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1800);
  };

  const [contacts, setContacts] = useState(data);
  const [addformdata, setaddformdata] = useState({
    id: "0",
    fullName: "",
    address: "",
    age: "",
    phoneNumber: "",
  });

  const handleaddformchng = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldvalue = event.target.value;
    const newformdata = { ...addformdata };
    newformdata[fieldName] = fieldvalue;
    setaddformdata(newformdata);
  };
  const handleaddformsubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id: addformdata.id,
      fullName: addformdata.fullName,
      address: addformdata.address,
      phoneNumber: addformdata.phoneNumber,
      age: addformdata.age,
    };
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  return (
    <>
      <h2>Chefkart Assignment</h2>
      <Alert alert={alert} />
      <div className="tablebox " style={bgcolor}>
        <div className="form-check form-switch mode ">
          <input
            className="form-check-input "
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={darkEnable}
          />
          <div className="lbl" style={textcolor}>
            {" "}
            Dark mode enable{" "}
          </div>
        </div>
        <table
          className="table table-bordered border-secondary"
          style={mystyle}
        >
          <thead>
            <tr style={textcolor}>
              <th scope="col">#</th>
              <th scope="col">
                {" "}
                Full name <i className="fa-sharp fa-solid fa-filter"></i>
              </th>
              <th scope="col">Age</th>
              <th scope="col">Address</th>
              <th scope="col">Phone no</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr>
                <th scope="row" key={contact.id}>
                  {contact.id}
                </th>
                <td>{contact.fullName}</td>
                <td>{contact.age}</td>
                <td>{contact.address}</td>
                <td>{contact.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2 className="addcontact" style={textcolor}>
          Add Contact
        </h2>

        <form className="addrow" onSubmit={handleaddformsubmit}>
          <div className="row">
            <div className="col">
              <input
                className="form-control"
                style={mystyle}
                type="text"
                required="required"
                name="id"
                placeholder="Id"
                onChange={handleaddformchng}
              />
            </div>
            <div className="col">
              <input
                className="form-control"
                style={mystyle}
                type="text"
                required="required"
                name="fullName"
                placeholder="FullName"
                onChange={handleaddformchng}
              />
            </div>
            <div className="col">
              <input
                className="form-control"
                style={mystyle}
                type="number"
                required="required"
                name="age"
                placeholder="Age"
                onChange={handleaddformchng}
              />
            </div>
            <div className="col">
              <input
                className="form-control"
                style={mystyle}
                type="text"
                required="required"
                name="address"
                placeholder="Address"
                onChange={handleaddformchng}
              />
            </div>
            <div className="col">
              <input
                className="form-control"
                style={mystyle}
                type="text"
                required="required"
                name="phoneNumber"
                placeholder="Phone number"
                onChange={handleaddformchng}
              />
            </div>
          </div>
          <div>
            <button type="submit" className="btn btn-secondary mx-3">
              Add Row
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
