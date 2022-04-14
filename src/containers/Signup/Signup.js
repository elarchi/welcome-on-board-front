//packages
import { useState } from "react";
/*import axios from "axios";*/
//style
import "./signup.scss";

const Signup = ({ setHeaderState }) => {
  setHeaderState(1);

  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (
        !username |
        !firstname |
        !lastname |
        !email |
        !password |
        !confirmPassword
      ) {
        setErrorMessage(
          "Did you forget anything ?🧐 Please, fit all the fields to submit your registration."
        );
      } else if (password !== confirmPassword) {
        setErrorMessage("Your passwords don’t concorde.");
      }
    } catch {}
  };

  return (
    <div className="signup__div">
      <div className="form__div">
        <form className="form__form" onSubmit={handleSubmit}>
          <div className="titles__div">
            <h1>Ahoy mate,</h1>
            <h2>Ready to get aboard?</h2>
          </div>
          <div className="fields__div">
            <input
              type="text"
              placeholder="Username"
              onChange={(event) => setUsername(event.target.value)}
            />

            <input
              type="text"
              placeholder="Firstname"
              onChange={(event) => setFirstname(event.target.value)}
            />

            <input
              type="text"
              placeholder="Lastname"
              onChange={(event) => setLastname(event.target.value)}
            />

            <input
              type="email"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />

            <input
              type="password"
              placeholder="Confirm password"
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </div>
          <div className="submit__div">
            <button>SUBMIT</button>
            <p>{errorMessage}</p>
            <p>Already have an account?</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
