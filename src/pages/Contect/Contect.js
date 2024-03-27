import React, { useState } from "react";
// import NavBar from "../../components/NavBar/NavBar";
import { HashLoader } from "react-spinners";
import apiServices from "../../Admin/apiServices";
import { ToastContainer, toast } from "react-toastify"
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    let data = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };
    console.log(data);  // Debugging 
    let Name = data.name;
    if(!Name){
      setLoading(false);
      toast.error("Name field is Empty Please fill it");
    }
    if(data.email ===""){
      setLoading(false);
      toast.error("Email field is Empty Please fill it");
    }
    else if(data.phone ===""){
      setLoading(false);
      toast.error("phone field is Empty Please fill it");
    }
    else if(data.message ===""){
      setLoading(false);
      toast.error("message field is Empty Please fill it");
    }
    else{
    apiServices
      .feedback(data)
      .then((x) => {
        console.log("The data is "+x.data);
        if (x.data.status) {
          console.log(x.data.status);
          setTimeout(() => {
            setLoading(false);
            toast.success(x.data.msg);
          }, 1000);
        } else {
          toast.error(x.data.msg);
        }
      })
      .catch((error) => {
        console.log("The Error is : ", error);
        setTimeout(() => {
          setLoading(false);
          toast.error("Something went wrong!! try again later");
        }, 1000);
      });
    } 
  };
  return (
    <>
      {/* <NavBar /> */}
      <div
        className="contact3 py-3"
        style={{ height: "90vh", overflow: "hidden" }}
      >
        <div className="d-flex justify-content-center align-items-center ">
          {loading && (
            <HashLoader
              color={"#3585c1"}
              loading={loading}
              size={100}
              aria-label="Loading Spinner"
              data-testid="loader"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                width: "100%",
                height: "100%",
                position: "fixed",
                top: "0",
                left: "0",
                zIndex: "9999",
              }}
            />
          )}
        </div>
        <div
          className="row no-gutters h-100"
          style={{ marginRight: 0, marginLeft: 0 }}
        >
          <div className="container">
            <div className="row justify-content-center align-items-center h-100">
              <div className="col-lg-6">
                <div className="card-shadow">
                  <img
                    src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/2.jpg"
                    className="img-fluid sm"
                    alt="Error"
                  />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="contact-box w-100">
                  <h1 className="font-weight-light mt-2">Contact Us</h1>
                  <form className="mt-2" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          <input
                            className="form-control"
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Phone"
                            value={phone}
                            onChange={(e) => {
                              setPhone(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          <textarea
                            className="form-control"
                            rows="3"
                            placeholder="Message"
                            value={message}
                            onChange={(e) => {
                              setMessage(e.target.value);
                            }}
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <button
                          type="submit"
                          className="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2 btn-primary"
                        >
                          <span>SUBMIT</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-12 align-items-center  justify-content-center">
                <div className="card mt-2 border-0 mb-2">
                  <div className="row">
                    <div className="col-lg-4 col-md-4">
                      <div className="card-body d-flex align-items-center  justify-content-center c-detail pl-0">
                        <div className="mr-2 align-self-center">
                          <img
                            src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png"
                            alt="Error"
                          />
                        </div>
                        <div className="">
                          <h6 className="font-weight-medium">Address</h6>
                          <p className="">
                            H.No. 40, Bachint Nagar, Reru.
                            <br /> Jalandhar, Punjab, India
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-2">
                      <div className="card-body d-flex align-items-center c-detail">
                        <div className="mr-2 align-self-center">
                          <img
                            src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png"
                            alt="Error"
                          />
                        </div>
                        <div className="">
                          <h6 className="font-weight-medium">Phone</h6>
                          <p className="">
                            95017-95088
                            <br /> 96325-87595
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-2">
                      <div className="card-body d-flex align-items-center c-detail">
                        <div className="mr-2 align-self-center">
                          <img
                            src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png"
                            alt="Error"
                          />
                        </div>
                        <div className="">
                          <h6 className="font-weight-medium m-0 p-0">Email</h6>
                          <p className="">
                            QuizApp@gmail.com
                            <br /> Ankush@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        <ToastContainer></ToastContainer>
        </div>
      </div>
    </>
  );
}
