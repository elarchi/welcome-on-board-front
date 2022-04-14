//package
import { useState } from "react";
//style
import "./todolist.scss";
//component
import TodolistListModal from "../../components/TodolistListModal/TodolistListModal";
import TodolistTaskModal from "../../components/TodolistTaskModal/TodolistTaskModal";

const ToDoList = ({ setHeaderState }) => {
  setHeaderState(2);

  //date formatting
  const format = () => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date().toLocaleDateString([], options);
  };

  //list creation
  const [listModal, setListModal] = useState(false);
  const [listTitle, setListTitle] = useState("");
  const [listDescription, setListDescription] = useState("");
  const closeListModal = () => {
    setListTitle("");
    setListDescription("");
    setListModal(false);
  };
  const [listTab, setListTab] = useState([]);
  const handleCreateList = (event) => {
    event.preventDefault();
    const newListTab = [...listTab];
    newListTab.push({ title: listTitle, description: listDescription });
    setListTab(newListTab);
    setListTitle("");
    setListDescription("");
    setListModal(false);
  };

  //task creation
  const [taskModal, setTaskModal] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [isImportant, setIsImportant] = useState(false);
  const [taskDescription, setTaskDescription] = useState("");
  // const [isDone, setIsDone] = useState(false);
  const closeTaskModal = () => {
    setTaskTitle("");
    setTaskDescription("");
    setTaskModal(false);
  };
  const [taskTab, setTaskTab] = useState([]);
  const handleCreateTask = (event) => {
    event.preventDefault();
    const newTaskTab = [...taskTab];
    newTaskTab.push({
      title: taskTitle,
      isImportant: isImportant,
      description: taskDescription,
      // isDone: isDone,
    });
    setTaskTab(newTaskTab);
    setTaskTitle("");
    setTaskDescription("");
    setIsImportant(false);
    setTaskModal(false);
  };

  //counter
  // const [tasksDone, setTasksDone] = useState(0); // combien de task à true ?
  const totalTasks = taskTab.length;

  return (
    <div className="todolist__div">
      <div className="headband__div container__div  ">
        <h1>{format()}</h1>
        <button
          onClick={() => {
            setListModal(true);
          }}
        >
          ADD LIST
        </button>
      </div>
      <div className="list-section__div">
        {/* Il faut mapper sur le listTab */}
        {listTab.map((list, index) => {
          return (
            <div className="listCard__div" key={index}>
              <div className="listHead__div">
                <h2>{list.title}</h2>
                <span>/{totalTasks}</span>
              </div>
              <div className="listBody__div">
                {taskTab.map((task, index) => {
                  return (
                    <div className="taskCard__div" key={index}>
                      <h3>{task.title}</h3>
                      <div className="cardOptions__div">
                        <span>🖊</span>
                        <span>🗑</span>
                        {/* <span onClick={() => {}}>✅</span> */}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="listFooter__div">
                <button
                  onClick={() => {
                    setTaskModal(true);
                  }}
                >
                  +
                </button>
                <span>Add a task</span>
              </div>
            </div>
          );
        })}
      </div>

      <TodolistListModal
        listModal={listModal}
        closeListModal={closeListModal}
        handleCreateList={handleCreateList}
        listTitle={listTitle}
        setListTitle={setListTitle}
        listDescription={listDescription}
        setListDescription={setListDescription}
      />
      <TodolistTaskModal
        taskModal={taskModal}
        closeTaskModal={closeTaskModal}
        handleCreateTask={handleCreateTask}
        taskTitle={taskTitle}
        setTaskTitle={setTaskTitle}
        taskDescription={taskDescription}
        setTaskDescription={setTaskDescription}
        setIsImportant={setIsImportant}
      />
    </div>
  );
};

export default ToDoList;
