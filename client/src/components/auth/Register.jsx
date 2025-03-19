export default function Register() {
  return (
    <div className="authentication-container">
      <div className="container container-flex-center">
        <div className="auth-holder container-flex-center">
          <h1>Register</h1>
          <p>Enter your details to continue</p>
          <form className="authentication-form" action="">
            <div className="form-names-container">
              <input type="text" name="firstName" id="firstName" placeholder="First Name" />
              <input type="text" name="lastName" id="lastName" placeholder="Last Name" />
            </div>

            <input type="text" name="email" placeholder="Email" />
            <input type="text" name="password" placeholder="Password" />
            <input type="text" name="confirmPass" placeholder="Confirm Password" />

            <div className="form-tools">
              <input type="checkbox" id="agreeTerms" name="agreeTerms" value="remember" />
              <label htmlFor="agreeTerms">I agree with Terms and Privacy Policy.</label>
            </div>

            <button className="btn" type="submit">
              Continue
            </button>
            <p className="form-change-auth">
              You already have an account? <a href="/login.html">Log in!</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
