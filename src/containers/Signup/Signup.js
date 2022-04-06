import "./signup.scss";

const Signup = () => {
  return (
    <div className="signup__div">
      <div className="form__div">
        <form className="form__form">
          <div className="titles__div">
            <h1>Ahoy mate,</h1>
            <h2>Ready to get aboard?</h2>
          </div>
          <div className="fields__div">
            <input type="text" placeholder="Firstname" />
            <input type="text" placeholder="Lastname" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm password" />
          </div>
          <div className="submit__div">
            <button>SUBMIT</button>
            <p>Already have an account?</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
