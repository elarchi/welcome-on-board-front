//__________package__________
import { useState } from "react";
//__________style__________
import "./todolist.scss";
//__________component__________
import TodolistModal from "../../components/TodolistModal/TodolistModal";
import FormattedDate from "../../components/FormattedDate/FormattedDate";

const Todolist = ({ setHeaderState }) => {
  setHeaderState(2);

  //__________item operation__________
  const [itemTitle, setItemTitle] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [listTab, setListTab] = useState([]);
  const [taskTab, setTaskTab] = useState([]);
  const [isImportant, setIsImportant] = useState(false);
  /*const [isDone, setIsDone] = useState(false);*/
  /* const [tasksDone, setTasksDone] = useState(0); // combien de task à true ?*/
  const totalTasks = taskTab.length;

  //__________modal operation__________
  const [whichItem, setWhichItem] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleClickAddList = (event) => {
    event.preventDefault();
    setOpenModal(true);
    setWhichItem("list");
  };

  const handleClickAddTask = (event) => {
    event.preventDefault();
    setOpenModal(true);
    setWhichItem("task");
  };

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
        isImportant: isImportant,
        description: itemDescription,
        /* isDone: isDone,*/
      });
      setTaskTab(newTaskTab);
    }
    setItemTitle("");
    setItemDescription("");
    setOpenModal(false);
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
      <div className="list-section__div">
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
                <button onClick={handleClickAddTask}>+</button>
                <span>Add a task</span>
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
      />
    </div>
  );
};

export default Todolist;
