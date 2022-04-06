//packages
import { Link } from "react-router-dom";
//style
import "./home.scss";

const Home = ({ setHeaderState }) => {
  setHeaderState(0);

  return (
    <div className="home__div">
      <div className="black-rectangle__div">
        <div className="rectangle-with-white-borders__div">
          <h2>WELCOME ON</h2> <h1>BOARD</h1>
        </div>
      </div>
      <div className="nav__div">
        <div className="community__div">
          <Link to="/signup">
            <button>SIGNUP</button>
          </Link>

          <button>LOGIN</button>
        </div>
        <button>LET'S START AS A GUEST</button>
      </div>
      <div className="signature__div">
        <p>
          — App by{" "}
          <a href="https://www.linkedin.com/in/emilie-leury-30a1aa89/">
            emilie leury
          </a>{" "}
          —
        </p>
      </div>
    </div>
  );
};

export default Home;
