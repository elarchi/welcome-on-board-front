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
            <h1>⚓️ Welcome on Board</h1>
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
