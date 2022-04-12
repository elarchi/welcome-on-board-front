//style
import "./todolist.scss";

const ToDoList = ({ setHeaderState }) => {
  setHeaderState(2);
  return (
    <div className="todolist__div">
      <div className="container__div headband__div ">
        <h1>LA DATE DU JOUR</h1>
        <button>ADD LIST</button>
      </div>
    </div>
  );
};

export default ToDoList;
