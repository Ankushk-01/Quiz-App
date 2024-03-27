import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HashLoader } from "react-spinners";
import apiServices from "../../Admin/apiServices";
export default function Edit() {
  function render(){
    const Serialized = sessionStorage.getItem("Serialized");
    const user = JSON.parse(Serialized);
    setAddress(user.address);
    setName(user.name);
    setEmail(user.email);
    setPassword(user.password);
    setcPassword(user.cpassword);
    setClassName(user.className)
    setRollNumber(user.rollNumber);
    setContact(user.contact);
  }
  const Serialized = sessionStorage.getItem("Serialized");
  // console.log("The value of user is "+User);
  const user = JSON.parse(Serialized);
  console.log("The User data is : "+user);
  console.log("The User name is : "+user.name);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [address, setAddress] = useState(user.address);
  const [password, setPassword] = useState(user.password);
  const [cpassword, setcPassword] = useState(user.cpassword);
  const [contact, setContact] = useState(user.contact);
  const [className, setClassName] = useState(user.className);
  const [rollNumber, setRollNumber] = useState(user.rollNumber);
  const navigate = useNavigate();
  const fetchData = ()=>{
    let data = {
      email : email
    }
    apiServices.user(data).then((data)=>{
      // console.log("The data is : "+data.data.User);
      // console.log("The data is : "+data.data.data.name);
      let varei = JSON.stringify(data.data.data);
      console.log("The stingify data is : "+varei);
      const parsedData = JSON.parse(varei);
      console.log("parsed Data : "+parsedData.name);
      sessionStorage.setItem("Serialized",varei);
      sessionStorage.setItem("name",parsedData.name);
      // return parsedData;
    }).catch((err)=>{
      console.log("The Errr is :",err);
    })
    
  }
  const handleForm = (e) => {
    e.preventDefault();
    setLoading(true);
    if (password !== cpassword) {
      setTimeout(() => {
        setLoading(false);
        toast.error("Password must be same");
      }, 1000);
    }
    else{
      const _id = sessionStorage.getItem("UserID");
      let data = {
        _id : _id,
        email: email,
        password: password,
        cpassword : cpassword,
        address: address,
        contact: contact,
        name: name,
        className: className,
        rollNumber : rollNumber
      };
    apiServices
      .update(data)
      .then((x) => {
        console.log("the value of x is :"+x.data.success);
        console.log("the value of x is :"+x.data.msg);
        if (x.data.success) {
          setTimeout(() => {
            setLoading(false);
            navigate("/profile");
          }, 1000);
          toast.success("User Updated successfully");
          sessionStorage.removeItem("Serialized");
          fetchData();
          render();
        } else {
          setTimeout(() => {
            setLoading(false);
            toast.error("User already Updated");
          }, 1000);
        }
      })
      .catch((error) => {
        console.log(error);
        // toast.error("Something went wrong!! Try again later.");
      });
  }};
  const headingStyle = {
    fontSize: "135%",
  };

  return (
    <>
      <h1 className="mt-4" style={headingStyle}>Edit Profile</h1>
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
      <div className="container mb-3 mt-2 d-flex justify-content-center flex">
        <div className="row col-5 shadow-lg p-3 mb-3 bg-body rounded">
          <h1 className="mb-3 ">Sign-Up</h1>
          <form onSubmit={handleForm}>
            {/* <!-- Email input --> */}
            <div class="form-outline mb-2">
              <label class="form-label" for="form2Example1">
                Your Name
              </label>
              <input
                type="text"
                id="form2Example0"
                class="form-control"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div class="form-outline mb-2">
              <label class="form-label" for="form2Example1">
                Email address
              </label>
              <input
                type="email"
                id="form2Example1"
                class="form-control"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* <!-- Password input --> */}
            <div className="d-flex flex-row ">
              <div class="form-outline mb-2 me-2 flex-grow-1">
                <label class="form-label" for="form2Example2">
                  Password
                </label>
                <input
                  type="password"
                  id="form2Example2"
                  class="form-control"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div class="form-outline mb-2 me-2 flex-grow-1">
                <label class="form-label" for="form2Example3">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="form2Example3"
                  class="form-control"
                  required
                  value={cpassword}
                  onChange={(e) => setcPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="d-flex flex-row ">
              <div class="form-outline mb-2 me-2 flex-grow-1">
                <label class="form-label" for="form2Example4">
                  Class
                </label>
                <input
                  type="text"
                  id="form2Example4"
                  class="form-control"
                  required
                  value={className}
                  onChange={(e) => setClassName(e.target.value)}
                />
              </div>
              <div class="form-outline mb-2 me-2 flex-grow-1">
                <label class="form-label" for="form2Example5">
                  Roll Number
                </label>
                <input
                  type="text"
                  id="form2Example5"
                  class="form-control"
                  required
                  value={rollNumber}
                  onChange={(e) => setRollNumber(e.target.value)}
                  disabled={true}
                />
              </div>
            </div>
            <div class="form-outline mb-2">
              <label class="form-label" for="form2Example6">
                Address
              </label>
              <input
                type="text"
                id="form2Example6"
                class="form-control"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div class="form-outline mb-2">
              <label class="form-label" for="form2Example7">
                Contact
              </label>
              <input
                type="number"
                id="form2Example7"
                class="form-control"
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
            <button
              type="submit"
              class="btn site-btn btn-block mb-2 btn-primary"
            >
              Edit
            </button>
          </form>
          {/* <!-- Register buttons --> */}
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
