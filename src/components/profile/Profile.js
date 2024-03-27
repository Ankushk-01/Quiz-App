import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { useEffect } from "react";
import { HashLoader } from "react-spinners";
export default function ProfilePage() {
  const Serialized = sessionStorage.getItem("Serialized");
  const user = JSON.parse(Serialized);
  console.log("The User data is : " + user);
  console.log("The User name is : " + user.name);
  const [loading, setLoading] = useState(false);
  const [name] = useState(user.name);
  const [email] = useState(user.email);
  const [address] = useState(user.address);
  const [contact] = useState(user.contact);
  const [className] = useState(user.className);
  const [rollNumber] = useState(user.rollNumber);
  const roll = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // toast.success("Profile Loaded Successfully");
    }, 1000);
  };
  useEffect(() => {
    roll();
  }, []);

  return (
    <section style={{ backgroundColor: "#eee" }}>
      {loading && (
        <HashLoader
          color={"#3585c1"}
          loading={loading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
          style={{
            backgroundColor: "rgba(0, 0, 0, 1)",
            width: "100%",
            height: "100%",
            position: "fixed",
            top: "0",
            left: "0",
            zIndex: "9999",
          }}
        />
      )}
      <MDBContainer className="py-5 text-center">
        <MDBCol>
          <MDBRow lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle mx-auto"
                  style={{ width: "150px" }}
                  fluid
                />
                <p className="text-muted mb-1">{name}</p>
                <p className="text-muted mb-1">Student</p>
                <p className="text-muted mb-4">{address}</p>
              </MDBCardBody>
            </MDBCard>
          </MDBRow>
          <MDBRow lg="10">
            <MDBCard className="mb-4 border-0">
              <MDBCardBody className="p-4">
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{name}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr className="my-4" />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr className="my-4" />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{contact}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr className="my-4" />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      (098) 765-4321
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr className="my-4" />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{address}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr className="my-4" />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Class</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {className}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr className="my-4" />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Roll Number</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {rollNumber}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr className="my-4" />
              </MDBCardBody>
            </MDBCard>
          </MDBRow>
        </MDBCol>
        <Link to="/edit">
          <button className="btn btn-primary ">Edit</button>
        </Link>
      </MDBContainer>
    </section>
  );
}
