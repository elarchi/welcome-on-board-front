import "./header.scss";

const Header = ({ headerState }) => {
  return (
    <>{headerState === 1 ? <div className="header__div">coucou</div> : null}</>
  );
};

export default Header;
