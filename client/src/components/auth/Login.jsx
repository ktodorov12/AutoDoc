import { Link } from "react-router";
import useAuth from "../../hooks/auth/useAuth";

const initialValues = {
  email: "",
  password: "",
};

export default function Login() {
  const { inputs, handleChange, handleSubmit } = useAuth(initialValues);

  return (
    <div className="authentication-container">
      <div className="container container-flex-center">
        <div className="auth-holder container-flex-center">
          <h1>Log in</h1>
          <p>Enter your details to continue</p>
          <form className="authentication-form" onSubmit={(e) => handleSubmit(e, "login")}>
            <input type="text" name="email" placeholder="Email" onChange={handleChange} value={inputs.email} />
            <input type="text" name="password" placeholder="Password" onChange={handleChange} value={inputs.password} />

            {/* TODO: add locig for remember me and forgotten password */}
            <div className="form-tools">
              <input type="checkbox" id="rememberMe" name="rememberMe" value="remember" />
              <label htmlFor="rememberMe">Remember me!</label>
              {/* TODO: add link and logic */}
              <a href="#">Forgot password?</a>
            </div>
            {/*  */}

            <button className="btn" type="submit">
              Continue
            </button>

            <div className="container-flex-center form-others">
              <p className="separator">or</p>

              {/* TODO: fix links and add logic for additional login */}
              <div className="auth-links">
                <a href="#">G</a>
                <a href="#">F</a>
                <a href="#">X</a>
              </div>
            </div>
            {/*  */}

            <p className="form-change-auth">
              You don&apos;t have an account? <Link to="/register">Sign up!</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
