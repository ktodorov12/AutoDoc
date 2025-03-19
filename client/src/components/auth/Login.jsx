export default function Login() {
  return (
    <div className="authentication-container">
      <div className="container container-flex-center">
        <div className="auth-holder container-flex-center">
          <h1>Log in</h1>
          <p>Enter your details to continue</p>
          <form className="authentication-form" action="">
            <input type="text" name="email" placeholder="Email" />
            <input type="text" name="password" placeholder="Password" />
            <div className="form-tools">
              <input type="checkbox" id="rememberMe" name="rememberMe" value="remember" />
              <label htmlFor="rememberMe">Remember me!</label>
              <a href="#">Forgot password?</a>
            </div>
            <button className="btn" type="submit">
              Continue
            </button>

            <div className="container-flex-center form-others">
              <p className="separator">or</p>

              <div className="auth-links">
                <a href="">G</a>
                <a href="">F</a>
                <a href="">X</a>
              </div>
            </div>

            <p className="form-change-auth">
              You don&apos;t have an account? <a href="/register.html">Sign up!</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
