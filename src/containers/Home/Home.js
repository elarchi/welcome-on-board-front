//packages
import { Link } from "react-router-dom";
//style
import "./home.scss";

const Home = () => {
  return (
    <div className="home__div">
      <div className="black-rectangle__div">
        <div className="rectangle-with-white-borders__div">
          <h2>WELCOME ON</h2> <h1>BOARD</h1>
        </div>
      </div>
      <div className="nav__div">
        <Link to="/signup">
          <button>SIGNUP</button>
        </Link>

        <button>LOGIN</button>
      </div>
      <div className="signature__div">
        <p>— app by emilie leury —</p>
      </div>
    </div>
  );
};

export default Home;
