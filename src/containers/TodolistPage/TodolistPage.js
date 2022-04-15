//__________package__________
import { useState } from "react";
//__________style__________
import "./todolistPage.scss";
//__________component__________
import TodolistModal from "../../components/TodolistModal/TodolistModal";
import FormattedDate from "../../components/FormattedDate/FormattedDate";

const TodolistPage = ({ setHeaderState }) => {
  setHeaderState(2);

  //__________item operation__________
  const [itemTitle, setItemTitle] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [listTab, setListTab] = useState([
    { title: "Brasil trip", isDone: false },
  ]);
  const [taskTab, setTaskTab] = useState([
    { title: "Check passport's validity", isDone: false, isImportant: true },
    { title: "Learn brasil history", isDone: false, isImportant: false },
    { title: "Learn portuguese", isDone: false, isImportant: false },
  ]);
  const [tasksDoneTab, setTasksDoneTab] = useState([]);
  const howManyDone = tasksDoneTab.length;
  const totalTasks = taskTab.length;

  const handleCreateItem = (event) => {
    event.preventDefault();
    if (whichItem === "list") {
      const newListTab = [...listTab];
      newListTab.push({ title: itemTitle, description: itemDescription });
      setListTab(newListTab);
    } else if (whichItem === "task") {
      const newTaskTab = [...taskTab];
      newTaskTab.push({
        title: itemTitle,
        /*isImportant: false,*/
        description: itemDescription,
        isDone: false,
      });
      setTaskTab(newTaskTab);
    }
    setItemTitle("");
    setItemDescription("");
    setOpenModal(false);
  };

  const handleTaskDone = (task, index) => {
    const newTaskTab = [...taskTab];
    const newTasksDoneTab = [...tasksDoneTab];
    newTaskTab.map(() => {
      if (task.isDone === false) {
        newTaskTab[index].isDone = true;
        newTasksDoneTab.push(task);
      } else {
        newTasksDoneTab.splice(index, 1);
        newTaskTab[index].isDone = false;
      }
    });
    setTaskTab(newTaskTab);
    setTasksDoneTab(newTasksDoneTab);
  };

  const handleDeleteTask = (indexItem) => {
    const newTaskTab = [...taskTab];
    newTaskTab.splice(indexItem, 1);
    setTaskTab(newTaskTab);
  };

  const handleDeleteList = (indexItem) => {
    const newListTab = [...listTab];
    newListTab.splice(indexItem, 1);
    setListTab(newListTab);
  };

  //__________modal operation__________
  const [whichItem, setWhichItem] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleClickAddList = (event) => {
    event.preventDefault();
    setWhichItem("list");
    setOpenModal(true);
  };

  const handleClickAddTask = (event) => {
    event.preventDefault();
    setWhichItem("task");
    setOpenModal(true);
  };

  const closeModal = () => {
    setItemTitle("");
    setItemDescription("");
    setOpenModal(false);
  };

  return (
    <div className="todolist__div">
      <div className="headband__div container__div  ">
        <FormattedDate />
        <button onClick={handleClickAddList}>ADD LIST</button>
      </div>
      <div className="list-section__div container__div">
        {listTab.map((list, index) => {
          return (
            <div className="listCard__div" key={index}>
              <div className="listHead__div">
                <h2>{list.title.toUpperCase()}</h2>
                <div className="updateItem__div">
                  <span>🖊</span>
                  <span
                    onClick={() => {
                      handleDeleteList(index);
                    }}
                  >
                    🗑
                  </span>
                </div>

                <span>
                  {howManyDone}/{totalTasks}
                </span>
              </div>
              <div className="listBody__div">
                {taskTab.map((task, index) => {
                  return (
                    <div
                      className={
                        task.isImportant
                          ? "taskCard__div importantTaskCard__div"
                          : "taskCard__div notImportantTaskCard__div"
                      }
                      key={index}
                    >
                      <h3
                        className={
                          task.isDone ? "taskDone__h3" : "taskNotDone__h3"
                        }
                      >
                        {task.title}
                      </h3>
                      <div className="cardOptions__div">
                        <span>🖊</span>
                        <span
                          onClick={() => {
                            handleDeleteTask(index);
                          }}
                        >
                          🗑
                        </span>
                        <span
                          onClick={() => {
                            handleTaskDone(task, index);
                          }}
                        >
                          ✅
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="listFooter__div">
                <button onClick={handleClickAddTask}>+</button>

                <span> Add a task</span>
              </div>
            </div>
          );
        })}
      </div>
      <TodolistModal
        openModal={openModal}
        closeModal={closeModal}
        whichItem={whichItem}
        handleCreateItem={handleCreateItem}
        itemTitle={itemTitle}
        setItemTitle={setItemTitle}
        itemDescription={setItemDescription}
        setItemDescription={setItemDescription}
        // setIsImportant={setIsImportant}
      />
    </div>
  );
};

export default TodolistPage;
