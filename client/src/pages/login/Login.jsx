// import React from "react"
// import "./login.css"
// import back from "../../assets/images/my-account.jpg"

// export const Login = () => {
//   return (
//     <>
//       <section className='login'>
//         <div className='container'>
//           <div className='backImg'>
//             <img src={back} alt='' />
//             <div className='text'>
//               <h3>Login</h3>
//               <h1>My account</h1>
//             </div>
//           </div>

//           <form>
//             <span>Username or email address *</span>
//             <input type='text' required />
//             <span>Password *</span>
//             <input type='password' required />
//             <button className='button'>Log in</button>
//           </form>
//         </div>
//       </section>
//     </>
//   )
// }

import React, { Component } from "react";
import Axios from 'axios';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    const data={email:email,password:password}
    Axios.post("http://localhost:4000/login",data)
    .then((res)=>{
      if(res.status===200){
        console.log(res.data);
      }else{
        Promise.reject();
      }
    })
    .catch((err)=>alert(err))
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Login In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary text-white">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          <a href="/sign-up">Sign Up</a>
        </p>
      </form>
    );
  }
}