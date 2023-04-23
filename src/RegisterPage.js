import "./RegisterPage.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const FormRow = ({ labelText, type = "text" }) => {
  return (
    <div className="form-row">
      <label className="form-label">{labelText}</label>
      <input type={type} className="form-input"></input>
    </div>
  );
};

function RegisterPage() {
  const [isMember, setIsMember] = useState(false);

  const onSubmit = () => {
    console.log("form submitted");
  };

  return (
    <div>
      <div className="container page">
        <form class="form" onSubmit={onSubmit}>
          <h3>{isMember ? "Login" : "Register"}</h3>

          {!isMember && <FormRow labelText="Name" />}
          <FormRow type="email" labelText="Email" />
          <FormRow type="password" labelText="Password" />
          {!isMember && (
            <FormRow type="password" labelText="Confirm Password" />
          )}
          <Link to="/home">
            <button className="btn-register">Submit</button>
          </Link>
          {!isMember && (
            <p className="login-register-text">
              Already have an account? Please
              <span
                className="login-register-link"
                onClick={() => setIsMember(!isMember)}
              >
                {" "}
                Login
              </span>
            </p>
          )}
          {isMember && (
            <p className="login-register-text">
              Don't have an account? Please
              <span
                className="login-register-link"
                onClick={() => setIsMember(!isMember)}
              >
                {" "}
                Register
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
