
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import apiServices from "../Admin/apiServices"
// import { ClipLoader } from "react-spinners";
import { HashLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import logo from '../Assets/logo.png'
import {Avatar} from '@chakra-ui/react';

export default function Login() {
    const [loading, setLoading]=useState(false)
    const navigate = useNavigate()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState()

    const handleForm=(e)=>{
        e.preventDefault()
        setLoading(true)
        let data={
             email:email,
             password:password, 
        }
        console.log(data);
        apiServices.login(data).then(
            (x)=>{
                console.log("The value of x3 is : "+x.data.status);// Debug
                if(x.data.status === 404){
                    setTimeout(() => {
                        setLoading(false);
                        toast.error("User not found");
                    }, 1000);
                }
                else if(x.data.status===200){
                    console.log("Status Code is "+x.data.status);
                    // sessionStorage.setItem("token",x.data.data.token)
                    console.log(x.data.status);
                    console.log("The id of the user is : "+x.data.data._id);
                    sessionStorage.setItem("UserID",x.data.data._id);
                    sessionStorage.setItem("name",x.data.data.name);
                    sessionStorage.setItem("User",x.data.data);
                    console.log("The User data is : "+x.data.data);
                    const serializedUser = JSON.stringify(x.data.data);
                    sessionStorage.setItem("Serialized",serializedUser);
                    console.log("The User data is more : "+x.data.data.name);
                    sessionStorage.setItem("authorize", true)
                    if (x.data.data.userType === 1 || x.data.data.userType ==="1") {
                        toast.success("Admin Login")
                        setTimeout(() => {
                            navigate("/admindashboard")
                        }, 1000);
                        
                    }
                    else {
                        setTimeout(async () => {
                            setLoading(false);
                            console.log("The Login Code :"+x.data.msg);
                        }, 1000);
                        toast.success("Login Successfully ");
                        navigate("/home")
                    }
                }
                else{
                    setTimeout(() => {
                        setLoading(false);
                        // toast.error("User not found")
                        console.log("password not matched");
                        toast.error("password Not matched");
                        // toast.error(msg);
                    }, 1000);
                }
            }
        ).catch(
            (error)=>{
                setTimeout(
                    ()=>{
                        setLoading(false)
                        console.log(error.data.msg);
                        toast.error("Something went wrong!! try again later");
                    },1000
                )
                console.log(error)
            }
        )
    }

    // const cssobj={
    //     position:"absolute",
    //     top:"50%",
    //     left:"50%",
    // }
    const headingStyle = {
        fontSize: '135%',
      };
    return (
        <>
        <Avatar size={"sm"} src={logo} w={10} h={10} marginTop="4%"/>
        <h1 style={headingStyle}>The Quiz App</h1>
        <div className="d-flex justify-content-center align-items-center ">
        {loading && (
          <HashLoader
            color={'#3585c1'}
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              width: '100%',
              height: '100%',
              position: 'fixed',
              top: '0',
              left: '0',
              zIndex: '9999',
            }}
          />
        )}
      </div>
        <div className={loading?"disabled_screen":""}>
        {/* <ClipLoader loading={loading} cssOverride={cssobj}/> */}
            <div className="container mb-5 mt-5 d-flex justify-content-center ">
                <div className="row col-5 shadow-lg p-3 mb-5 bg-body rounded">
                    <form onSubmit={handleForm}>
                        <h3 className="mb-4 fw-normal">Login</h3>
                        {/* <!-- Email input --> */}
                        <div class="form-outline mb-4">
                            <input type="email" id="form2Example1" class="form-control" required value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="abc@gmail.com" />
                            <label class="form-label" for="form2Example1" >Email address</label>
                        </div>

                        {/* <!-- Password input --> */}
                        <div class="form-outline mb-4">
                            <input type="password" id="form2Example2" class="form-control" required value={password} onChange={(e) => { setPassword(e.target.value) }} />
                            <label class="form-label" for="form2Example2">Password</label>
                        </div>        
                   <button type="submit" class="btn site-btn btn-block mb-4 btn-primary">Login</button>

                       {/* <!-- Register buttons --> */}
                       <div class="text-center ">
                           <p>Not a member? <Link to='/signup'><a className="red-color" href="#!" >Register</a></Link></p>
                         
                        </div>
                    </form>
               </div>

            </div>
           <ToastContainer />
           </div>
       </>
    )
}
// import React, { useState } from 'react';
// import {
//   MDBContainer,
//   MDBTabs,
//   MDBTabsItem,
//   MDBTabsLink,
//   MDBTabsContent,
//   MDBTabsPane,
//   MDBBtn,
//   MDBIcon,
//   MDBInput,
//   MDBCheckbox
// }
// from 'mdb-react-ui-kit';
// import {Link} from "react-router-dom";

// function App() {

//   const [justifyActive, setJustifyActive] = useState('tab1');;

//   const handleJustifyClick = (value) => {
//     if (value === justifyActive) {
//       return;
//     }

//     setJustifyActive(value);
//   };

//   return (
//     <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

//       <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between border border-dark rounded'>
//         <MDBTabsItem>
//           <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
//             Login
//           </MDBTabsLink>
//         </MDBTabsItem>
//         <MDBTabsItem>
//           <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
//             Register
//           </MDBTabsLink>
//         </MDBTabsItem>
//       </MDBTabs>

//       <MDBTabsContent>

//         <MDBTabsPane show={justifyActive === 'tab1'}>

//           {/* <div className="text-center mb-3">
//             <p>Sign in with:</p>

//             {/* <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
//               <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//                 <MDBIcon fab icon='facebook-f' size="sm"/>
//               </MDBBtn>

//               <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//                 <MDBIcon fab icon='twitter' size="sm"/>
//               </MDBBtn>

//               <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//                 <MDBIcon fab icon='google' size="sm"/>
//               </MDBBtn>

//               <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//                 <MDBIcon fab icon='github' size="sm"/>
//               </MDBBtn>
//             </div> */}

//             {/* <p className="text-center mt-3">or:</p>
//           </div>  */}

//           <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
//           <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

//           <div className="d-flex justify-content-between mx-4 mb-4">
//             <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
//             <a href="!#">Forgot password?</a>
//           </div>

//           <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
//           <p className="text-center">Not a member? <Link to="sign-up">Register</Link></p>

//         </MDBTabsPane>

//         <MDBTabsPane show={justifyActive === 'tab2'}>

//           <div className="text-center mb-3">
//             <p>Sign un with:</p>

//             <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
//               <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//                 <MDBIcon fab icon='facebook-f' size="sm"/>
//               </MDBBtn>

//               <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//                 <MDBIcon fab icon='twitter' size="sm"/>
//               </MDBBtn>

//               <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//                 <MDBIcon fab icon='google' size="sm"/>
//               </MDBBtn>

//               <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//                 <MDBIcon fab icon='github' size="sm"/>
//               </MDBBtn>
//             </div>

//             <p className="text-center mt-3">or:</p>
//           </div>

//           <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text'/>
//           <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text'/>
//           <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
//           <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

//           <div className='d-flex justify-content-center mb-4'>
//             <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
//           </div>

//           <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>

//         </MDBTabsPane>

//       </MDBTabsContent>

//     </MDBContainer>
//   );
// }

// export default App;