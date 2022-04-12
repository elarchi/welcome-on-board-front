//style
import "./todolist.scss";

const ToDoList = ({ setHeaderState }) => {
  setHeaderState(2);
  return <div className="todolist__div">ToDoList Component</div>;
};

export default ToDoList;
