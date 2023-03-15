import React from "react";
import "./Contact.css";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h3 className="mt-5 mb-3 fw-bold">Contact us</h3>
        <p className="mb-5">
          Have questions? We are here to help! Send us a message and we will get
          back to you.
        </p>

        <div className="d-flex gap-3 text-center">
          <div className="m-3 contactCard">
            <HiOutlineLocationMarker className="icon" />
            <h5>Address</h5>
            <p>shop1:
              <br />
              4b71 , Hanna Road ,St NewYork 1001
            </p>
            
            <p>shop2:
              <br />
              53n2 , Savia Road , St London 3221
            </p>
            
          </div>
          <div className="m-3 contactCard">
            <BsTelephone className="icon" />
            <h5>Phone</h5>
            <p>+95978xxxxxxx</p>
            <p>+95996xxxxxxx</p>
          </div>
          <div className="m-3 contactCard">
            <HiOutlineMail className="icon" />
            <h5>Email</h5>
            <p>Fashionshop@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
