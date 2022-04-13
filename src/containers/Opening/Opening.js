//packages
import { Link } from "react-router-dom";
//style
import "./opening.scss";

const Opening = ({ setHeaderState }) => {
  setHeaderState(0);

  return (
    <div className="opening__div">
      <div className="black-rectangle__div">
        <div className="rectangle-with-white-borders__div">
          <h2>WELCOME ON</h2> <h1>BOARD</h1>
        </div>
      </div>
      <div className="nav__div">
        <div className="community__div">
          {/* <Link to="/signup"> */}
          <button>SIGNUP</button>
          {/* </Link> */}

          <button>LOGIN</button>
        </div>
        <Link to="/todolist">
          <button>START AS A GUEST</button>
        </Link>
      </div>
    </div>
  );
};

export default Opening;
