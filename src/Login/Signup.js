import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HashLoader } from "react-spinners";
import apiServices from "../Admin/apiServices";
import { Avatar } from "@chakra-ui/react";
import logo from "../Assets/logo.png";
export default function Register() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [password, setPassword] = useState();
  const [cpassword, setcPassword] = useState();
  const [contact, setContact] = useState();
  const [className, setClassName] = useState();
  const [rollNumber, setRollNumber] = useState();
  //   const [Err, setErr] = useState(false);
  const navigate = useNavigate();

  // const handleForm = (e) => {
  //     e.preventDefault()
  //     if(password !== cpassword){
  //       toast.error("Password must be same")
  //     }
  //     let data = {
  //         email: email,
  //         password: password,
  //         address: address,
  //         contact: contact,
  //         name: name,
  //         className:className,
  //         rollNumber: rollNumber
  //     }
  //     apiServices.register(data).then((req,res) => {
  //       console.log(JSON.stringify(res));
  //         // console.log(x.data.success)
  //         console.log(res.data);
  //         console.log(res.status);
  //         if(res.status === 200){
  //             toast.success("User register")
  //             setLoading(true)
  //         }

  //         else{
  //             console.log(res.data);
  //             toast.error("User already register")
  //         }
  //     }).catch(
  //         (error) => {
  //             console.log(error)
  //             toast.error(error.response?.data);
  //         }
  //     )
  // }

  const handleForm = (e) => {
    e.preventDefault();
    setLoading(true);
    if (password !== cpassword) {
      setTimeout(() => {
        setLoading(false);
        toast.error("Password must be same");
      }, 1000);
    } else {
      let data = {
        email: email,
        password: password,
        cpassword: cpassword,
        address: address,
        contact: contact,
        name: name,
        className: className,
        rollNumber: rollNumber,
      };
      apiServices
        .register(data)
        .then((x) => {
          console.log(x.data.success);
          console.log(x.data.msg);
          if (x.data.success) {
            setTimeout(() => {
              setLoading(false);
              console.log("The User ID is : "+x.data.data._id);
              sessionStorage.setItem("UserID", x.data.data._id);
              sessionStorage.setItem("name", x.data.data.name);
            }, 1000);
            toast.success("User register");
            navigate("/");
          } else {
            setTimeout(() => {
              setLoading(false);
              toast.error("User already register");
            }, 1000);
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Something went wrong!! Try again later.");
        });
    }
  };
  const headingStyle = {
    fontSize: "135%",
  };
  return (
    <>
      <Avatar size={"sm"} src={logo} w={10} h={10} marginTop="2%" />
      <h1 style={headingStyle}>The Quiz App</h1>
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
              <label class="form-label" for="form2Example2">
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
              Register
            </button>
          </form>
          {/* <!-- Register buttons --> */}
          <div class="text-center ">
            <p>
              Already member?{" "}
              <Link to="/">
                <a href="#!" className="red-color">
                  Login
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
