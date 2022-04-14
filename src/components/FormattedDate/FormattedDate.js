//style
import "./formattedDate.scss";

const FormattedDate = () => {
  const format = () => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date().toLocaleDateString([], options);
  };

  return <h1>{format()}</h1>;
};

export default FormattedDate;
