import { Link } from "react-router";
import useAuth from "../../hooks/auth/useAuth";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPass: "",
};

export default function Register() {
  const { inputs, handleChange, handleSubmit } = useAuth(initialValues);

  return (
    <div className="authentication-container">
      <div className="container container-flex-center">
        <div className="auth-holder container-flex-center">
          <h1>Register</h1>
          <p>Enter your details to continue</p>
          <form className="authentication-form" onSubmit={handleSubmit}>
            <div className="form-names-container">
              <input type="text" name="firstName" id="firstName" placeholder="First Name" onChange={handleChange} value={inputs.firstName} />
              <input type="text" name="lastName" id="lastName" placeholder="Last Name" onChange={handleChange} value={inputs.lastName} />
            </div>

            <input type="text" name="email" placeholder="Email" onChange={handleChange} value={inputs.email} />
            <input type="text" name="password" placeholder="Password" onChange={handleChange} value={inputs.password} />
            <input type="text" name="confirmPass" placeholder="Confirm Password" onChange={handleChange} value={inputs.confirmPass} />

            {/* Add logic for checkboxes */}
            <div className="form-tools">
              <input type="checkbox" id="agreeTerms" name="agreeTerms" value="remember" />
              <label htmlFor="agreeTerms">I agree with Terms and Privacy Policy.</label>
            </div>
            {/*  */}

            <button className="btn" type="submit">
              Continue
            </button>
            <p className="form-change-auth">
              You already have an account? <Link to="/login">Log in!</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
