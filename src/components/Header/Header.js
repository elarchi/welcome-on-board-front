//packages
import { Link } from "react-router-dom";
//style
import "./header.scss";

const Header = ({ headerState }) => {
  //0: Opening page
  //1: Signup page
  //2: To-do list page as a guest

  return (
    <>
      {headerState === 0 ? null : headerState === 1 ? null : (
        <div className="header__div">
          <div className="container__div items__div">
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <h1>🦜 Welcome on Board</h1>
            </Link>

            <div className="nav__div">
              <button>SIGN UP</button>
              <button>LOGIN</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
