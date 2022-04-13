//package
import { useState } from "react";
//style
import "./todolist.scss";

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
    });
    setTaskTab(newTaskTab);
    setTaskTitle("");
    setTaskDescription("");
    setIsImportant(false);
    setTaskModal(false);
  };

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
                <span>counter</span>
              </div>
              <div className="listBody__div">
                {taskTab.map((task, index) => {
                  return (
                    <div className="taskCard__div" key={index}>
                      <h3>{task.title}</h3>
                      <div className="cardOptions__div">
                        <span>🖊</span>
                        <span>🗑</span>
                        <span>✅</span>
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
      {/* LIST MODAL */}
      <div
        className={
          listModal ? "list-modal-enable__div" : "list-modal-disable__div"
        }
      >
        <div className="quit__div">
          <button onClick={closeListModal}>X</button>
        </div>
        <div className="title__div">
          <h1>LIST OPTIONS</h1>
        </div>
        <form className="create-list__form" onSubmit={handleCreateList}>
          <div className="form-title__div">
            <h2>TITLE</h2>
            <input
              type="text"
              value={listTitle}
              onChange={(event) => {
                setListTitle(event.target.value);
              }}
            />
          </div>
          <div className="description__div">
            <input
              type="textarea"
              placeholder="Write a description..."
              value={listDescription}
              onChange={(event) => {
                setListDescription(event.target.value);
              }}
            />
          </div>
          <div className="buttons__div">
            <button onClick={closeListModal}>CANCEL</button>
            <button type="submit">CREATE LIST</button>
          </div>
        </form>
      </div>
      {/* TASK MODAL */}
      <div
        className={
          taskModal ? "task-modal-enable__div" : "task-modal-disable__div"
        }
      >
        <div className="quit__div">
          <button onClick={closeTaskModal}>X</button>
        </div>
        <div className="title__div">
          <h1>TASK OPTIONS</h1>
        </div>
        <form className="create-task__form" onSubmit={handleCreateTask}>
          <div className="form-title__div">
            <h2>TITLE</h2>
            <input
              type="text"
              value={taskTitle}
              onChange={(event) => {
                setTaskTitle(event.target.value);
              }}
            />
          </div>
          <div className="importance__div">
            <h2>Important?</h2>
            <div className="buttons__div">
              <input
                type="radio"
                name="importance"
                id="YES"
                onClick={() => {
                  setIsImportant(true);
                }}
              />
              <label for="YES">YES</label>
              <input
                type="radio"
                name="importance"
                id="NO"
                onClick={() => {
                  setIsImportant(false);
                }}
              />
              <label for="NO">NO</label>
            </div>
          </div>
          <div className="description__div">
            <input
              type="textarea"
              placeholder="Write a description..."
              value={taskDescription}
              onChange={(event) => {
                setTaskDescription(event.target.value);
              }}
            />
          </div>
          <div className="buttons__div">
            <button onClick={closeTaskModal}>CANCEL</button>
            <button type="submit">CREATE TASK</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ToDoList;
