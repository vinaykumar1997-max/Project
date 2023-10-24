import React, { useState } from "react";
import "./styles.css";
import Data from "./JsonData.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaShoppingCart } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { BiSolidEditAlt } from "react-icons/bi";
import Modal from "react-modal";
const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [approved, setApproved] = useState(false);

  const handleApproval = () => {
    setApproved(true);
    alert("Order Approved");
  };
  const handleRxCross2Click = () => {
    const result = window.confirm("Are you sure you want to delete this item?");
    if (result) {
      alert("Item deleted.");
    } else {
      alert("Item not deleted.");
    }
  };
  const ModalClose = (e) => {
    setModalOpen(false);
  };
  const handleOpen = (e) => {
    setModalOpen(true);
  };
  return (
    <div>
      <div className="navbar">
        <ul>
          <li className="fw-bold" style={{ fontSize: "30px" }}>
            Recco
          </li>
          <li>Store</li>
          <li>Others</li>
          <li>Analytics</li>
          <li>
            <FaShoppingCart style={{ marginLeft: "500px" }} />
            <li>
              <select className="bg-none">
                <option value="">Hello, James</option>
              </select>
            </li>
          </li>
        </ul>
      </div>
      <div className="bg-light p-4">
        <abbr className="ms-4">Order</abbr>
        <a href="#" className="ms-4">
          Order 32457ABC
        </a>
        <div className="row">
          <div className="col-md-4">
            <h3 className="ms-4 mt-4">Order 32457ABC</h3>
          </div>
          <div className="col-md-8 d-flex flex-wrap justify-content-end">
            <div>
              <input type="button" value="Back" />
            </div>
            <div>
              <input type="submit" value="Appointment Order" />
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="card">
        <div className="row">
          <div className="col-md-2">
            <p className="ms-4 py-2">Supplier</p>
            <h5 className="ms-4 fw-bold">East coast fruits & vegetables</h5>
          </div>
          <div className="col-md-2">
            <p className="ms-4 py-2">Shipping date</p>
            <h5 className="ms-4 fw-bold">Thu ,Feb 10</h5>
          </div>
          <div className="col-md-2">
            <p className="ms-4 py-2">Total</p>
            <h5 className="ms-4 fw-bold">$ 15,028.3</h5>
          </div>
          <div className="col-md-2">
            <p className="ms-4 py-2">Department</p>
            <h5 className="ms-4 fw-bold">300-444-678</h5>
          </div>
          <div className="col-md-2">
            <p className="ms-4 py-2">Status</p>
            <h5 className="ms-4 fw-bold">Awaiting your approval</h5>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-3 w-100">
          <div className="container">
            <input type="text" placeholder="Search.." className="m-4 w-25" />
            <button className="button mt-4 mx-4" style={{ float: "right" }}>
              Add item
            </button>
            <div className="container1">
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Product name</th>
                    <th>Brand</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {Data.map((item, index) => (
                    <tr key={index}>
                      <img
                        src="https://img.freepik.com/free-photo/green-apple-juicy-mellow-cut-isolated-white_179666-618.jpg?size=626&ext=jpg&ga=GA1.1.1044247858.1695196487&semt=ais"
                        alt=""
                        style={{ width: "50px", height: "50px" }}
                      />
                      <td>{item.Productname}</td>
                      <td>{item.Brand}</td>
                      <td>{item.Price}</td>
                      <td>{item.Quantity}</td>
                      <td>{item.Total}</td>
                      <td>{item.Status}</td>
                      <td></td>
                      <td>
                        <TiTick size={25} onClick={handleApproval} />
                        <RxCross2 size={25} onClick={handleRxCross2Click} />
                        <a
                          href="javascript"
                          style={{ textDecoration: "none", color: "black" }}
                          onClick={handleOpen}
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Modal
                isOpen={modalOpen}
                style={{
                  content: { width: "800px", height: "300px", margin: "auto" }
                }}
              >
                <p className="fw-bold">
                  Chicken Breast Fillets,Boneless Marinated 6 Ounce
                  Raw,Invivid...
                </p>
                <p>American Roland</p>
                <div className="row">
                  <div className="col-md-3">
                    <img
                      src="https://img.freepik.com/free-photo/green-apple-juicy-mellow-cut-isolated-white_179666-618.jpg?size=626&ext=jpg&ga=GA1.1.1044247858.1695196487&semt=ais"
                      alt=""
                      style={{ width: "100px", height: "100px" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="d-flex align-items-center">
                      <h6 className="m-0">Price ($)</h6>
                      <input
                        type="text"
                        placeholder="9999..."
                        className="w-25"
                        style={{ marginLeft: "80px" }}
                      />{" "}
                      / 6 + 1LB
                    </div>
                    <div className="d-flex align-items-center mt-4">
                      <h6 className="m-0">Quantity</h6>
                      <span className="ms-4">-</span>
                      <input
                        type="text"
                        placeholder="9999..."
                        className="w-25"
                        style={{ marginLeft: "20px" }}
                      />
                      <span className="ms-2">+</span>/ 6 + 1LB
                    </div>
                    <div className="d-flex align-items-center mt-4">
                      <h6 className="m-0">Total</h6>
                      <h6 style={{ marginLeft: "100px" }}>$9,97,000.888</h6>
                    </div>
                  </div>
                </div>
                <button
                  type="cancel"
                  className="btn btn-outline-success mx-auto"
                  onClick={ModalClose}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-success ms-2">
                  Send
                </button>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
